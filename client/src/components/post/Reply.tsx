import styles from "./Reply.module.css"
import {user} from "../../types.ts";

export function Reply(props: {quote?: { author: string, text: string }, title?: string, text: string, date: string, user: user}) {
  return (
    <div className={styles.reply}>
      <div className={styles.parentPanel}>
        <div className={styles.userPanel}>
          <div className={styles.profilePicture}></div>
          <p className={styles.user}>{props.user.username}</p>
          <div className={styles.datapoint}><p className={styles.dataTitle}>joined:</p> <p className={styles.userData}>{props.user.joinDate}</p></div>
          <div className={styles.datapoint}><p className={styles.dataTitle}>posts:</p> <p className={styles.userData}>{props.user.posts}</p></div>
        </div>
        <div className={styles.textPanel}>
          <div className={styles.bar}>
            <p className={styles.date}>{props.date}</p>
            {props.title? <p className={styles.title}>{props.title}</p> : null}
          </div>
          {props.quote?
            <div className={styles.quoteBox}>
                <p className={styles.quoteAuthor}>{props.quote.author}</p>
              <p className={styles.quoteText}>{props.quote.text}</p>
            </div>
            : null}
          <p className={styles.text}>{props.text}</p>
        </div>
      </div>
    </div>
  );
}