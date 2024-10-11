import styles from './MenuBar.module.css'
import {Dispatch, MouseEvent, ReactElement, SetStateAction, useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import {MenuItem, Select, SelectChangeEvent} from "@mui/material";

export function MenuBar(props: { options: Array<{value: string, name: string}>, buttonText: string, setActive?: Dispatch<SetStateAction<boolean>>}) {
    const [selectedValue, setSelectedValue] = useState(props.options[0].value);
    const [_searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate()
    function handleChange(event: SelectChangeEvent) {
        setSearchParams({ "select": event.target.value });
        setSelectedValue(event.target.value);
    }

    const optionsArray: Array<ReactElement> = [];
    props.options.forEach(option => {
        optionsArray.push(<MenuItem key={option.value} value={option.value}>{option.name}</MenuItem>);
    });

    function handleAction(event: MouseEvent<HTMLButtonElement>) {
        if (props.setActive !== undefined) {
            props.setActive(true)
        } else {
            navigate("/post")
        }
    }

    return (
        <div className={styles.bar}>
            <Select
                className={styles.button}
                value={selectedValue}
                onChange={handleChange}
                variant={'outlined'}
                MenuProps={{
                    disableScrollLock: true,
                }}
            >
                {...optionsArray}
            </Select>{/*
            <Link to={"reply"}>
                <button className={styles.button}>Reply</button>
            </Link>*/}

            <button className={styles.button} onClick={handleAction}>{props.buttonText}</button>
        </div>
    );
}