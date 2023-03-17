import Card from '../../UI/card/Card';
import './Costs.css';
import React, { useState } from 'react';
import CostsFilter from '../cost-filter/CostsFilter';
import CostList from '../cost-list/CostList';
import CostsDiagram from '../costs-diagram/CostsDiagram';

const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState('2021');

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className='costs'>
        <CostsFilter year={selectedYear} onYearChange={yearChangeHandler} />
        <CostsDiagram costs={filteredCosts} />
        <CostList costs={filteredCosts} />
      </Card>
    </div>
  );
};
export default Costs;
