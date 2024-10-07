import styles from "./Reply.module.css"
import {user} from "../../types.ts";
import {useEffect, useState} from "react";

export function Reply(props: {text: string, date: string, author: string}) {
  const [user, setUser] = useState<user>({
    avatar: Buffer.alloc(0),
    createdAt: "",
    posts: 0,
    topics: 0,
    username: ""
  });

  function formatDate(date: string) {
    const objectDate = new Date(date);
    if (isNaN(objectDate.getUTCDate())) return "Unknown";
    return `${objectDate.getUTCDate()}/${objectDate.getUTCMonth() + 1}/${objectDate.getUTCFullYear()}`;
  }

  const formattedDate = formatDate(props.date);

  useEffect(() => {
    const url = import.meta.env.VITE_URL;
    //Fetching user
    //How to save and image to db and recover it
    /*
    const user = await User.findOne({});
    const imageData = Buffer.from(fs.readFileSync("./image.jpg", "binary"), "binary").toString("base64");
    user.avatar = Buffer.from(imageData, "base64");
    user.save();
    const user1 = await User.findOne({});
    fs.writeFileSync("./result.jpg", user1.avatar, "binary");
    */

    try {
      fetch(`${url}/forum/users/${props.author}`)
          .then(data => {
            if (data.ok) {
              return data.json();
            } else throw new Error("Could not fetch reply");
          })
          .then(data => {
              const aux = Buffer.from(data.avatar, "binary").toString("base64");
              delete data.avatar;
              return setUser({...data, avatar: aux});
          })
          .catch(error => console.error('Error:', error))
    } catch (e) {
      console.log("Error: can't fetch user");
    }
  }, []);

  return (
      <div className={styles.parentPanel}>
        <div className={styles.userPanel}>
            { user.avatar.length ?
                <img alt="Profile picture" src={"data:image/jpg;base64," + user.avatar} className={styles.profilePicture}/>
                : <div className={styles.profilePicture}></div> }
            <p className={styles.user}>{user.username}</p>
          <div className={styles.datapoint}><p className={styles.dataTitle}>joined:</p> <p
              className={styles.userData}>{formatDate(user.createdAt) || ""}</p></div>
          <div className={styles.datapoint}><p className={styles.dataTitle}>posts:</p> <p
              className={styles.userData}>{user.posts}</p></div>
        </div>
        <div className={styles.textPanel}>
          <p className={styles.text}>{props.text}</p>
          <p className={styles.date}>{formattedDate}</p>
        </div>
      </div>
  );
}