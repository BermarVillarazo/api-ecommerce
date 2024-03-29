import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col justify-center items-center gap-3 h-screen text-cyan-50">
            <p className="text-6xl font-extrabold">Oops, Page not found!</p>
            <span className="text-lg font-medium">
                Back to{" "}
                <Link href={"/"} className="text-cyan-500 hover:underline">
                    homepage
                </Link>
                .
            </span>
        </div>
    );
}
