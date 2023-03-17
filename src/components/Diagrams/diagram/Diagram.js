import './Diagram.css';
import DiagramBars from './diagram-bars/DiagramBar';

const Diagram = (props) => {
  const dataSetsValue = props.dataSets.map((dataSets) => dataSets.value);
  const maxMonthCosts = Math.max(...dataSetsValue);
  console.log(maxMonthCosts);

  return (
    <div className='diagram'>
      {props.dataSets.map((dataSet) => (
        <DiagramBars
          key={dataSet.label}
          value={dataSet.value}
          maxValue={maxMonthCosts}
          label={dataSet.label}
        />
      ))}
    </div>
  );
};

export default Diagram;
