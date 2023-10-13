import "./Pricing.css";
import Container from "../Container/Container";
import PricingPlan from "./Components/PricingPlan";
import Images from "./Components/Images";
const Pricing = () => {
  return (
    <div className="pricing">
      <Container>
        <h1>Pricing</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut 
          orci varius, elementum lectus nec, aliquam lectus. Duis neque 
          augue, maximus in sapien ut, porta pharetra odio.
        </p>
        <div className="pricing-con">
          <PricingPlan img={Images[0]} name="Basic" price="30"/>
          <PricingPlan img={Images[1]} name="Pro" price="60"/>
          <PricingPlan img={Images[2]} name="VIP" price="90"/>
        </div>
      </Container>
    </div>
  );
};
export default Pricing;