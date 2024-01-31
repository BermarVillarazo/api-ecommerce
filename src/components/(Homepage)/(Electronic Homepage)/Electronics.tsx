import HoverEffect from "@/components/ui/card-hover-effect";
import { fetchElectronicsProducts } from "@/lib/FetchFakeStoreApi";

export default async function ElectronicProducts() {
    const DisplayElectronicProducts = await fetchElectronicsProducts();

    return (
        <div className="flex flex-wrap justify-center gap-10 pb-12">
            <HoverEffect DisplayElectronicProducts={DisplayElectronicProducts} />
        </div>
    );
}
