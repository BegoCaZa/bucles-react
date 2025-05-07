import Button from '../button/Button';
import SummaryElement from '../summaryElement/SummaryElement';
import { v4 } from 'uuid';
import { SUMMARY_INFO } from '../constants/summary-info';
import styles from './summaryCard.module.css';

const SummaryCard = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Summary</p>
      <div className={styles.elements}>
        {SUMMARY_INFO.map(element => (
          <SummaryElement key={v4()} {...element} />
        ))}
      </div>
      <Button />
    </div>
  );
};

export default SummaryCard;
