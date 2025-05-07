import Button from '../button/Button';
import SummaryElement from '../summaryElement/SummaryElement';
import { v4 } from 'uuid';
import { SUMMARY_INFO } from '../constants/summary-info';

const SummaryCard = () => {
  return (
    <div className='summary-container'>
      {SUMMARY_INFO.map(element => (
        <SummaryElement key={v4()} {...element} />
      ))}

      <Button />
    </div>
  );
};

export default SummaryCard;
