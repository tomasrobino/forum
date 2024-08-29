import styles from './ForumItem.module.css'
import {Link} from "react-router-dom";
export default function ForumItem(props: {isCategory?: boolean, url: string, lastPost: string, timestamp: string, user: string, topics?: number, replies?: number, posts: number, title: string, description: string}) {
  return(
    <div className={styles.item}>
      <div className={styles.left}>
        <div className={styles.icon}></div>
        <div className={styles.titleNDesc}>
          <Link to={"category/"+props.url} className={styles.title}>{props.title}</Link>
          {props.isCategory? <p className={styles.description}>{props.description}</p> : <Link to={"category/"+props.url} className={styles.description}>{props.timestamp}</Link>}
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.group}>
          <div className={`${styles.square}`} >
            <p className={styles.amount}>{props.isCategory? props.topics : props.posts}</p>
            <p className={styles.squareTitle}>{props.isCategory? "topics" : "posts"}</p>
          </div>
          <div className={`${styles.square}`} >
            <p className={styles.amount}>{props.posts}</p>
            <p className={styles.squareTitle}>posts</p>
          </div>
          {props.isCategory? null : <div className={`${styles.square}`} >
            <p className={styles.amount}>{props.replies}</p>
            <p className={styles.squareTitle}>replies</p>
          </div>}
        </div>
        <div className={styles.lastPost}>
          <div className={styles.postTop}>
            <div className={styles.poster}></div>
            <Link to={"category/"+props.url} className={styles.replyTimestamp}>{props.timestamp}</Link>
          </div>
          <p className={styles.postText}>{props.lastPost}</p>
        </div>
      </div>
    </div>
  )
}