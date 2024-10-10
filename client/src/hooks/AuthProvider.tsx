import {useContext, createContext, useState, ReactNode} from "react";
import { useNavigate } from "react-router-dom";
import {authCredentials, credentials} from "../types.ts";

const AuthContext = createContext({});

export default function AuthProvider({ children }: { children: ReactNode }) {
    const url = import.meta.env.VITE_URL;
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("login") || "");
    const navigate = useNavigate();
    async function loginAction(data: credentials) {
        try {
            fetch(`${url}/forum/users/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
                .then(data => {
                    if (data.status === 200) return data.json();
                    throw new Error("User not found");
                })
                .then(data => {
                    setUser(data.username);
                    setToken(data.token);
                    localStorage.setItem("login", data.token);
                    navigate("/");
                })
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

    async function register(data: credentials) {
        await fetch(`${url}/forum/users/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(data => data.json())
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                } else {
                    setUser(data.username);
                    setToken(data.token);
                    localStorage.setItem("username", data.username);
                    localStorage.setItem("login", data.token);
                    navigate("/");
                }
            })
            .catch(error => console.error('Error:', error));
    }

    return (
        <AuthContext.Provider value={{ token, user, loginAction, logOut, register }}>
            {children}
        </AuthContext.Provider>
    );

}

export function useAuth(): authCredentials {
    return useContext(AuthContext) as authCredentials;
}