import styles from "./ErrorComponent.module.css";

export function ErrorComponent(props: { text: string }) {
    return (
        <div className={styles.errorBox}>
            <p className={styles.errorText}>{props.text}</p>
        </div>
    );
}