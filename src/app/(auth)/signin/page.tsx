import ReusableAlert from "@/components/(ReusableComponents)/ReusableAlert";
import { fetchAllUsers } from "@/lib/FetchFakeStoreApi";

export default async function SignIn() {
    const users = await fetchAllUsers();

    return (
        <section className="flex flex-col gap-10 justify-center items-center pt-20 overflow-hidden mx-auto p-5">
            <ReusableAlert isAccountPage={true} />
            <div className="w-full overflow-x-auto">
                <table
                    className="w-full text-left border border-separate rounded border-slate-200"
                    cellSpacing="0"
                >
                    <tbody>
                        <tr>
                            <TableHead>ID</TableHead>
                            <TableHead>EMAIL</TableHead>
                            <TableHead>USERNAME</TableHead>
                            <TableHead>PASSWORD</TableHead>
                            <TableHead>FULL NAME</TableHead>
                            <TableHead>PHONE NUMBER</TableHead>
                        </tr>
                        {users.map(({ id, email, username, password, name, phone }: UserProps) => (
                            <TableRow
                                key={id}
                                id={id}
                                email={email}
                                username={username}
                                password={password}
                                name={name}
                                phone={phone}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

function TableHead({ children }: { children: React.ReactNode }) {
    return (
        <>
            <th
                scope="col"
                className="h-12 px-6 text-sm font-extrabold border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
            >
                {children}
            </th>
        </>
    );
}

function TableRow({ id, email, username, password, name, phone }: UserProps) {
    const fullName = name.firstname + " " + name.lastname;
    return (
        <tr className="ease-linear transition-colors duration-100 hover:bg-slate-200/20 hover:text-white text-slate-400 font-semibold">
            <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500  ">
                {id}
            </td>
            <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500  ">
                {email}
            </td>
            <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500  ">
                {username}
            </td>
            <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500  ">
                {password}
            </td>
            <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500  ">
                {fullName}
            </td>
            <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500  ">
                {phone}
            </td>
        </tr>
    );
}
