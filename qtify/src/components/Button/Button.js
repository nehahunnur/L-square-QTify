import React from "react";
import styles from "./Button.css";

const Button=({children})=>{
console.log(styles)
    return(
        <button className={styles.btn}>
        {children}
        </button>
    )
}

export default Button;