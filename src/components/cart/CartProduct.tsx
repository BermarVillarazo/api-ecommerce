import { fetchAllProducts, fetchCartProducts } from "@/lib/FetchFakeStoreApi";
import React from "react";
import CartInformation from "./CartInformation";

export default async function CartProduct({ user }: { user: number }) {
    const cartProducts = await fetchCartProducts(user);
    const allProducts = await fetchAllProducts();

    return (
        <>
            {cartProducts.map(({ id, products }: CartProps) => {
                const productId = products?.map(({ productId }) => productId);
                const compareProductId = allProducts.filter((product: ProductProps) =>
                    productId?.includes(product.id)
                );
                return (
                    <React.Fragment key={id}>
                        {compareProductId.map(({ id, title, price, image }: ProductProps) => {
                            return (
                                <div key={id} className="my-16">
                                    <CartInformation title={title} price={price} image={image} />
                                </div>
                            );
                        })}
                    </React.Fragment>
                );
            })}
        </>
    );
}
