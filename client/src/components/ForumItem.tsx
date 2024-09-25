import styles from './ForumItem.module.css'
import {Link} from "react-router-dom";
export default function ForumItem(props: {isCategory?: boolean, url: string, lastPost: string, timestamp: Date, user: string, firstAmount: number, secondAmount: number, title: string, description?: string}) {
  let dateString;
  if (props.timestamp) {
    const timestamp = new Date(props.timestamp)
    dateString = `${timestamp.getUTCDate()}/${timestamp.getUTCMonth()}/${timestamp.getUTCFullYear()}`;
  } else dateString = "";

  return(
    <div className={styles.item}>
      <div className={styles.left}>
        <div className={styles.icon}></div>
        <div className={styles.titleNDesc}>
          <Link to={ (props.isCategory? "category/" : "post/") +props.url} className={styles.title}>{props.title}</Link>
          {props.isCategory? <p className={styles.description}>{props.description}</p> : <Link to={ (props.isCategory? "category/" : "post/") +props.url} className={styles.description}>{dateString}</Link>}
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.group}>
          <div className={`${styles.square}`} >
            <p className={styles.amount}>{props.firstAmount}</p>
            <p className={styles.squareTitle}>{props.isCategory? "topics" : "views"}</p>
          </div>
          <div className={`${styles.square}`} >
            <p className={styles.amount}>{props.secondAmount}</p>
            <p className={styles.squareTitle}>{props.isCategory? "posts" : "replies"}</p>
          </div>
        </div>
        <div className={styles.lastPost}>
          <div className={styles.postTop}>
            <div className={styles.poster}></div>
            <Link to={ (props.isCategory? "category/" : "post/") +props.url} className={styles.replyTimestamp}>{dateString}</Link>
          </div>
          <p className={styles.postText}>{props.lastPost}</p>
        </div>
      </div>
    </div>
  )
}