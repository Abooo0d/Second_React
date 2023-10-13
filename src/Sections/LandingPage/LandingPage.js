import { useRef } from "react";
import "./LandingPage.css";
let counter = 0;
let imageRef;
function MoveBackgroundImage() {
  // Moving The Image Slightly While Scrolling 
  counter = (window.scrollY / 5) * -1;
  imageRef.current.style.backgroundPositionY = counter + "px" ;
  // Removing The Image At The End of The Section
  if(window.scrollY >= window.innerHeight){
    imageRef.current.classList.add("removed");
  }else{
    imageRef.current.classList.remove("removed");
  }
}
const LandingPage = () => {
  imageRef = useRef();
  const scrollToTop = () => {
    window.scrollTo({ top: window.innerHeight, left: 0, behavior: "smooth" });
  };
  let textRef = useRef();
  let text = "Resturante";
  let printedText = "";
  let textCounter = 0;
  let order = true;
  setInterval(() => {
    if(order){
      printedText = "";
      for(var i = 0; i <= textCounter -1 ; i++){
        printedText += text[i];
      }
      textRef.current.textContent = printedText ;
      textCounter ++;
      if(textCounter >= 9){
        order = false;
      }
    }else if(!order){
      printedText = "";
      for(let i = 0;i <= textCounter; i++){
        printedText += text[i];
      }
      textRef.current.textContent = printedText;
      textCounter --;
      if(textCounter <= 0){
        order = true;
      }
    }
  }, 350);
  return(
    <div className="landing-page">
      <div className="image" ref={imageRef}></div>
      <div className="overlay">
        <h1 className="live-content">
        Dinner with us 
        <span ref={textRef}></span>_
        </h1>
        <h3>Accidental appearances</h3>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod</p>
        <button className="book">Book My Table</button>
        <button className="go-down" onClick={scrollToTop}></button>
      </div>
    </div>
  );
};
export default LandingPage;
export {MoveBackgroundImage};