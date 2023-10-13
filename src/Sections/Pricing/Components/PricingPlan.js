const PricingPlan = (props) => {
  return (
    <div className="pricing-plan">
      <div className="type">
        <img src={props.img} />
        <h3 className="plan-name">{props.name}</h3>
      </div>
      <div className="plan-price">${props.price}<span>/Month</span></div>
      <ul className="features">
        <li> One Website</li>
        <li> One User</li>
        <li> 10 GB Bandwidth</li>
        <li> 2GB Storage</li>
        <li>Offline work</li>
        <li>24x7 Support</li>
      </ul>
      <button className="buy">Purchase Plane</button>
    </div>
  );
};
export default PricingPlan;