import "./TodaySpecial.css";
import { useRef } from "react";
import TodayBox from "./Components/TodayBox";
import Container from "../Container/Container";
import img1 from "../../images/special-menu-1.jpg";
import img2 from "../../images/special-menu-2.jpg";
import img3 from "../../images/special-menu-3.jpg";
let specialCounter = 0;
let specialImageRef;
function MoveSpecialBackgroundImage() {
  // Moving The Image Slightly While Scrolling 
  if(window.scrollY > window.innerHeight){
    specialCounter = ((window.scrollY - 1000) / 5) * -1;
    specialImageRef.current.style.backgroundPositionY = specialCounter + "px" ;
    // Removing The Image At The End of The Section
    if(window.scrollY >= (window.innerHeight * 3)){
      specialImageRef.current.classList.add("removed");
    }else{
      specialImageRef.current.classList.remove("removed");
    }
  }else{
    specialImageRef.current.classList.add("removed");
  }
}
const TodaySpecial = () => {
  specialImageRef = useRef();
  let boxConRef = useRef();
  let conPosition = -73;
  let left = true;
  function move () {
    if(left){
      let l = conPosition + "px";
      boxConRef.current.style.left = l;
      conPosition -= 279;
      if(conPosition <= -800){
        left = false;
      }
    }else{
      let l = conPosition + "px";
      boxConRef.current.style.left = l;
      conPosition +=279;
      if(conPosition >= -73){
        left = true;
      }
    }
    
  }
  
  setInterval(() => move(), 3000);
  return(
    <div className="today-special">
      <div className="image removed" ref={specialImageRef}></div>
      <div className="overlay">
        <Container>
          <h2>Today Special</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusm incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim venia,nostrud exercitation ullamco.
          </p>
          <div className="today-con">
            <div className="special-con" ref={boxConRef}>
              <TodayBox img={img1} name="Salamon Steak" text="Any Poll Shit"/>
              <TodayBox img={img2} name="Italyan Pizza" text="The Pest Pizza Ever"/>
              <TodayBox img={img3} name="ANy Pool Shit" text="bim bim bam bam"/>
              <TodayBox img={img1} name="Salamon Steak" text="Any Poll Shit"/>
              <TodayBox img={img2} name="Italyan Pizza" text="The Pest Pizza Ever"/>
              <TodayBox img={img3} name="ANy Pool Shit" text="bim bim bam bam"/>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default TodaySpecial;
export {MoveSpecialBackgroundImage};