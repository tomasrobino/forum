import styles from "./WriteReply.module.css"
import {UserPanel} from "./UserPanel.tsx";
import {ChangeEvent, Dispatch, SetStateAction, useEffect, useState} from "react";
import {user} from "../../types.ts";
import {useLocation} from "react-router-dom";

export function WriteReply(props: {setActive: Dispatch<SetStateAction<boolean>>}) {
    const [postError, setPostError] = useState(false);
    const [text, setText] = useState("");
    const location = useLocation();
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

    function handleText(e: ChangeEvent<HTMLTextAreaElement>) {
        e.preventDefault()
        setText(e.target.value);
    }

    function handleCancel() {
        props.setActive(false);
    }


    async function handleReply() {
        const url = import.meta.env.VITE_URL;
        let post = location.pathname;
        post = post.slice(-24);

        try {
            await fetch(`${url}/forum/posting/reply`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({text: text, author: user.username, parent: post}),
            })
                .then(data => {
                    if (data.status === 200) {
                        return data.json();
                    }
                    setPostError(false);
                })
                .then(data => {
                    props.setActive(false);
                    window.location.reload();
                })
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <p className={styles.title}>Write a reply</p>
            <div className={styles.div}>
                <UserPanel user={user} />
                <textarea className={styles.textArea} autoComplete="off" onChange={handleText} value={text}/>
            </div>
            <div className={styles.buttonDiv}>
                <button className={`${styles.button} ${styles.cancelButton}`} onClick={handleCancel}>Cancel</button>
                <button className={`${styles.button} ${styles.postButton}`} onClick={handleReply}>Post</button>
            </div>
            {postError? <p>Error!</p> : null}
        </>
    );
}