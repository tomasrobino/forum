import styles from './ForumItem.module.css'
export default function ForumItem(props: {isCategory?: boolean, lastPost: string, timestamp: string, user: string, topics?: number, replies?: number, posts: number, title: string, description: string}) {
  return(
    <div className={styles.item}>
      <div className={styles.left}>
        <div className={styles.icon}></div>
        <div className={styles.titleNDesc}>
          <a className={styles.title}>{props.title}</a>
          {props.isCategory? <p className={styles.description}>{props.description}</p> : <a className={styles.description}>{props.timestamp}</a>}
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
            <a className={styles.replyTimestamp}>{props.timestamp}</a>
          </div>
          <p className={styles.postText}>{props.lastPost}</p>
        </div>
      </div>
    </div>
  )
}