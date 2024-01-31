import ElectronicProducts from "@/components/(Homepage)/(Electronic Homepage)/Electronics";
import JeweleryProducts from "@/components/(Homepage)/(Jewelery Homepage)/JeweleryProducts";
import MensClothingProducts from "@/components/(Homepage)/(Men's Clothing Homepage)/MensClothingProducts";
import WomensClothingProducts from "@/components/(Homepage)/(Women's Clothing Homepage)/WomensClothingProducts";
import ReusableTitle from "@/components/(ReusableComponents)/ReusableTitle";
import { Header } from "@/components/Header";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between gap-32 pt-20">
            <Header />
            <section className="w-full bg-cyan-900 rounded-lg">
                <ReusableTitle isProfilePage={false}>Men's Clothes</ReusableTitle>
                <MensClothingProducts />
            </section>
            <section className="w-full">
                <ReusableTitle isProfilePage={false}>Women's Clothes</ReusableTitle>
                <WomensClothingProducts />
            </section>
            <section className="w-full bg-cyan-900 rounded-lg">
                <ReusableTitle isProfilePage={false}>Jewelery</ReusableTitle>
                <JeweleryProducts />
            </section>
            <section className="w-full">
                <ReusableTitle isProfilePage={false}>Electronics</ReusableTitle>
                <ElectronicProducts />
            </section>
        </main>
    );
}
