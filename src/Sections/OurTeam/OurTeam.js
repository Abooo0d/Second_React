import "./OurTeam.css";
import React, {useRef,useEffect} from "react";
import Container from "../Container/Container";
import TeamMember from "./COmponents/TeamMember";
import team1 from "../../images/staff-01.jpg";
import team2 from "../../images/staff-02.jpg";
import team3 from "../../images/staff-03.jpg";
let desc = 
  "Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Aenean commodo ligula.";
let teamCounter = 0;
let teamBackground;
function MoveTeamBackground () {
  if((window.scrollY >= (window.innerHeight * 3)) && (window.scrollY <= (window.innerHeight * 5 + 90))){
    teamCounter = ((window.scrollY-(window.innerHeight*3)) / 5) * -1;
    teamBackground.current.style.backgroundPositionY = teamCounter + "px";
    if(window.scrollY >= window.innerHeight * 5 + 90){
      teamBackground.current.classList.add("removed");
    }else{
      teamBackground.current.classList.remove("removed");
    }
  }else{
    teamBackground.current.classList.add("removed");
  }
}
const OurTeam = () => {
  teamBackground = useRef();
  return(
    <div className="our-team">
      <div className="image removed" ref={teamBackground}></div>
      <div className="overlay">
        <Container>
          <h1>Our Team</h1>
          <p>There are many variations of passages of Lorem Ipsum available, 
            but the majority have suffered alteration in some form, by 
            injected humour, or randomised words which don't look even
            slightly believable.
          </p>
          <div className="team-con">
            <TeamMember img={team1} name="John Doggett" text={desc}/>
            <TeamMember img={team2} name="Jeffrey Spender" text={desc}/>
            <TeamMember img={team3} name="Monica Reyes" text={desc}/>
          </div>
        </Container>
      </div>
    </div>
  );
}
export default OurTeam;
export {MoveTeamBackground};