import styles from "./WriteReply.module.css"
import {UserPanel} from "./UserPanel.tsx";
import {useEffect, useState} from "react";
import {useAuth} from "../../hooks/AuthProvider.tsx";
import {user} from "../../types.ts";

export function WriteReply() {
    const auth = useAuth();
    const [user, setUser] = useState<user>({
        avatar: Buffer.alloc(0),
        createdAt: "",
        posts: 0,
        topics: 0,
        username: ""
    });
    useEffect(() => {
        const url = import.meta.env.VITE_URL;
        try {
            fetch(`${url}/forum/users/${localStorage.getItem("username")}`)
                .then(data => {
                    if (data.ok) {
                        return data.json();
                    } else throw new Error("Could not fetch user");
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
        <>
            <p className={styles.title}>Write a reply</p>
            <div className={styles.div}>
                <UserPanel user={user} />
                <textarea className={styles.textArea} autoComplete="off"/>
            </div>
            <div className={styles.buttonDiv}>
                <button className={`${styles.button} ${styles.cancelButton}`}>Cancel</button>
                <button className={`${styles.button} ${styles.postButton}`}>Post</button>
            </div>
        </>
    );
}