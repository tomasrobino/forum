import styles from "./Login.module.css";
import {ChangeEvent, FormEvent, useState} from "react";

export function Register() {
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
    });

    async function handleRegister(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const url = import.meta.env.VITE_URL;
        await fetch(`${url}/forum/users/register`, {
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
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
                <div className={styles.group}>
                    <label htmlFor="username">Username</label>
                    <input onChange={handleInput} value={inputs.username || ""} required type="text" id="username" name="username" placeholder="Username"/>
                    <p className={styles.hint}>4 to 20 alphanumeric characters.</p>
                </div>
                <div className={styles.group}>
                    <label htmlFor="email">Email</label>
                    <input onChange={handleInput} value={inputs.email || ""} required type="email" id="email" name="email" placeholder="Email"/>
                </div>
                <div className={styles.group}>
                    <label htmlFor="password">Password</label>
                    <input onChange={handleInput} value={inputs.password || ""} required type="password" id="password" name="password" placeholder="Password"/>
                    <p className={styles.hint}>At least 6 characters.</p>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}