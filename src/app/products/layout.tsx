import ReusableAlert from "@/components/(ReusableComponents)/ReusableAlert";
import CategoryNavigation from "@/components/CategoryNavigation";
import { ReactNode } from "react";

type LayoutProps = {
    children: ReactNode;
};

export default function layout({ children }: LayoutProps) {
    return (
        <section className="flex flex-col justify-center items-center gap-10 pt-20 text-white">
            <CategoryNavigation />
            <ReusableAlert isProductPage={true} />
            {children}
        </section>
    );
}
