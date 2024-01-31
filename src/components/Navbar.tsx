"use client";

import { usCookiesContext } from "@/context/cookies-context";
import { navigation } from "@/utils/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import nookies from "nookies";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrollY, setScrollY] = useState(0);
    const [showNavigation, setShowNavigation] = useState(false);
    const pathname = usePathname();

    const { isAuthenticated } = usCookiesContext();

    useEffect(() => {
        function handleScrollY() {
            setScrollY(window.scrollY);
        }
        window.addEventListener("scroll", handleScrollY);

        return () => {
            window.removeEventListener("scroll", handleScrollY);
        };
    }, []);

    const scrolledNavbar = scrollY < 40;

    function handleShowNavigation() {
        setShowNavigation(!showNavigation);
    }

    function handleLogout() {
        nookies.destroy(null, "sessionId");
    }

    return (
        <nav
            className={`${
                scrolledNavbar ? "" : " shadow-md shadow-[#202020] bg-cyan-950"
            } flex justify-between fixed w-full text-cyan-50 py-3 px-7 md:py-4 md:px-10 2xl:w-[1444px] z-50 transition ease-out duration-300 rounded-b-md`}
        >
            <h1 className="text-xl md:text-4xl font-bold textRed">Fake Ecommerce</h1>
            <ul
                className={`${
                    showNavigation
                        ? "max-md:w-full max-md:absolute max-md:justify-center max-md:gap-5 max-md:py-5 max-md:top-[3.25rem] max-md:left-0 bg-cyan-900/80"
                        : "max-md:w-full max-md:absolute max-md:justify-center max-md:top-[-50px]"
                } flex items-center flex-wrap md:gap-10 text-xs md:text-lg font-bold transition-all ease-in-out duration-300`}
            >
                {navigation.map(({ name, href }) => {
                    const isActiveLink =
                        href === "/" ? pathname === href : pathname.startsWith(href);
                    return (
                        <Link
                            key={name}
                            href={href}
                            className={`${
                                isActiveLink
                                    ? "text-cyan-400 transition-colors ease-in-out duration-300"
                                    : ""
                            }`}
                        >
                            {name}
                        </Link>
                    );
                })}
                {isAuthenticated ? (
                    <Link
                        href={"/profile"}
                        className={`${pathname.startsWith("/profile") && "text-cyan-400"}`}
                    >
                        Profile
                    </Link>
                ) : (
                    <Link
                        href={`${pathname === "/signin" ? "/login" : "/signin"}`}
                        className={`${
                            pathname.startsWith("/login") || pathname.startsWith("/signin")
                                ? "text-cyan-400"
                                : ""
                        }`}
                    >
                        {pathname === "/signin" ? "Log In" : "Sign In"}
                    </Link>
                )}
            </ul>
            <button
                onClick={handleShowNavigation}
                className={`${showNavigation ? "textRed" : ""} md:hidden`}
            >
                {!showNavigation ? "Fake" : "Ecommerce"}
            </button>
        </nav>
    );
}
