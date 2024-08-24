import styles from './ForumItem.module.css'

export default function ForumItem(props: {isCategory?: boolean, title: string, description: string}) {
  return(
    <div className={styles.item}>
      <div className={styles.left}>
        <div className={styles.icon}></div>
        <div className={styles.titleNDesc}>
          <a className={styles.title}>{props.title}</a>
          {props.isCategory? <p className={styles.description}>{props.description}</p> : <a className={styles.postTimestamp}>Jul 12, 2017, 9:54 PM</a>}
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.group}>
          <div className={`${styles.square}`} >
            <p className={styles.amount}>{props.isCategory? 1 : 1}</p>
            <p className={styles.squareTitle}>{props.isCategory? "topics" : "posts"}</p>
          </div>
          <div className={`${styles.square}`} >
            <p className={styles.amount}>2</p>
            <p className={styles.squareTitle}>posts</p>
          </div>
          {props.isCategory? null : <div className={`${styles.square}`} >
            <p className={styles.amount}>3</p>
            <p className={styles.squareTitle}>replies</p>
          </div> }
        </div>
        <div className={styles.lastPost}>
          <div className={styles.postTop}>
            <div className={styles.poster}></div>
            <a className={styles.replyTimestamp}>Jul 12, 2017, 9:54 PM</a>
          </div>
          <p className={styles.postText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </div>
    </div>
  )
}