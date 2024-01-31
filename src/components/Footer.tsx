import { aboutUs, docsAndHelp, getInTouch, socialLinks, subNavigation } from "@/utils/links";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer className="w-full text-cyan-100/50 pt-40">
                <div className="pt-16 pb-12 text-sm border-t border-slate-900 bg-cyan-950/70">
                    <div className="container px-6 mx-auto">
                        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                            <FooterCategories />
                        </div>
                    </div>
                </div>
                <div className="py-4 text-sm border-t border-slate-900 bg-cyan-900/40">
                    <div className="container px-6 mx-auto">
                        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                            <div className="col-span-2 md:col-span-4 lg:col-span-6 text-cyan-600">
                                Copyright &copy; 2024
                            </div>
                            <FooterSocials />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

function FooterCategories() {
    return (
        <>
            <nav
                className="col-span-2 md:col-span-4 lg:col-span-3"
                aria-labelledby="footer-product-dark"
            >
                <ReusableTitleFooter>Products</ReusableTitleFooter>
                <ul className="flex flex-col">
                    {subNavigation.map(({ name, href }) => (
                        <Link
                            key={name}
                            href={href}
                            className="mb-2 leading-6 transition-colors duration-300 hover:text-cyan-500"
                        >
                            {name}
                        </Link>
                    ))}
                </ul>
            </nav>
            <nav
                className="col-span-2 md:col-span-4 lg:col-span-3"
                aria-labelledby="footer-docs-dark"
            >
                <ReusableTitleFooter>Docs & help</ReusableTitleFooter>
                <ul className="flex flex-col">
                    {docsAndHelp.map(({ name }) => (
                        <li key={name} className="mb-2 leading-6">
                            <HoverOver>{name}</HoverOver>
                        </li>
                    ))}
                </ul>
            </nav>
            <nav
                className="col-span-2 md:col-span-4 lg:col-span-3"
                aria-labelledby="footer-about-dark"
            >
                <ReusableTitleFooter>About us</ReusableTitleFooter>
                <ul>
                    {aboutUs.map(({ name }) => (
                        <li key={name} className="mb-2 leading-6">
                            <HoverOver>{name}</HoverOver>
                        </li>
                    ))}
                </ul>
            </nav>
            <nav
                className="col-span-2 md:col-span-4 lg:col-span-3"
                aria-labelledby="footer-get-in-touch-dark"
            >
                <ReusableTitleFooter>Get in touch</ReusableTitleFooter>
                <ul className="flex flex-col">
                    {getInTouch.map(({ name }) => (
                        <li key={name} className="mb-2 leading-6">
                            <HoverOver>{name}</HoverOver>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}

function FooterSocials() {
    return (
        <nav
            aria-labelledby="footer-social-links-dark"
            className="col-span-2 text-right md:col-span-4 lg:col-span-6"
        >
            <h2 className="sr-only">Social Media Links</h2>
            <ul className="flex items-center justify-end gap-4">
                {socialLinks.map(({ src, name }) => (
                    <Link
                        key={name}
                        href="/"
                        className="transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src={src}
                            alt={name}
                            width={100}
                            height={100}
                            className="w-auto h-auto bg-contain"
                        />
                    </Link>
                ))}
            </ul>
        </nav>
    );
}

function HoverOver({ children }: { children: React.ReactNode }) {
    return (
        <span className="group relative overflow-hidden cursor-pointer hover:overflow-visible focus-visible:outline-none transition-colors duration-300 hover:text-cyan-500 focus:text-cyan-600">
            {children}
            <span className="invisible absolute bottom-full left-1/2 z-10 mb-2 w-48 -translate-x-1/2 rounded bg-slate-700 p-4 text-sm text-cyan-50 opacity-0 transition-all before:invisible before:absolute before:left-1/2 before:top-full before:z-10 before:mb-2 before:-ml-2 before:border-x-8 before:border-t-8 before:border-x-transparent before:border-t-slate-700 before:opacity-0 before:transition-all before:content-[''] group-hover:visible group-hover:block group-hover:opacity-100 group-hover:before:visible group-hover:before:opacity-100">
                This is just for style purposes.
            </span>

            {/* BELOW IS HOVERING AND SHOWING TO THE BOTTOM */}
            {/* <span className="invisible absolute top-full left-1/2 z-10 mt-2 w-48 -translate-x-1/2 rounded bg-slate-700 p-4 text-sm  text-cyan-50 opacity-0 transition-all before:invisible before:absolute before:left-1/2 before:bottom-full before:z-10 before:-ml-2 before:border-x-8 before:border-b-8 before:border-x-transparent before:border-b-slate-700 before:opacity-0 before:transition-all before:content-[''] group-hover:visible group-hover:block group-hover:opacity-100 group-hover:before:visible group-hover:before:opacity-100">
            This is just for style purposes.
            </span> */}
        </span>
    );
}

function ReusableTitleFooter({ children }: { children: React.ReactNode }) {
    return <h3 className="mb-6 text-base font-medium text-cyan-50">{children}</h3>;
}
