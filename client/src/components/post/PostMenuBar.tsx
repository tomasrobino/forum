import styles from './PostMenuBar.module.css'
import {ChangeEvent, useState} from "react";
import {useSearchParams} from "react-router-dom";

export function PostMenuBar() {
  const [selectedValue, setSelectedValue] = useState("newest");
  const [searchParams, setSearchParams] = useSearchParams();
  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    setSearchParams({"order": event.target.value});
    setSelectedValue(event.target.value);
  }

  return (
    <div className={styles.bar}>
        <div className={styles.buttonDiv}>
          <div className={styles.icon}></div>
          <select value={selectedValue} onChange={handleChange}>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      <button className={`${styles.button} ${styles.rightButton}`}>Log in to reply</button>
    </div>
  );
}