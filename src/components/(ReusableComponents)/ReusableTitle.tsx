type isProfilePage = {
    isProfilePage: boolean;
};

export default function ReusableTitle({
    children,
    isProfilePage,
}: isProfilePage & { children: React.ReactNode }) {
    return (
        <div
            className={`${
                isProfilePage ? "pt-20 pb-12" : "py-12"
            } text-center font-bold text-5xl text-cyan-50`}
        >
            {children}
        </div>
    );
}
