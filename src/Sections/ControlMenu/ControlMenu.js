
import React, { useRef ,useEffect} from "react";
import { BsFillGearFill } from "react-icons/bs";
import "./ControlMenu.css";
const ControlMenu = () => {
  // Get The Main Color From The LocalStorage
  let mainColor = localStorage.getItem("main-color");
  // Set The Main Color To The Document Element If It`s Not Empty
  if(mainColor != null){
    document.documentElement.style.setProperty("--main-color",mainColor);
  }
  // Create Refs For The Color Elements
  let colorRef = useRef([]);
  colorRef.current = [...Array(4).keys()].map(
    (index) => (colorRef.current[index] = React.createRef())
  );
  // Set The Colors Elements To An Array
  let Colors = Array.from(colorRef.current);
  // Creat Ref For The Menu Button
  let controlRef = useRef();    
  // Creat Ref For Teh Menu
  let menuRef = useRef();
  // Creat Interval To Set The Click Event To The Colors Elements
  // let setEvent = setInterval(() => {
  //   controlRef.current.onclick = () => {
  //     menuRef.current.classList.toggle("show-menu");
  //   };
  //   Colors.forEach((color) => {
  //     color.current.onclick = (e) => {
  //       document.documentElement.style.setProperty("--main-color",e.target.dataset.color);
  //       localStorage.setItem("main-color",e.target.dataset.color);
  //     };
  //   });
  //   clearInterval(setEvent);
  // }, 100);
  useEffect(() => {
    controlRef.current.onclick = () => {
      menuRef.current.classList.toggle("show-menu");
    };
    Colors.forEach((color) => {
      color.current.onclick = (e) => {
        document.documentElement.style.setProperty("--main-color",e.target.dataset.color);
        localStorage.setItem("main-color",e.target.dataset.color);
      };
    });
  });
  return(
    <div className="control-menu" ref={menuRef}>
      <span className="gear" ref={controlRef}>
      <BsFillGearFill/>
      </span>
      <div className="colors">
        <h3>Main Color</h3>
        <div className="colors-con">
          <span className="blue" data-color="#1E69B8" ref={colorRef.current[0]}></span>
          <span className="green" data-color="#8dc63f" ref={colorRef.current[1]}></span>
          <span className="orange" data-color="#e75b1e" ref={colorRef.current[2]}></span>
          <span className="yello" data-color="#fdcb03" ref={colorRef.current[3]}></span>
        </div>
      </div>
    </div>
  );
}
export default ControlMenu;