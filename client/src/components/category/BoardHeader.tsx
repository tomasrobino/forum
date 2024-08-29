import styles from './BoardHeader.module.css'
import {NavLink} from "react-router-dom";

export function BoardHeader(props: {icon: string, title: string, description: string, topicAmount: number, postAmount: number}) {
  return (
    <>
      <NavLink to={"/"} className={styles.navbar} >Home</NavLink>
      <div className={styles.header}>
        <div className={styles.titleNImg}>
          <div className={styles.iconBox}>
            {/* <img className={styles.icon} src={props.icon} alt={props.title}/> */}
          </div>
          <p className={styles.title}>{props.title}</p>
        </div>
        <p className={styles.description}>{props.description}</p>
        <div className={styles.quantities}>
          <div className={styles.box}>
            <p className={styles.amount}>{props.topicAmount}</p>
            <p className={styles.amountText}>topics</p>
          </div>
          <div className={styles.box}>
            <p className={styles.amount}>{props.postAmount}</p>
            <p className={styles.amountText}>posts</p>
          </div>
        </div>
      </div>
    </>
  );
}