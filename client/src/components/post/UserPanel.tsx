import styles from "./Reply.module.css";
import {user} from "../../types.ts";
import {formatDate} from "../../utils.ts";

export function UserPanel(props: {user: user }) {
    return (
        <div className={styles.userPanel}>
            {props.user.avatar.length ?
                <img alt="Profile picture" src={"data:image/jpg;base64," + props.user.avatar}
                     className={styles.profilePicture}/>
                : <div className={styles.profilePicture}></div>}
            <p className={styles.user}>{props.user.username}</p>
            <div className={styles.datapoint}><p className={styles.dataTitle}>joined:</p> <p
                className={styles.userData}>{formatDate(props.user.createdAt) || ""}</p></div>
            <div className={styles.datapoint}><p className={styles.dataTitle}>posts:</p> <p
                className={styles.userData}>{props.user.posts}</p></div>
        </div>
    );
}