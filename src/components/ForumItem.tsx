import styles from './ForumItem.module.css'

export default function ForumItem(props: {isCategory: boolean}) {
  return(
    <div className={styles.item}>
      <div className={styles.left}>
        <div className={styles.icon}></div>
        <div className={styles.titleNDesc}>
          <a className={styles.title}>Title</a>
          {props.isCategory? <h4 className={styles.description}>Description</h4> : <a className={styles.postTimestamp}></a>}
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.group}>
          <div className={`${styles.square}`} >
            <h4 className={styles.amount}>{props.isCategory? 1 : 1}</h4>
            <h6 className={styles.squareTitle}>{props.isCategory? "topics" : "posts"}</h6>
          </div>
          <div className={`${styles.square}`} >
            <h4 className={styles.amount}>2</h4>
            <h6 className={styles.squareTitle}>posts</h6>
          </div>
          {props.isCategory? null : <div className={`${styles.square}`} >
            <h4 className={styles.amount}>3</h4>
            <h6 className={styles.squareTitle}>replies</h6>
          </div> }
        </div>
        <div className={styles.lastPost}>
          <div>
            <div className={styles.poster}></div>
            <a className={styles.replyTimestamp}></a>
          </div>
          <p className={styles.postText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet sollicitudin nisl. Ut a magna consectetur</p>
        </div>
      </div>
    </div>
  )
}