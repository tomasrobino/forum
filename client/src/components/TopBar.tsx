import styles from './TopBar.module.css'
import {Link} from "react-router-dom";

export function TopBar() {
  return (
    <>
      <Link to="/">ForumName</Link>
      <hr className={styles.bar} />
    </>
  );
}