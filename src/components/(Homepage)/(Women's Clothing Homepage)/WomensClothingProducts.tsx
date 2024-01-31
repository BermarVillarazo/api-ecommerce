import { fetchWomenClothingProducts } from "@/lib/FetchFakeStoreApi";
import DisplayWomensCard from "./DisplayWomensCard";

export default async function WomensClothingProducts() {
    const WomensClothingProducts = await fetchWomenClothingProducts();

    return (
        <div className="flex flex-wrap justify-center gap-10 md:px-5">
            {WomensClothingProducts.map(
                ({ id, title, description, price, image, rating }: ProductProps) => (
                    <DisplayWomensCard
                        key={id}
                        id={id}
                        image={image}
                        title={title}
                        description={description}
                        price={price}
                        rating={rating}
                    />
                )
            )}
        </div>
    );
}
