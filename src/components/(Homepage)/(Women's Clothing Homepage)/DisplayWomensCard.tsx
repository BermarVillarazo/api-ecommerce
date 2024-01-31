"use client";

import Image from "next/image";

import Link from "next/link";
import StarRating from "../../(ReusableComponents)/ReusableStarRating";
import { CardBody, CardContainer, CardItem } from "../../ui/3d-card";

export default function DisplayWomensCard({
    id,
    image,
    title,
    description,
    price,
    rating,
}: ProductProps) {
    return (
        <CardContainer className="inter-va">
            <CardBody className="flex flex-col gap-3 bg-slate-800 hover:bg-slate-800/90 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-[30rem] rounded-xl p-3 sm:p-6 border">
                {/* TITLE */}
                <CardItem
                    translateZ="50"
                    className="max-sm:w-64 h-10 overflow-hidden text-xl font-bold text-neutral-600 dark:text-cyan-50"
                >
                    {title}
                </CardItem>
                {/* IMAGE */}
                <CardItem translateZ="100" className="w-full h-52 mt-4">
                    <Image
                        src={image}
                        alt={`${title}'s Image`}
                        width={900}
                        height={900}
                        quality={100}
                        priority
                        className="w-44 h-44 object-cover rounded-xl group-hover/card:shadow-xl"
                    />
                </CardItem>
                {/* DESCRIPTION */}
                <CardItem
                    as="p"
                    translateZ="60"
                    className="h-20 overflow-hidden text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                    {description}
                </CardItem>
                {/* PRICE */}
                <CardItem translateZ="70" className="text-xl font-normal dark:text-cyan-50">
                    $ {price}
                </CardItem>
                <CardItem translateZ="70" className="text-xl font-normal dark:text-cyan-50">
                    <StarRating rate={rating.rate} count={rating.count} />
                </CardItem>
                {/* LINK */}
                <div className="flex justify-between items-center mt-2">
                    <CardItem
                        translateZ={20}
                        // as="button"
                        className=" text-xs font-normal dark:text-cyan-50"
                    >
                        <Link href={`/products/${id}`}>Shop now →</Link>
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}
