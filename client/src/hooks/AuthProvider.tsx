import {useContext, createContext, useState, ReactNode} from "react";
import { useNavigate } from "react-router-dom";
import {authCredentials, credentials} from "../types.ts";

const AuthContext = createContext({});

export default function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("login") || "");
    const navigate = useNavigate();
    async function loginAction(data: credentials) {
        try {
            const url = import.meta.env.VITE_URL;
            const response = await fetch(`${url}/forum/users/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const res = await response.json();
            if (res.data) {
                setUser(res.data.user);
                setToken(res.token);
                localStorage.setItem("login", res.token);
                navigate("/");
                return;
            }
            throw new Error(res.message);
        } catch (err) {
            console.error(err);
        }
    }

    function logOut() {
        setUser(null);
        setToken("");
        localStorage.removeItem("login");
        navigate("/login");
    }

    return (
        <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
            {children}
        </AuthContext.Provider>
    );

}

export function useAuth(): authCredentials {
    return useContext(AuthContext) as authCredentials;
}