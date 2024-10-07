import styles from "./Login.module.css";

export function Register() {
    return (
        <div className={styles.div}>
            <h1>Register</h1>
            <form>
                <div className={styles.group}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" placeholder="Username"/>
                    <p className={styles.hint}>4 to 20 alphanumeric characters.</p>
                </div>
                <div className={styles.group}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Email"/>
                </div>
                <div className={styles.group}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Password"/>
                    <p className={styles.hint}>At least 6 characters.</p>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}