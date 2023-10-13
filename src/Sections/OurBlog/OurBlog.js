import "./OurBlog.css";
import Container from "../Container/Container";
import BlogItem from "./Components/BlogItem";
import { useRef } from "react";
import Images from "./Components/Images";
let blogBackgroundRef;
let blogCounter = 0;
let BlogSection;
function MoveBlogBackground () {
  if((window.scrollY >= (BlogSection.current.offsetTop - window.innerHeight)) && window.scrollY <= (BlogSection.current.offsetTop + BlogSection.current.clientHeight)){
  // if((window.scrollY >= (BlogSection.current.offsetTop - window.innerHeight)) && (window.scrollY <= (window.innerHeight * 8 + 350 ))){
    blogCounter = ((window.scrollY-(BlogSection.current.offsetTop) / 8) * -1);
    blogBackgroundRef.current.style.backgroundPositionY = blogCounter + "px";
    if( window.scrollY <= (BlogSection.current.offsetTop + BlogSection.current.clientHeight)){
      blogBackgroundRef.current.classList.remove("removed");
    }else{
      blogBackgroundRef.current.classList.add("removed");
    }
  }else{
    blogBackgroundRef.current.classList.add("removed");
  }
}
const OurBlog = () => {
  blogBackgroundRef = useRef();
  BlogSection = useRef();
  return (
    <div className="our-blog" ref={BlogSection}>
      <div className="image" ref={blogBackgroundRef}></div>
      <div className="overlay">
        <Container>
        <h1>Our Blog</h1>
        <div className="blog-con">
          <BlogItem img={Images[0]} date="25 NOVEMBER, 2014" name="LATEST RECIPES JUST IN!" by="BY John Doggett" />
          <BlogItem img={Images[1]} date="2 NOVEMBER, 2014" name="NEW RECRUITS HAVE ARRIVED!" by="BY Jeffrey Spender" />
          <BlogItem img={Images[2]} date="4 NOVEMBER, 2014" name="BAKING TIPS FROM THE PROS" by="BY Monica Reyes" />
          <BlogItem img={Images[3]} date="12 NOVEMBER, 2014" name="ALL YOUR EGGS BELONG TO US" by="BY John Doggett" />
        </div>
        </Container>
      </div>
    </div>
  );
};
export default OurBlog;
export {MoveBlogBackground};