import './ColorChoice.css';

const ColorChoice = ({color, onSelect}) => {

  return (
    <button onClick={onSelect} className={`circle ${color}`}></button>
  );
};

export default ColorChoice;