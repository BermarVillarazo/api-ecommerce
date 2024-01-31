import { ReactNode } from "react";
import { AuthContextProvider } from "../../../context/cookies-context";

export default function layout({ children }: { children: ReactNode }) {
    return <AuthContextProvider>{children}</AuthContextProvider>;
}
