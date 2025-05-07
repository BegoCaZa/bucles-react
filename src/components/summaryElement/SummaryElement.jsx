import styles from './summaryElement.module.css';

const SummaryElement = ({ src, title, score, total, color }) => {
  const elementClass = `${styles.container} ${styles[color]}`;
  const textClass = `${styles.title} ${styles['color-' + color]}`;
  return (
    <div className={elementClass}>
      <div className={styles.icon}>
        <img src={src} className={styles.image} />
        <span className={textClass}>{title}</span>
      </div>
      <div className={styles.numbers}>
        <span className={styles.score}>{score}</span>
        <span className={styles.total}>{total}</span>
      </div>
    </div>
  );
};

export default SummaryElement;
