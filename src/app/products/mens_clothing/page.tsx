import ReusableCard from "@/components/(ReusableComponents)/(Products)/ReusableCard";
import { fetchMenClothingProducts } from "@/lib/FetchFakeStoreApi";

export default async function MensClothing() {
    const mensClothingProducts = await fetchMenClothingProducts();

    return (
        <div className="flex justify-center flex-wrap gap-10">
            {mensClothingProducts.map(
                ({ id, title, description, price, image, rating }: ProductProps) => (
                    <ReusableCard
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
