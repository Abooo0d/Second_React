import "./Header.css";
import { useRef, useEffect } from "react";
import Container from "../Container/Container";
import NavItem from "./Components/Nav-Item/NavItem";
import { FaAnglesUp } from "react-icons/fa6";
let headerRef;
let goTopRef;
const ShowGoTop = () => {
  if (window.scrollY > window.innerHeight) {
    goTopRef.current.classList.add("show-top");
  } else {
    goTopRef.current.classList.remove("show-top");
  }
};
// const StickDown = () => {
//   let topInterval;
//   let topCounter = 0;
//   if(window.scrollY >= 400){
//     if(headerRef.current.classList.contains("down")){}
//     else{
//       headerRef.current.classList.add("down");
//       topCounter = -100;
//       topInterval = setInterval(() => {
//         headerRef.current.style.top=topCounter + "px";
//         topCounter +=10;
//         if(topCounter > 0) clearInterval(topInterval);
//       }, 50);
//     }
//   }else {
//     if(headerRef.current.classList.contains("down")){
//       headerRef.current.classList.remove("down");
//     }
//     else{
//     }
//   }
// }
const Header = () => {
  const goTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  headerRef = useRef();
  goTopRef = useRef();
  const buttonRef = useRef();
  const listRef = useRef();
  // let setEvent = setInterval(() => {
  //   buttonRef.current.addEventListener("click",() => {
  //     listRef.current.classList.toggle("show");
  //     buttonRef.current.classList.toggle("show");
  //   });
  //   clearInterval(setEvent);
  // }, 100);
  useEffect(() => {
    buttonRef.current.addEventListener("click", () => {
      listRef.current.classList.toggle("show");
      buttonRef.current.classList.toggle("show");
    });
  });
  return (
    <header ref={headerRef} className="top">
      <Container>
        <a className="logo" href="#a"></a>
        <button className="menu-toggler" ref={buttonRef}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="linkes" ref={listRef}>
          <ul>
            <NavItem link="Home" cls="active" />
            <NavItem link="About" />
            <NavItem link="Contact Us" />
            <NavItem link="portFolio" />
          </ul>
        </div>
      </Container>
      <button className="go-top" ref={goTopRef} onClick={goTop}>
        <FaAnglesUp />
      </button>
    </header>
  );
};
export default Header;
export { ShowGoTop };
