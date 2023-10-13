import "./AboutUs.css";
import Container from "../Container/Container";
const AboutUs = () => {
  return(
    <div className="about-us">
      <Container>
        <div className="info">
          <h2>About Us</h2>
          <h3>IT STARTED, QUITE SIMPLY, LIKE THIS...</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusm incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim venia, nostrud exercitation ullamco.
          </p>
          <p>
            Aenean commodo ligula eget dolor aenean massa. Cum sociis 
            nat penatibu set magnis dis parturient montes, nascetur 
            ridiculus mus. quam felisorat, ultricies nec, Aenean commodo 
            ligula eget dolor penatibu set magnis is parturient montes,
            nascetur ridiculus mus. quam felisorat, ultricies nec, 
            pellentesque eu, pretium quis, sem. quat massa quis enim.
            Donec vitae sapien ut libero venenatis fauci Nullam quis ante
            . Etiam sit amet rci eget eros.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusm incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim venia, nostrud exercitation ullamco.
          </p>
        </div>
        <div className="images">
          <img className="main" />
          <img className="second" />
        </div>
      </Container>
    </div>
  );
};
export default AboutUs;