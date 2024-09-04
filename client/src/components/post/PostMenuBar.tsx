import styles from './PostMenuBar.module.css'

export function PostMenuBar() {
  return (
    <div className={styles.bar}>
        <div className={styles.buttonDiv}>
          <div className={styles.icon}></div>
          <button className={styles.button}>Newest first</button>
        </div>
      <button className={`${styles.button} ${styles.rightButton}`}>Log in to reply</button>
    </div>
  );
}