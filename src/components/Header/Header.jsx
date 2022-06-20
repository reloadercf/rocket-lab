import rocket from '../../assets/rocket.svg';
import styles from './header.module.css';
import '../../index.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={rocket} alt='rocket lab logo' className={styles.headerLogo}></img>
      <section className={styles.headerText}>
        <h1 className={styles.title}>ROCKET</h1>
        <p className={styles.subtitle}>IMPROVING ALL THE TIME</p>
        <button type='button' className={styles.startBtn}>start</button>
      </section>
    </header>

  )
}
