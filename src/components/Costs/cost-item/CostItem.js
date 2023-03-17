import './CostItem.css';
import CostDate from '../cost-date/CostDate';
import Card from '../../UI/card/Card';
import { useState } from 'react';

const CostItem = (props) => {
  const [name, setDescription] = useState(props.name);
  const changeDesriptionHandler = () => {
    setDescription('New cost');
    console.log(name);
  };
  return (
    <li>
      <Card className='cost-item'>
        <CostDate date={props.date} />
        <div className='cost-item__description'>
          <h2> {name}</h2>
          <div className='cost-item__price'>${props.amount}</div>
        </div>
        <button onClick={changeDesriptionHandler}>Изменить описание</button>
      </Card>
    </li>
  );
};
export default CostItem;
