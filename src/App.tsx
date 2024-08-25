import './App.module.css'
import styles from './App.module.css'
import React from "react";

function App(props: {children: React.ReactNode}) {
  return (
    <div className={styles.app}>
      {props.children}
    </div>
  )
}

export default App
