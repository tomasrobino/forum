import styles from "./Login.module.css"

export function RecoverPassword() {
  return (
    <div className={styles.div}>
      <p className={styles.desc}>Please enter your account's email address, we will send you an email to help recover your account</p>
      <form>
        <div className={styles.group}>
          <label htmlFor="email">Email</label>
          <input required type="email" id="email" name="email" placeholder="Email"/>
        </div>
        <button style={{ marginTop: "30px" }} type="submit">Recover Password</button>
      </form>
    </div>
  );
}