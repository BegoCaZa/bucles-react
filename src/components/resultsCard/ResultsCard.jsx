import styles from './resultsCard.module.css';
const ResultsCard = () => {
  return (
    <div className={styles.container}>
      <p className={styles.subtitle}>Your Results</p>
      <div className={styles['score-container']}>
        <p className={styles.score}>76</p>
        <p className={styles.subtitle}>of 100</p>
      </div>
      <div className={styles.summaryContainer}>
        <p className={styles.title}>Great</p>
        <p className={styles.subtitle}>
          Your performance exceed 65% of the people conducting the test here!
        </p>
      </div>
    </div>
  );
};

export default ResultsCard;
