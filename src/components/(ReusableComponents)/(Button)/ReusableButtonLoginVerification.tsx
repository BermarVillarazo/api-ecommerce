import { cookies } from "next/headers";
import Link from "next/link";

export default function ReusableButtonLoginVerification({ id }: { id: number }) {
    const cookieUser = cookies();

    const isUserLoggedIn = Boolean(cookieUser.get("sessionId"));

    return (
        <Link
            href={`${isUserLoggedIn ? "/cart" : "/login"}`}
            className="px-4 py-2 rounded-md font-bold bg-transparent bg-cyan-600 hover:bg-cyan-700 hover:text-white text-base transition duration-200"
        >
            Add to cart
        </Link>
    );
}
