import styles from './TopBar.module.css'

export function TopBar() {
  return (
    <>
      <h3>ForumName</h3>
      <hr className={styles.bar} />
    </>
  );
}