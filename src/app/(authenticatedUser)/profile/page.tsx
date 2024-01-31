import { Logout } from "@/actions/Logout";
import ReusableTitle from "@/components/(ReusableComponents)/ReusableTitle";
import UserInformation from "@/components/User/UserInformation";
import { getUser } from "@/lib/FetchFakeStoreApi";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { SESSION_USER } from "../../../../constants/contants";

export default async function Profile({ params }: { params: { id: number } }) {
    const cookie = cookies().get(SESSION_USER);
    const user = await getUser(Number(cookie?.value));

    return (
        <section className="flex flex-col justify-center items-center gap-10 h-[900px] lg:h-[65vw]">
            <ReusableTitle isProfilePage={true}>User's Information</ReusableTitle>
            <div className="flex justify-end w-full pr-12">
                <Link href={"/cart"}>
                    <Image
                        src="/cart.svg"
                        alt="Cart Icon"
                        width={100}
                        height={100}
                        className="w-10 h-10 bg-contain"
                    />
                </Link>
            </div>
            <Image
                src="/profile.svg"
                alt="Profile Icon"
                width={100}
                height={100}
                priority
                className="w-32 h-32 bg-contain"
            />
            <UserInformation
                id={user.id}
                email={user.email}
                username={user.username}
                password={user.password}
                name={user.name}
                phone={user.phone}
            />
            <form action={Logout}>
                <button className="font-bold text-white hover:text-cyan-300 hover:bg-cyan-700 transition-colors duration-100 py-3 px-8 rounded-lg">
                    Logout
                </button>
            </form>
        </section>
    );
}
