"use client";

import nookies from "nookies";
import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

type AuthContextProviderProps = {
    children: ReactNode;
};

type AuthContext = {
    isAuthenticated: boolean;
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
};

export const AuthContext = createContext<AuthContext | null>(null);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        function checkSessionId() {
            const cookies = nookies.get();
            setIsAuthenticated(Boolean(cookies.sessionId));
        }
        checkSessionId();

        const intervalId = setInterval(checkSessionId, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
}

export function usCookiesContext() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthContextProvider");
    }
    return context;
}
