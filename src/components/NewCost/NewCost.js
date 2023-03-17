import CostForm from './cost-form/CostForm';
import './NewCost.css';
const NewCost = (props) => {
  const saveSoveDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    props.onAddCost(costData);
  };
  return (
    <div className='new-cost'>
      <CostForm onSaveCostData={saveSoveDataHandler} />
    </div>
  );
};

export default NewCost;
