import styles from './MenuBar.module.css'
import {ChangeEvent, ReactElement, useState} from "react";
import {useSearchParams} from "react-router-dom";

export function MenuBar(props: { options: Array<{value: string, name: string}>}) {
  const [selectedValue, setSelectedValue] = useState(props.options[0].value);
  const [_searchParams, setSearchParams] = useSearchParams();
  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    setSearchParams({ "select": event.target.value });
    setSelectedValue(event.target.value);
  }

  const optionsArray: Array<ReactElement> = [];
  props.options.forEach(option => {
    optionsArray.push(<option key={option.value} value={option.value}>{option.name}</option>);
  });

  return (
    <div className={styles.bar}>
      <select className={styles.button} value={selectedValue} onChange={handleChange}>
        {...optionsArray}
      </select>
      <button className={styles.button}>Log in to reply</button>
    </div>
  );
}