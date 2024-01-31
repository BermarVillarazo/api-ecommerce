"use client";

import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import StarRating from "../(ReusableComponents)/ReusableStarRating";

export function InfiniteMovingCards({
    DisplayJeweleryProducts,
    direction = "right",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    DisplayJeweleryProducts: ProductProps[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
    }, []);
    const [start, setStart] = useState(false);
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    function getDirection() {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty("--animation-direction", "forwards");
            } else {
                containerRef.current.style.setProperty("--animation-direction", "reverse");
            }
        }
    }
    function getSpeed() {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "30s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    }
    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20  max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
                    start && "animate-scroll ",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {DisplayJeweleryProducts.map(
                    ({ id, title, description, price, image, rating }: ProductProps) => (
                        <li
                            key={id}
                            className="w-[290px] sm:w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 s, px-4 py-4 sm:px-8 sm:py-6 md:w-[450px] bg-white text-cyan-950 hover:bg-cyan-50/90 hover:shadow-md hover:shadow-cyan-500/90"
                        >
                            <div className="flex flex-col justify-between h-96">
                                <div
                                    aria-hidden="true"
                                    className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                                ></div>
                                <Image
                                    src={image}
                                    alt={`${title}'s Image`}
                                    width={100}
                                    height={100}
                                    sizes="100vw"
                                    priority
                                    className="w-40 h-40 object-contain mx-auto"
                                />
                                <span className="h-6 overflow-hidden text-lg leading-[1.6] font-bold">
                                    {title}
                                </span>
                                <span className="h-15 overflow-hidden relative z-20 text-sm leading-[1.6] font-medium">
                                    {description}
                                </span>
                                <div className="relative z-20 flex flex-col">
                                    <span className="flex flex-col gap-1">
                                        <span className=" text-sm leading-[1.6] font-bold">
                                            $ {price}
                                        </span>
                                    </span>
                                    <div className="w-full flex items-center justify-between">
                                        <Link
                                            href={`/products/${id}`}
                                            className=" text-sm leading-[1.6] font-medium"
                                        >
                                            Buy me
                                        </Link>
                                        <StarRating rate={rating.rate} count={rating.count} />
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                )}
            </ul>
        </div>
    );
}
