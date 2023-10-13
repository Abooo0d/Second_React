import React,{useRef,useEffect} from "react";
import GalleryItem from "./Components/GalleryItem";
import Container from "../Container/Container";
import PopupImage from "./Components/PopupImage";
import Images from "./images";
import "./Gallery.css";
const Gallery =  () => {
  let imagesRef = useRef([]);
  imagesRef.current = [...Array(10).keys()].map(
    (index)=>(imagesRef.current[index] = React.createRef())
  )
  let ImagesArray = Array.from(imagesRef.current);
  let popupoverlay = useRef();
  let popupimage = useRef();
  let exitbtn = useRef();
  let imageSrc;
  useEffect(() => {
    ImagesArray.forEach((image) => {
      image.current.addEventListener("click",()=> {
        imageSrc = Images[image.current.dataset.index];
        popupimage.current.src = imageSrc;
        popupoverlay.current.classList.add("activated");
        let scalecounter = 0.2;
        let a = setInterval(() => {
          popupimage.current.style.transform = `translate(-50%,-50%) scale(${scalecounter})`;
          scalecounter += 0.2;
          if(scalecounter > 1)
          { 
            clearInterval(a);
          }
        },30);
      });
    });
    exitbtn.current.addEventListener("click",()=> {
      popupoverlay.current.classList.remove("activated");
      popupimage.current.style.transform = `translate(-50%,-50%) scale(0.2)`;
    });
  });
  return(
    <div className="gallery">
      <Container>
        <h1>Gallery</h1>
        <p>There are many variations of passages of Lorem Ipsum available</p>
        <div className="gallery-con">
          <GalleryItem img={Images[0]} index="0" cls="tow" ref={imagesRef.current[0]} />
          <GalleryItem img={Images[1]} index="1" cls="one" ref={imagesRef.current[1]} />
          <GalleryItem img={Images[2]} index="2" cls="one" ref={imagesRef.current[2]} />
          <GalleryItem img={Images[3]} index="3" cls="one" ref={imagesRef.current[3]} />
          <GalleryItem img={Images[4]} index="4" cls="one" ref={imagesRef.current[4]} />
          <GalleryItem img={Images[5]} index="5" cls="one" ref={imagesRef.current[5]} />
          <GalleryItem img={Images[6]} index="6" cls="tow" ref={imagesRef.current[6]} />
          <GalleryItem img={Images[7]} index="7" cls="one" ref={imagesRef.current[7]} />
          <GalleryItem img={Images[8]} index="8" cls="one" ref={imagesRef.current[8]} />
          <GalleryItem img={Images[9]} index="9" cls="one" ref={imagesRef.current[9]} />
        </div>
      </Container>
      <PopupImage img={imageSrc} ref={[popupoverlay,popupimage,exitbtn]} />
    </div>
  );
};
export default Gallery;