import { AboutWebsite } from "@/utils/links";
import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <section className="flex flex-wrap justify-center items-center gap-5 pt-40 h-full">
            {AboutWebsite.map(({ href, svg, alt, title, description }) => (
                <Link
                    key={title}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10/12 md:w-[30%] flex flex-col justify-center items-center gap-5 p-5 overflow-hidden text-center bg-cyan-100/20 hover:bg-cyan-100/30 rounded shadow-sm text-cyan-700 hover:text-cyan-200 shadow-cyan-100"
                >
                    <div className="flex flex-col justify-center items-center gap-2.5">
                        <Image
                            src={svg}
                            alt={alt}
                            width={100}
                            height={100}
                            priority
                            className="w-14 h-14 bg-contain"
                        />
                        <p className="text-cyan-500 font-semibold text-xl">{title}</p>
                        <p>{description}</p>
                    </div>
                </Link>
            ))}
        </section>
    );
}
