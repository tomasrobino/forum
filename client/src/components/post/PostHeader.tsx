import styles from './PostHeader.module.css'
import {NavLink} from "react-router-dom";

export function PostHeader(props: {categoryURL: string, category: string, iconColor: string, icon: string, title: string, replies: number, posts: number}) {
  return (
    <>
      <div className={styles.navbar}>
        <NavLink to={"/"} className={styles.navLink} >Home</NavLink>
        <span className={styles.arrow}>→</span>
        <NavLink to={"/category/"+props.categoryURL} className={styles.navLink} >{props.category}</NavLink>
      </div>
      <div className={styles.header}>
        <p className={styles.title}>{props.title}</p>
        <div className={styles.quantities}>
          <div className={styles.box}>
            <p className={styles.amountText}>{props.category}</p>
          </div>
          <div className={styles.box}>
            <p className={styles.amount}>{props.posts}</p>
            <p className={styles.amountText}>posts</p>
          </div>
          <div className={styles.box}>
            <p className={styles.amount}>{props.replies}</p>
            <p className={styles.amountText}>posts</p>
          </div>
        </div>
      </div>
    </>
  );
}