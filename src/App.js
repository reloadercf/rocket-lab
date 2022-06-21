import { CapStatus } from './CapStatus';
import { AllCapsules } from './AllCapsules';
import   rocket  from './assets/rocket.svg'
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.Initial} >
        <img className={styles.rocketLogo} src={rocket} alt="rocket logo"/>
        <div className={styles.titles}>
          <h1 className={styles.RocketTitle} >ROCKET</h1>
          <h2 className={styles.RocketSubtitle} >IMPROVING ALL THE TIME</h2>
        </div>
        <button className={styles.startButton} type="button"> START </button>
      </header>
      <CapStatus />
      <AllCapsules />
      <footer>
        <div className={styles.foot}>
        <p className={styles.footText}>FIX YOUR LITTLE PROBLEM AND LIGHT THIS CANDLE.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
