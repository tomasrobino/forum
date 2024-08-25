import styles from './SideBar.module.css'

export default function RightBar() {
  return(
    <div className={styles.bar}>
      <button className={styles.button}></button> {/*Login*/}
      <button className={styles.button}></button> {/*Register*/}
    </div>
  )
}