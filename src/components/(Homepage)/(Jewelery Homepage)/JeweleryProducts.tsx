import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { fetchJeweleryProducts } from "@/lib/FetchFakeStoreApi";

export default async function JeweleryProducts() {
    const DisplayJeweleryProducts = await fetchJeweleryProducts();

    return (
        <div className="flex flex-wrap justify-center gap-10 pb-12">
            <InfiniteMovingCards
                DisplayJeweleryProducts={DisplayJeweleryProducts}
                direction="left"
                speed="fast"
            />
        </div>
    );
}
