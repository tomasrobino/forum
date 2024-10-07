import styles from "./Login.module.css"
import {Link} from "react-router-dom";
import {ChangeEvent, FormEvent, useState} from "react";

export function Login() {
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });

    async function handleLogin(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const url = import.meta.env.VITE_URL;
        await fetch(`${url}/forum/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(inputs)
        })
            .then(data => data.json())
            .catch(error => console.error('Error:', error));
    }

    function handleInput(e: ChangeEvent<HTMLInputElement>) {
        setInputs(values => ({ ...values, [e.target.name]: e.target.value }));
    }

    return (
        <div className={styles.div}>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div className={styles.group}>
                    <label htmlFor="email">Email</label>
                    <input onChange={handleInput} value={inputs.email || ""} required type="email" id="email" name="email" placeholder="Email"/>
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