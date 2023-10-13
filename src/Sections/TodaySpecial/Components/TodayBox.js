const TodayBox = (props) => {
  return(
    <div className="today-box">
      <img src={props.img}/>
      <div className="box-overlay"></div>
      <div className="info">
        <h3>{props.name}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
};
export default TodayBox;