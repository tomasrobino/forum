import styles from "./Reply.module.css"
import {user} from "../../types.ts";
import {useEffect, useState} from "react";

export function Reply(props: {quote?: { author: string, text: string }, text: string, date: string, author: string}) {
  const [user, setUser] = useState<user>({
    avatar: "",
    createdAt: "",
    posts: 0,
    profile: "",
    topics: 0,
    username: ""
  });

  function formateDate(date: string) {
    const objectDate = new Date(date);
    return `${objectDate.getUTCDate()}/${objectDate.getUTCMonth() + 1}/${objectDate.getUTCFullYear()}`;
  }

  const formattedDate = formateDate(props.date);

  useEffect(() => {
    const url = import.meta.env.VITE_URL;
    //Fetching user
    fetch(`${url}/forum/users/${props.author}`)
        .then(data => data.json())
        .then(data => setUser(data))
        .catch(error => console.error('Error:', error))
  }, []);

  return (
      <div className={styles.reply}>
        <div className={styles.parentPanel}>
          <div className={styles.userPanel}>
            <div className={styles.profilePicture}></div>
            <p className={styles.user}>{user.username}</p>
            <div className={styles.datapoint}><p className={styles.dataTitle}>joined:</p> <p
                className={styles.userData}>{user.createdAt}</p></div>
            <div className={styles.datapoint}><p className={styles.dataTitle}>posts:</p> <p
                className={styles.userData}>{user.posts}</p></div>
          </div>
          <div className={styles.textPanel}>
            {props.quote ?
                <div className={styles.quoteBox}>
                  <p className={styles.quoteAuthor}>{props.quote.author}</p>
                  <p className={styles.quoteText}>{props.quote.text}</p>
                </div>
                : null}
            <p className={styles.text}>{props.text}</p>
          </div>
        </div>
        <p className={styles.date}>{formattedDate}</p>
      </div>
  );
}