import {useLocation, useNavigate} from "react-router-dom";
import {ChangeEvent, useEffect, useState} from "react";
import {category} from "../../types.ts";
import styles from "./WriteReply.module.css";
import {UserPanel} from "./UserPanel.tsx";
import {user} from "../../types.ts";


export function WritePost() {
    const [categories, setCategories] = useState<category[]>([]);
    const [postError, setPostError] = useState(false);
    const [text, setText] = useState("");
    const [title, setTitle] = useState("");
    const location = useLocation();
    let previousCategory = undefined;
    if (location.state && "category" in location.state && typeof location.state.category === "string") {
        previousCategory = location.state.category;
    }
    const [selected, setSelected] = useState<string>(previousCategory);
    const [user, setUser] = useState<user>({
        avatar: Buffer.alloc(0),
        createdAt: "",
        posts: 0,
        topics: 0,
        username: ""
    });
    const navigate = useNavigate();

    useEffect(() => {
        const url = import.meta.env.VITE_URL;
        //Fetching categories
        fetch(`${url}/forum/categories`)
            .then(data => data.json())
            .then(data => {
                setCategories(data);
            })
            .catch(error => console.error('Error:', error));

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
            .catch(error => console.error('Error:', error));
    }, []);

    function handleSelect(e: ChangeEvent<HTMLSelectElement>) {
        setSelected(e.target.value);
    }

    const options = [];
    for (const category of categories) {
        options.push(<option value={category.urlName} key={category.urlName}>{category.title}</option>);
    }

    function handleText(e: ChangeEvent<HTMLTextAreaElement>) {
        e.preventDefault()
        setText(e.target.value);
    }

    function handleTitle(e: ChangeEvent<HTMLInputElement>) {
        e.preventDefault()
        setTitle(e.target.value);
    }

    function handleCancel() {
        navigate(-1);
    }

    async function handlePost() {
        const url = import.meta.env.VITE_URL;
        try {
            await fetch(`${url}/forum/posting/post`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({text: text, author: user.username, title: title}),
            })
                .then(data => {
                    if (data.status === 200) {
                        navigate(-1);
                    }
                    setPostError(false);
                });
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <p>Write a post</p>
            <select name="categorySelect" value={selected} onChange={handleSelect}>
                {...options}
            </select>
            <input autoComplete="off" onChange={handleTitle} value={title}/>
            <div className={styles.div}>
                <UserPanel user={user}/>
                <textarea className={styles.textArea} autoComplete="off" onChange={handleText} value={text}/>
            </div>
            <div className={styles.buttonDiv}>
                <button className={`${styles.button} ${styles.cancelButton}`} onClick={handleCancel}>Cancel</button>
                <button className={`${styles.button} ${styles.postButton}`} onClick={handlePost}>Post</button>
            </div>
            {postError ? <p>Error!</p> : null}
        </div>
    );
}