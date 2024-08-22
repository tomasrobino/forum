import styles from './SideBar.module.css'

export default function LeftBar() {
  return(
    <div className={styles.bar}>
      <button className={styles.button}></button> {/*Recent*/}
      <button className={styles.button}></button> {/*Popular*/}
      <button className={styles.button}></button> {/*Unsolved*/}
      <button className={styles.button}></button> {/*Categories*/}
      <button className={styles.button}></button> {/*Tags*/}
      <button className={styles.button}></button> {/*Chat*/}
    </div>
  )
}