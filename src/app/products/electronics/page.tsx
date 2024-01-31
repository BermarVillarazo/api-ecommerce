import ReusableCard from "@/components/(ReusableComponents)/(Products)/ReusableCard";
import { fetchElectronicsProducts } from "@/lib/FetchFakeStoreApi";

export default async function Electronics() {
    const mensClothingProducts = await fetchElectronicsProducts();

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
