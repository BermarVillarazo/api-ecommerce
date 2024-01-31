"use client";

import { subNavigation } from "@/utils/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function CategoryNavigation() {
    const pathname = usePathname();

    return (
        <nav className="flex flex-wrap justify-center items-center gap-5 sm:gap-10 px-2">
            {subNavigation.map(({ name, href }) => (
                <React.Fragment key={name}>
                    <Link href={href} className={`${pathname === href ? "text-cyan-400" : ""}`}>
                        {name}
                    </Link>
                </React.Fragment>
            ))}
        </nav>
    );
}
