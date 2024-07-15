import React from "react";
import styles from './Input.module.css';

const  Input = ({label, type, name}) => {

    return (
        <div className={styles.wrapper}>
            <label className={styles.label} htmlFor={name}> {label} </label>
            <input id={name} name={name} className={styles.input} type={type}></input>
            <p className={styles.error}>Possível Error</p>
        </div>  
    )
}

export {Input}