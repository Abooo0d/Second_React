import "./OurMenu.css";
import React, { useRef ,useEffect,forwardRef} from "react";
import Container from "../Container/Container";
import MenuItem from "./Components/MenuItem";
import MenuCat from "./Components/MenuCat";
import { BiSolidDrink } from "react-icons/bi";
import { BiDish } from "react-icons/bi";
import { IoRestaurantOutline } from "react-icons/io5";
import item1 from "../../images/menu-item-thumbnail-01.jpg";
import item2 from "../../images/menu-item-thumbnail-02.jpg";
import item3 from "../../images/menu-item-thumbnail-03.jpg";
import item4 from "../../images/menu-item-thumbnail-04.jpg";
import item5 from "../../images/menu-item-thumbnail-05.jpg";
import item6 from "../../images/menu-item-thumbnail-06.jpg";
import item7 from "../../images/menu-item-thumbnail-07.jpg";
import item8 from "../../images/menu-item-thumbnail-08.jpg";
import item9 from "../../images/menu-item-thumbnail-09.jpg";
const OurMenu = ()=> {
  let catsRef = useRef([]);
  catsRef.current = [...Array(3).keys()].map(
    (index) => (catsRef.current[index] = React.createRef())
  );
  let Cats = Array.from(catsRef.current);
  let consRef = useRef([]);
  consRef.current = [...Array(3).keys()].map(
    (index) => (consRef.current = React.createRef())
  );
  let Cons = Array.from(consRef.current);
  useEffect(() => {
    Cats.forEach((cat)=> {
      cat.current.addEventListener("click",(e) => {
        let i ;
        Cats.forEach(cat => {
          cat.current.classList.remove("active");
        });
        cat.current.classList.add("active");
        i = cat.current.dataset.num;
        Cons.forEach((con) => {
          con.current.classList.remove("show","opacity");
        });
        Cons[i].current.classList.add("show");
        console.log(Cons[i].current.classList);
        let opacity = 0;
        let opacityinterval = setInterval(() => {
          Cons[i].current.style.opacity = opacity;
          opacity += 0.2;
          if(opacity > 1){
            clearInterval(opacityinterval);
          }
        }, 50);
      }); 
    });
  },[]);
  return(
    <div className="our-menu">
      <Container>
        <h1>Our Menu</h1>
        <p>
          There are many variations of passages of Lorem Ipsum 
          available, but the majority have suffered alteration 
          in some form, by injected humour, or randomised words
          which don't look even slightly believable.
        </p>
        <div className="menu-con">
          <div className="cat-con">
            <MenuCat icon={<BiSolidDrink/>} name="Drinkes" classs="" num="0" ref={catsRef.current[0]}/>
            <MenuCat icon={<IoRestaurantOutline/>} name="Appetizer" classs="active" num="1" ref={catsRef.current[1]} />
            <MenuCat icon={<BiDish/>} name="main Dishes" classs="" num="2" ref={catsRef.current[2]} />
          </div>
          <div className="items-con">
            <div className="cat-items-con" num="0" ref={consRef.current[0]}>
              <MenuItem image={item1} name="Test Name" desc="Test Descreption ANy Talk" price="20$" />
              <MenuItem image={item2} name="Test Name" desc="Test Descreption ANy Talk" price="20$" />
              <MenuItem image={item3} name="Test Name" desc="Test Descreption ANy Talk" price="20$" />
            </div>
            <div className="cat-items-con show opacity" num="1" ref={consRef.current[1]}>
              <MenuItem image={item4} name="Test Name" desc="Test Descreption ANy Talk" price="20$" />
              <MenuItem image={item5} name="Test Name" desc="Test Descreption ANy Talk" price="20$" />
              <MenuItem image={item6} name="Test Name" desc="Test Descreption ANy Talk" price="20$" />
            </div>
            <div className="cat-items-con" num="2" ref={consRef.current[2]}>
              <MenuItem image={item7} name="Test Name" desc="Test Descreption ANy Talk" price="20$" />
              <MenuItem image={item8} name="Test Name" desc="Test Descreption ANy Talk" price="20$" />
              <MenuItem image={item9} name="Test Name" desc="Test Descreption ANy Talk" price="20$" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default OurMenu;