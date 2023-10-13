import Container from "../Container/Container";
import "./Reservation.css";
const Reservation = () => {
  return (
    <div className="reservation">
      <Container>
        <h1>Reservation</h1>
        <p>PLEASE FILL OUT ALL REQUIRED* FIELDS. THANKS!</p>
        <form action="" method="">
          <input type="name" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Contact" />
          <input type="text" placeholder="Date" />
          <input type="text" placeholder="Time" />
          <select>
            <option selected>Prefared Food</option>
            <option>Maxican</option>
            <option>Italyan</option>
            <option>Tyland</option>
          </select>
          <select>
            <option selected>Occation</option>
            <option>Berthday</option>
            <option>Widding</option>
            <option>Annevarsiry</option>
          </select>
          <select>
            <option selected>Persons</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </form>
        <button className="book">Book My Reservation</button>
      </Container>
    </div>
  );
};
export default Reservation;