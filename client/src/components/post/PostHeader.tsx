import styles from './PostHeader.module.css'
import {NavLink, useParams} from "react-router-dom";

export function PostHeader(props: {category: string, iconColor: string, icon: string, title: string, description: string, topicAmount: number, postAmount: number}) {
  const { id } = useParams();
  return (
    <>
      <div className={styles.navbar}>
        <NavLink to={"/"} className={styles.navLink} >Home</NavLink>
        <span className={styles.arrow}>→</span>
        <NavLink to={"/category/"+props.category+"/post/"+id} className={styles.navLink} >{props.category}</NavLink>
      </div>
      <div className={styles.header}>
        <div className={styles.titleNImg}>
          <div className={styles.iconBox} style={{ backgroundColor: props.iconColor }}>
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