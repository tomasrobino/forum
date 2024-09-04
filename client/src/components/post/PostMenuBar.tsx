import styles from './PostMenuBar.module.css'
import {ChangeEvent, useState} from "react";
import {useSearchParams} from "react-router-dom";

export function PostMenuBar() {
  const [selectedValue, setSelectedValue] = useState("newest");
  const [_searchParams, setSearchParams] = useSearchParams();
  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    setSearchParams({"order": event.target.value});
    setSelectedValue(event.target.value);
  }

  return (
    <div className={styles.bar}>
      <select className={styles.button} value={selectedValue} onChange={handleChange}>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
      </select>
      <button className={styles.button}>Log in to reply</button>
    </div>
  );
}