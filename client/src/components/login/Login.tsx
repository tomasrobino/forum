import styles from "./Login.module.css"
import {Link} from "react-router-dom";

export function Login() {
    return (
        <div className={styles.div}>
            <h1>Login</h1>
            <div className={styles.group}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Email"/>
            </div>
            <div className={styles.group}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Password"/>
                <Link className={styles.forgotten} to="/recover-password">Forgot password?</Link>
            </div>
            <button>Login</button>
        </div>
    );
}