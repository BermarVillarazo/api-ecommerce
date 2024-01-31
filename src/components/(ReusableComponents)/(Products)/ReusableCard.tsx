import Image from "next/image";
import Link from "next/link";
import StarRating from "../ReusableStarRating";

export default function ReusableCard({
    id,
    image,
    title,
    description,
    price,
    rating,
}: ProductProps) {
    return (
        <div className="w-72 overflow-hidden bg-white rounded shadow-lg text-black hover:shadow-cyan-200 ease-in transition duration-200">
            <div className="flex flex-col justify-between gap-4 h-full p-6 text-cyan-900">
                <h1 className="h-7 font-bold text-lg overflow-hidden">{title}</h1>
                <Image
                    src={image}
                    alt={`${title}'s Image`}
                    width={100}
                    height={100}
                    sizes="100vw"
                    priority
                    className="w-52 h-52 object-contain"
                />
                <h2 className="h-20 text-sm overflow-hidden">{description}</h2>
                <div className="flex justify-between text-cyan-600">
                    <span className="font-semibold">$ {price}</span>
                    <StarRating rate={rating.rate} count={rating.count} />
                </div>
                <Link
                    href={`/products/${id}`}
                    className="w-full bg-cyan-900 hover:bg-cyan-500 hover:rounded-lg hover:text-cyan-950 text-center text-cyan-50 font-medium py-2 ease-in transition-all duration-200"
                >
                    Buy me
                </Link>
            </div>
        </div>
    );
}
