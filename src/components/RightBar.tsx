import styles from './SideBar.module.css'

export default function RightBar() {
  return(
    <div className={styles.bar}>
      <div className={styles.button}></div> {/*Login*/}
      <div className={styles.button}></div> {/*Register*/}
    </div>
  )
}