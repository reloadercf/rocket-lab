import styles from './status.module.css';

export default function Status({ img, txt, gradient }) {
  return (
    <article className={styles.statusBox} style={gradient}>
        <span className={styles.statusTxt}>{txt}</span>
        <img src={img} alt='rocket icon' className={styles.statusImg}></img>
    </article>
  )
}
