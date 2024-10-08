import styles from "./Login.module.css"
import {Link} from "react-router-dom";
import {ChangeEvent, FormEvent, useState} from "react";
import {useAuth} from "../../hooks/AuthProvider.tsx";

export function Login() {
    const auth = useAuth();
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    });

    async function handleLogin(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if(inputs.username !== "" && inputs.password !== "") {
            auth.loginAction(inputs);
        }
    }

    function handleInput(e: ChangeEvent<HTMLInputElement>) {
        setInputs(values => ({ ...values, [e.target.name]: e.target.value }));
    }

    return (
        <div className={styles.div}>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div className={styles.group}>
                    <label htmlFor="username">Username</label>
                    <input onChange={handleInput} value={inputs.username || ""} required type="text" id="username" name="username" placeholder="Username"/>
                </div>
                <div className={styles.group}>
                    <label htmlFor="password">Password</label>
                    <input onChange={handleInput} value={inputs.password || ""} required type="password" id="password" name="password" placeholder="Password"/>
                    <Link className={styles.forgotten} to="/recover-password">Forgot password?</Link>
                </div>
                <button className={styles.button} type="submit">Login</button>
            </form>
        </div>
    );
}