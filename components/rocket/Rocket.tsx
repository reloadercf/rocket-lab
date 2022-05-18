/* eslint-disable jsx-a11y/alt-text */
import { FC } from 'react'
import Image from 'next/image'

import styles from './Rocket.module.css'
import rocketActive from '../../public/rocketActive.svg'
import rocketDeactivate from '../../public/rocketDeactivate.svg'
import rocketUnknown from '../../public/rocketUnknown.svg'

interface Props {
    capsule:any
  }

export const Rocket:FC<Props> = ({capsule}) => {
  
  return (
      
        <article className={styles.card} >
          <span className={styles.h3}><h3>{capsule.capsule_serial}</h3><Image src={capsule.status=='active'?rocketActive:capsule.status=='unknown'?rocketUnknown:rocketDeactivate} height={50} /></span>
          
          <p>{capsule.details}</p>
        </article>
    
  )
}
