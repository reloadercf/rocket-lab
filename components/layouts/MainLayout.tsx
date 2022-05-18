import { FC } from 'react'
import Head from 'next/head'

import styles from './MainLayout.module.css'
import Image from 'next/image'
import RocketImg from '../../public/rocket.svg'

interface Props {
    children?: JSX.Element
}

export const MainLayout:FC<Props> = ({ children }) => {
  return (
    <>
    <Head>
        <title>Rocket-Lab</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className={styles.header}>
            <div className={styles.logoBox}>
                <Image src={RocketImg} alt="logo" height={`60px`}/>
            </div>

            <div className={styles.textBox}>
                <h1 className={styles.headingPrimary}>
                    <span className={styles.headingPrimaryMain}>Rocket</span>
                    <span className={styles.headingPrimarySub}>improving all the time</span>
                </h1>
                <a href="#" className={`${styles.btnWhite} ${styles.btn}`}>Start</a>
            </div>
        </header>
        <div>{children}</div>

        <footer>FIX YOUR LITTLE PROBLEM AND LIGHT THIS CANDLE.</footer>
    </>
  )
}
