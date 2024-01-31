import ReusableDisplayProducts from "@/components/(ReusableComponents)/(Products)/ReusableCard";
import ReusableAlert from "@/components/(ReusableComponents)/ReusableAlert";
import { fetchAllProducts } from "@/lib/FetchFakeStoreApi";

export default async function Products() {
    const mensClothingProducts = await fetchAllProducts();

    return (
        <div className="flex justify-center flex-wrap gap-10">
            {mensClothingProducts.map(
                ({ id, title, description, price, image, rating }: ProductProps) => (
                    <ReusableDisplayProducts
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
