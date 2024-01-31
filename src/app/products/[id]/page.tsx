import ReusableDisplayEachProduct from "@/components/(ReusableComponents)/(Products)/ReusableDisplayEachProduct";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    return data.map((product: ProductProps) => ({
        id: product.id.toString(),
    }));
}

async function getMensClothingProducts(id: string) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();

    return data;
}

export default async function Product({ params }: { params: { id: string } }) {
    if (Number(params.id) > 20) {
        notFound();
    }

    const mensProduct = await getMensClothingProducts(params.id);

    return (
        <section>
            <ReusableDisplayEachProduct
                id={mensProduct.id}
                title={mensProduct.title}
                image={mensProduct.image}
                description={mensProduct.description}
                category={mensProduct.category}
                price={mensProduct.price}
                rating={mensProduct.rating}
            />
        </section>
    );
}
