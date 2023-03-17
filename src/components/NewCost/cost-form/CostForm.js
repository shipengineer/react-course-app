import React, { useState } from 'react';
import './CostForm.css';

const CostForm = (props) => {
  const [inputName, setInputName] = useState('');
  const [inputDate, setInputDate] = useState('');
  const [inputAmount, setInputAmount] = useState('');
  const [flagAdd, setInputForm] = useState(false);

  //   const [userInput, setUserInput] = useState({
  //     name: '',
  //     amount: '',
  //     date: '',
  //   });

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
    //setUserInput({ ...userInput, name: event.target.value });
    // setUserInput((previousState) => {
    //     return {
    //       ...previousState,
    //       name: event.target.value,
    //     };
    //   });
  };
  const amountChangeHandler = (event) => {
    setInputAmount(event.target.value);
    // setUserInput({ ...userInput, amount: event.target.value });
    // setUserInput((previousState) => {
    //   return {
    //     ...previousState,
    //     amount: event.target.value,
    //   };
    // });
  };
  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);

    // setUserInput({ ...userInput, date: event.target.value });
    // setUserInput((previousState) => {
    //     return {
    //       ...previousState,
    //       date: event.target.value,
    //     };
    //   });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const costData = {
      name: inputName,
      amount: inputAmount,
      date: new Date(inputDate),
    };

    props.onSaveCostData(costData);
    setInputAmount('');
    setInputDate('');
    setInputName('');
  };

  const switchForm = () => {
    setInputForm(!flagAdd);
  };

  if (flagAdd) {
    return (
      <form onSubmit={submitHandler}>
        <div className='new-cost__control'>
          <label>Название</label>
          <input type='text' value={inputName} onChange={nameChangeHandler} />
        </div>
        <div className='new-cost__control'>
          <label>Сумма</label>
          <input
            type='number'
            min='1'
            step='1'
            value={inputAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-cost__control'>
          <label>Дата</label>
          <input
            type='date'
            min='2019-01-01'
            step='2022-12-31'
            value={inputDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div>
          <button type='submit'>Добавить расход</button>
          <button onClick={switchForm}>Отмена ввода</button>
        </div>
      </form>
    );
  } else {
    return <button onClick={switchForm}>Добавить новую статью расхода</button>;
  }
};
export default CostForm;
