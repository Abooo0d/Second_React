import React,{useRef,forwardRef} from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
type teamType = {
  name:ReactNode;
  text:ReactNode; 
  img :ReactNode;

}
const TeamMember = ({name,text,img}:teamType) => {
  return(
    <div className="team-member">
      <div className="team-img">
        <img src={img}/>
        <div className="team-overlay"></div>
      </div>
      <div className="info">
        <h3 className="name">{name}</h3>
        <p className="desc">{text}</p>
        <div className="social">
          <span className="socila-item">
            <FaFacebookF/>
          </span>
          <span className="socila-item">
            <FaTwitter/>
          </span>
          <span className="socila-item">
            <FaLinkedinIn/>
          </span>
        </div>
      </div>
    </div>
  );
}
export default TeamMember;