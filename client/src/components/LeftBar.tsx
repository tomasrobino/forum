import styles from './LeftBar.module.css'
import {Link} from "react-router-dom";
import {useAuth} from "../hooks/AuthProvider.tsx";

export default function LeftBar() {
    const auth = useAuth();

    function handleLogout() {
        auth.logOut();
    }

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
            {
                auth.token && auth.token !== "" ?
                    <button className={styles.button} onClick={handleLogout}></button> //Logout
                    :
                    <Link to={"/register"}>
                        <button className={styles.button}></button> {/*Register*/}
                    </Link>
            }
        </div>
    )
}