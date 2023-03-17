import NewCost from './components/NewCost/NewCost';
import Costs from './components/Costs/costs/Costs';
import { useState } from 'react';
const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2021, 2, 12),
    name: 'Холодильник',
    amount: 999.99,
  },
  {
    id: 'c2',
    date: new Date(2021, 11, 25),
    name: 'МакБук',
    amount: 1254.72,
  },
  {
    id: 'c3',
    date: new Date(2021, 4, 1),
    name: 'Джинсы',
    amount: 49.09,
  },
];

const App = () => {
  const [costs, setCosts] = useState(INITIAL_COSTS);
  const addCostHandler = (costs) => {
    setCosts((prevCosts) => {
      console.log(costs);
      return [costs, ...prevCosts];
    });
  };

  return (
    <div>
      
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
};

export default App;
