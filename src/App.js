import "./App.css";
import 
  {Header, LandingPage, ControlMenu,AboutUs,TodaySpecial
  ,OurMenu,OurTeam,Gallery,OurBlog,Pricing,Reservation} 
  from "./Sections/Sections";
import 
  { MoveBackgroundImage,ShowGoTop ,MoveSpecialBackgroundImage, MoveTeamBackground,MoveBlogBackground} 
  from "./Sections/Sections";

function App() {
  window.onscroll = () => {
    MoveBackgroundImage();
    ShowGoTop();
    MoveSpecialBackgroundImage();
    MoveTeamBackground();
    MoveBlogBackground();
  }; 
  return (
    <div className="App">
      <Header />
      <ControlMenu />
      <LandingPage />
      <AboutUs />
      <TodaySpecial />
      <OurMenu />
      <OurTeam />
      <Gallery />
      <OurBlog />
      <Pricing />
      <Reservation />
    </div>
  );
}
export default App;
