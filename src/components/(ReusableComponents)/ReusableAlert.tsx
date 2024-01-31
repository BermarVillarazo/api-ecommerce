import Link from "next/link";
import WarningSVG from "../../../public/WarningSVG";

type ReusableAlertProps = {
    isProductPage?: boolean;
    isAccountPage?: boolean;
    isCartPage?: boolean;
};

export default function ReusableAlert({
    isProductPage,
    isAccountPage,
    isCartPage,
}: ReusableAlertProps) {
    return (
        <>
            <div
                className="flex w-full items-center gap-4 rounded border border-amber-100 bg-amber-500/40 px-4 py-3 text-sm text-amber-500"
                role="alert"
            >
                <div className="max-sm:hidden">
                    <WarningSVG />
                </div>
                {isProductPage && (
                    <p className="text-justify">
                        Warning! This page contains just fake products that have been set up for
                        showcase. They are not real products available for purchase. These mock
                        products are used to demonstrate the user experience and evaluate the
                        website's functioning. For complete details on the mock products, please
                        visit the API website at:{" "}
                        <u className="text-cyan-500">
                            <Link
                                href={"https://fakestoreapi.com/products"}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                https://fakestoreapi.com/products
                            </Link>
                        </u>
                        .
                    </p>
                )}
                {isAccountPage && (
                    <p className="text-justify">
                        Warning! The accounts that are displayed are simply fake and meant to serve
                        as examples. They act as models for how consumers should interact with the
                        website, mimicking a consumer's experience for testing and presentation. Api
                        website link:{" "}
                        <u className="text-cyan-500">
                            <Link
                                href={"https://fakestoreapi.com/users"}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                https://fakestoreapi.com/users
                            </Link>
                        </u>
                        .
                    </p>
                )}
                {isCartPage && (
                    <p className="text-justify">
                        It's important to make it clear on the cart page that the items are
                        retrieved from a specified set of values in the JSON data. The items in the
                        cart are only examples; they don't represent real-world actions taken by
                        users. This mockup emphasizes that the items of the cart are part of the
                        simulated representation, which is intended for testing and display reasons.
                        You can look into the preset values in the API at:{" "}
                        <u className="text-cyan-500">
                            <Link
                                href={"https://fakestoreapi.com/cart"}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                https://fakestoreapi.com/cart
                            </Link>
                        </u>
                        .
                    </p>
                )}
            </div>
        </>
    );
}
