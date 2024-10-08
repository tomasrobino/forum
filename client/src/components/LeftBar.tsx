import styles from './LeftBar.module.css'
import {Link} from "react-router-dom";

export default function LeftBar() {
    return(
        <div className={styles.bar}>
            <Link to={"/profile"}>
                <button className={styles.button}></button> {/*Profile - Login*/}
            </Link>
            <Link to={"/profile/messages"}>
                <button className={styles.button}></button> {/*Chat*/}
            </Link>
            <Link to={"/search"}>
                <button className={styles.button}></button> {/*Search*/}
            </Link>
        </div>
    )
}