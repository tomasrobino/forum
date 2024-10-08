import styles from './LeftBar.module.css'
import {Link} from "react-router-dom";

export default function LeftBar() {
    function handleSearch() {

    }

    return(
        <div className={styles.bar}>
            <Link to={"/profile"}>
                <button className={styles.button}></button> {/*Profile - Login*/}
            </Link>
            <Link to={"/profile/messages"}>
                <button className={styles.button}></button> {/*Chat*/}
            </Link>
            <button className={styles.button} onClick={handleSearch}></button> {/*Search*/}
        </div>
    )
}