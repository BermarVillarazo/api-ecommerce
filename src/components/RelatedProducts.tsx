import ReusableDisplayProducts from "@/components/(ReusableComponents)/(Products)/ReusableCard";

export default async function RelatedProducts({ allProducts }: { allProducts: ProductProps[] }) {
    return (
        <div className="flex justify-center flex-wrap gap-10">
        {allProducts.map(({ id, title, description, price, image, rating }: ProductProps) => (
                <ReusableDisplayProducts
                    key={id}
                    id={id}
                    image={image}
                    title={title}
                    description={description}
                    price={price}
                    rating={rating}
                />
            ))}
        </div>
    );
}
