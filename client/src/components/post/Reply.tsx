import styles from "./Reply.module.css"
import {user} from "../../types.ts";
import {useEffect, useState} from "react";
import {UserPanel} from "./UserPanel.tsx";
import {formatDate} from "../../utils.ts";

export function Reply(props: {text: string, date: string, author: string}) {
  const [user, setUser] = useState<user>({
    avatar: Buffer.alloc(0),
    createdAt: "",
    posts: 0,
    topics: 0,
    username: ""
  });

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
              const aux = Buffer.from(data.avatar || "", "binary").toString("base64");
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
        <UserPanel user={user} />
        <div className={styles.textPanel}>
          <p className={styles.text}>{props.text}</p>
          <p className={styles.date}>{formatDate(props.date)}</p>
        </div>
      </div>
  );
}