import React from "react"
import styles from "./CapStatus.module.css"
import rocketActive from "./assets/rocketActive.svg"
import rocketUnknown from "./assets/rocketUnknown.svg"
import rocketDeactivate from "./assets/rocketDeactivate.svg"


export const CapStatus = () => {
    return (
        <section className={styles.examples}>
            <h1 className={styles.title}> Capsules Status :</h1>
            <div className={styles.statusContainer}>
                <div className={styles.Active} >
                    <p className={styles.status} >Active</p>
                    <img className={styles.rocketStatus} src={rocketActive} alt="a rocket" />
                </div>
                <div className={styles.Destroyed} >
                <p className={styles.status} >Destroyed</p>
                <img className={styles.rocketStatus} src={rocketDeactivate} alt="a rocket" />
                </div>
                <div className={styles.Unknown} >
                <p className={styles.status} >Unknown</p>
                <img className={styles.rocketStatus} src={rocketUnknown} alt="a rocket" />
                </div>
            </div>
        </section>
    )
}