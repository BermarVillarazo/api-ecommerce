"use client";

import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import StarRating from "../(ReusableComponents)/ReusableStarRating";

export default function HoverEffect({
    DisplayElectronicProducts,
    className,
}: {
    DisplayElectronicProducts: ProductProps[];
    className?: string;
}) {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 ", className)}>
            {DisplayElectronicProducts.map(
                ({ id, title, description, price, image, rating }: ProductProps) => (
                    <Link
                        key={id}
                        href={`/products/${id}`}
                        className="relative group  block p-2 h-full w-full"
                        onMouseEnter={() => setHoveredIndex(id)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <AnimatePresence>
                            {hoveredIndex === id && (
                                <motion.span
                                    className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-cyan-800/[0.8] block  rounded-3xl"
                                    layoutId="hoverBackground"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: 1,
                                        transition: { duration: 0.15 },
                                    }}
                                    exit={{
                                        opacity: 0,
                                        transition: { duration: 0.15, delay: 0.2 },
                                    }}
                                />
                            )}
                        </AnimatePresence>
                        <Card>
                            <CardTitle>{title}</CardTitle>
                            <CardImage image={image} title={title} />
                            <CardDescription>{description}</CardDescription>
                            <CardPrice>$ {price}</CardPrice>
                            <CardRating>
                                <StarRating rate={rating.rate} count={rating.count} />
                            </CardRating>
                        </Card>
                    </Link>
                )
            )}
        </div>
    );
}

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full p-4 overflow-hidden bg-slate-800 hover:bg-slate-800/50 transition-colors duration-200 border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-30",
                className
            )}
        >
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
}
export function CardTitle({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <h4 className={cn("h-10 overflow-hidden text-cyan-50 font-bold tracking-wide", className)}>
            {children}
        </h4>
    );
}

export function CardImage({ image, title }: { image: string; title: string }) {
    return (
        <Image
            src={image}
            alt={`${title}'s Image`}
            width={100}
            height={100}
            sizes="100vw"
            priority
            className="w-60 h-60 object-contain mx-auto mt-5"
        />
    );
}

export function CardDescription({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <p
            className={cn(
                "h-20 overflow-hidden text-cyan-50/50 tracking-wide leading-relaxed text-sm mt-5",
                className
            )}
        >
            {children}
        </p>
    );
}

export function CardPrice({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <p className={cn("text-cyan-50 tracking-wide leading-relaxed text-sm mt-5", className)}>
            {children}
        </p>
    );
}

export function CardRating({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <p className={cn("text-cyan-50 tracking-wide leading-relaxed text-sm mt-5", className)}>
            {children}
        </p>
    );
}
