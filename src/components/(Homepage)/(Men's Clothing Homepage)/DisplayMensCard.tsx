"use client";

import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import Link from "next/link";
import StarRating from "../../(ReusableComponents)/ReusableStarRating";

export function DisplayMensCard({ id, title, description, price, image, rating }: ProductProps) {
    return (
        <div className="w-full lg:w-80 h-full relative flex items-center justify-enter max-lg:justify-center">
            <DirectionAwareHover imageUrl={image}>
                <p className="font-bold text-md pr-6">{title}</p>
                <p className="h-20 overflow-hidden font-medium text-sm pr-4 my-4 text-justify">
                    {description}
                </p>
                <p className="font-normal text-sm">$ {price}</p>
                <div className="flex justify-between items-center pr-6">
                    <StarRating rate={rating.rate} count={rating.count} />
                    <Link href={`/products/${id}`} className="font-normal text-sm hover:text-cyan-200">
                        Buy me
                    </Link>
                </div>
            </DirectionAwareHover>
        </div>
    );
}
