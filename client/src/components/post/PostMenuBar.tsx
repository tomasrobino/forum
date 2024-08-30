import styles from './PostMenuBar.module.css'

export function PostMenuBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.barGroup}>
        <div className={styles.buttonDiv}>
          <div className={styles.icon}></div>
          <button className={styles.button}>All tags</button>
        </div>
        <div className={styles.buttonDiv} style={{ marginLeft: "15px" }}>
          <div className={styles.icon}></div>
          <button className={styles.button}>Recently replied</button>
        </div>
      </div>
      <button className={`${styles.button} ${styles.rightButton}`}>Log in to post</button>
    </div>
  );
}