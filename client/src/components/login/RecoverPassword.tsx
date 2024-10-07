import styles from "./Login.module.css"
import {ChangeEvent, FormEvent, useState} from "react";

export function RecoverPassword() {
    const [inputs, setInputs] = useState({
        email: ""
    });

    async function handleRecover(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const url = import.meta.env.VITE_URL;
        await fetch(`${url}/forum/users/recover`, {
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
            <p className={styles.desc}>Please enter your account's email address, we will send you an email to help recover your account</p>
            <form onSubmit={handleRecover}>
                <div className={styles.group}>
                    <label htmlFor="email">Email</label>
                    <input onChange={handleInput} value={inputs.email || ""} required type="email" id="email" name="email" placeholder="Email"/>
                </div>
                <button className={styles.button} style={{ marginTop: "30px" }} type="submit">Recover Password</button>
            </form>
        </div>
    );
}