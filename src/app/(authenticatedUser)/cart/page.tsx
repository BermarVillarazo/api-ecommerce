import ReusableAlert from "@/components/(ReusableComponents)/ReusableAlert";
import ReusableTitle from "@/components/(ReusableComponents)/ReusableTitle";
import CartProduct from "@/components/cart/CartProduct";
import { getUser } from "@/lib/FetchFakeStoreApi";
import { cookies } from "next/headers";
import { SESSION_USER } from "../../../../constants/contants";

export default async function Cart() {
    // GET THE COOKIE
    const cookie = cookies().get(SESSION_USER);
    // AFTER GETTING THE COOKIE IT WILL RETURN A USER JSON
    const userInformation = await getUser(Number(cookie?.value));
    // AFTER GETTING THE JSON GET THE USER ID OF THE USER
    const user = userInformation.id;

    return (
        <section className="flex flex-col justify-center items-center">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <div className="mx-auto max-w-3xl">
                    <header className="text-center">
                        <ReusableTitle isProfilePage={false}>Your Cart</ReusableTitle>
                    </header>
                    <ReusableAlert isCartPage={true} />

                    <CartProduct user={user} />
                </div>
            </div>
        </section>
    );
}
