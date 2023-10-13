import React,{forwardRef} from "react";
import { BiSearchAlt } from "react-icons/bi";
const GalleryItem =forwardRef(function(props,ref){
  return(
    <div className={props.cls + " gallery-item"} style={{backgroundImage:`url(${props.img})`}} ref={ref} data-index={props.index}>
      <div className="gallery-item-overlay">
        <span>
          <BiSearchAlt/>
        </span>
      </div>
    </div>
  );
}); 
export default GalleryItem;