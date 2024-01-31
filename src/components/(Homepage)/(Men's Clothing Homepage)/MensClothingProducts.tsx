import { fetchMenClothingProducts } from "@/lib/FetchFakeStoreApi";
import { DisplayMensCard } from "./DisplayMensCard";

export default async function MensClothingProducts() {
    const mensClothingProducts = await fetchMenClothingProducts();

    return (
        <div className="flex flex-wrap justify-center gap-10 p-5 pb-12">
            {mensClothingProducts.map(
                ({ id, title, description, price, image, rating }: ProductProps) => (
                    <DisplayMensCard
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
