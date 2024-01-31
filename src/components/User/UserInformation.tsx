export default function UserInformation({ id, email, username, password, name, phone }: UserProps) {
    function capitalizeFirstLtter(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const fullname =
        capitalizeFirstLtter(name.firstname) + " " + capitalizeFirstLtter(name.lastname);

    return (
        <div className="w-full overflow-x-auto">
            <table
                className="w-auto text-left border-collapse rounded w-overflow-x-auto mx-auto"
                cellSpacing="0"
            >
                <tbody>
                    <tr className="border-b border-slate-300 hover:bg-cyan-900/40 transition-colors duration-200">
                        <FirstColumn>User ID: </FirstColumn>
                        <SecondColumn>{id}</SecondColumn>
                    </tr>
                    <tr className="border-b border-slate-200 hover:bg-cyan-900/40 transition-colors duration-200">
                        <FirstColumn>Email: </FirstColumn>
                        <SecondColumn>{email}</SecondColumn>
                    </tr>
                    <tr className="border-b border-slate-200 hover:bg-cyan-900/40 transition-colors duration-200">
                        <FirstColumn>Username: </FirstColumn>
                        <SecondColumn>{username}</SecondColumn>
                    </tr>
                    <tr className="border-b border-slate-200 hover:bg-cyan-900/40 transition-colors duration-200">
                        <FirstColumn>Full Name: </FirstColumn>
                        <SecondColumn>{fullname}</SecondColumn>
                    </tr>
                    <tr className="border-b border-slate-200 hover:bg-cyan-900/40 transition-colors duration-200">
                        <FirstColumn>Phone Number: </FirstColumn>
                        <SecondColumn>{phone}</SecondColumn>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

function FirstColumn({ children }: { children: React.ReactNode }) {
    return (
        <th scope="col" className="h-12 px-6 text-md font-bold stroke-cyan-400 text-cyan-700 ">
            {children}
        </th>
    );
}

function SecondColumn({ children }: { children: React.ReactNode }) {
    return (
        <td className="h-12 px-6 text-lg font-bold-300 border-cyan-200 stroke-cyan-500 text-cyan-300 ">
            {children}
        </td>
    );
}
