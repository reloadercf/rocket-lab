import { useEffect, useState } from "react";
import getCapsules from "./helpers/api"
import styles from "./AllCapsules.module.css"
import rocketActive from "./assets/rocketActive.svg"
import rocketUnknown from "./assets/rocketUnknown.svg"
import rocketDeactivate from "./assets/rocketDeactivate.svg"

export function AllCapsules() {
  const [capsules, setCapsules] = useState([])
  useEffect(() => {
    getCapsules('https://api.spacexdata.com/v3/capsules')
      .then((json) => setCapsules(json)
      )
  }, [])
  console.log(capsules);

  return (
    <section>
      <div><h1 className={styles.title} >All Capsules :</h1></div>
      <div className={styles.capsulContainer}>
        {capsules.map((capsule) => (
          
          <div className={styles.eachCapsule} key={capsule.capsule_serial}>
            <div className={styles.titleAndRocket} >
            <p style={{ fontWeight: "bolder" }} className={styles.serial} >{capsule.capsule_serial}</p>
            {capsule.status === "active" &&
              <img className={styles.rocketStatus} src={rocketActive} alt="active rocket" />}
            {capsule.status === "unknown" &&
              <img className={styles.rocketStatus} src={rocketUnknown} alt="active rocket" />}
            {capsule.status === "retired" &&
              <img className={styles.rocketStatus} src={rocketDeactivate} alt="active rocket" />}
               {capsule.status === "destroyed" &&
              <img className={styles.rocketStatus} src={rocketDeactivate} alt="active rocket" />}
              </div>
            <p className={styles.details} >{capsule.details}</p>
          </div>
        ))}

      </div>
    </section>
  )
}