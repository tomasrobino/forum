import styles from './SideBar.module.css'

export default function LeftBar() {
  return(
    <div className={styles.bar}>
      <div className={styles.button}></div> {/*Recent*/}
      <div className={styles.button}></div> {/*Popular*/}
      <div className={styles.button}></div> {/*Unsolved*/}
      <div className={styles.button}></div> {/*Categories*/}
      <div className={styles.button}></div> {/*Tags*/}
      <div className={styles.button}></div> {/*Chat*/}
    </div>
  )
}