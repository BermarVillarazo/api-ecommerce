"use client";

import { useRouter } from "next/navigation";

export default function SubmitLoginButton() {
    const router = useRouter();

    function handleSubmit() {
        router.push("/products")
    }

    return (
        <button
            onClick={handleSubmit}
            className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
        >
            <span>Log in</span>
        </button>
    );
}
