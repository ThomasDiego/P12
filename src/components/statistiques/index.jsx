import "./style.css";

function formtateNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const Statistiques = (props) => {
  return (
    <div className="stat">
      <div className="icon">
        <img src={`../${props.name}.svg`} alt="icon" className="iconImg" />
      </div>
      <div className="content">
        <div className="value">{formtateNumber(props.value)}{props.unit}</div>
        <div className="name">{props.name}</div>
      </div>
    </div>
  );
};

export default Statistiques;
