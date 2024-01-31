import RelatedProducts from "@/components/RelatedProducts";
import {
    fetchElectronicsProducts,
    fetchJeweleryProducts,
    fetchMenClothingProducts,
    fetchWomenClothingProducts,
} from "@/lib/FetchFakeStoreApi";
import Image from "next/image";
import ReusableButtonLoginVerification from "../(Button)/ReusableButtonLoginVerification";
import StarRating from "../ReusableStarRating";
import ReusableTitle from "../ReusableTitle";

export default function ReusableDisplayEachProducts({
    id,
    image,
    title,
    description,
    category,
    price,
    rating,
}: ProductProps) {
    return (
        <div className="flex flex-col gap-5 w-11/12 overflow-hidden shadow-lg text-black mx-auto">
            <div className="flex max-lg:flex-col gap-10 h-full bg-white rounded p-6">
                <Image
                    src={image}
                    alt={`${title}'s Image`}
                    width={100}
                    height={100}
                    sizes="100vw"
                    priority
                    className="w-96 h-96 object-contain"
                />
                <div className="flex flex-col justify-between">
                    <div className="flex flex-col gap-5">
                        <div>
                            <h1 className="font-bold text-2xl overflow-hidden">{title}</h1>
                            <StarRating rate={rating.rate} count={rating.count} />
                        </div>
                        <div>
                            <span className="text-gray-500 text-sm">Product Description:</span>
                            <h2 className="text-base sm:text-lg overflow-hidden">{description}</h2>
                        </div>
                    </div>
                    <div className="flex justify-between items-center max-lg:mt-5">
                        <span className="font-semibold text-lg max-sm:text-2xl">$ {price}</span>
                        <ReusableButtonLoginVerification id={id} />
                    </div>
                </div>
            </div>
            <section className="py-10">
                <ReusableTitle isProfilePage={false}>Similar Products</ReusableTitle>
                {category === "men's clothing" && <MensClothingProduct />}
                {category === "women's clothing" && <WomensClothingProduct />}
                {category === "electronics" && <ElectronicsProduct />}
                {category === "jewelery" && <JeweleryProduct />}
            </section>
        </div>
    );
}

async function MensClothingProduct() {
    const allProducts = await fetchMenClothingProducts();

    return <RelatedProducts allProducts={allProducts} />;
}

async function WomensClothingProduct() {
    const allProducts = await fetchWomenClothingProducts();

    return <RelatedProducts allProducts={allProducts} />;
}

async function ElectronicsProduct() {
    const allProducts = await fetchElectronicsProducts();

    return <RelatedProducts allProducts={allProducts} />;
}

async function JeweleryProduct() {
    const allProducts = await fetchJeweleryProducts();

    return <RelatedProducts allProducts={allProducts} />;
}
