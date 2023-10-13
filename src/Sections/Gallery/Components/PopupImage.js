import { forwardRef } from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
const PopupImage =forwardRef(function(props,ref){
  return (
    <div className="popup-image" ref={ref[0]}>
      <img src="" ref={ref[1]} />
      <button className="popup-exit" ref={ref[2]}><RiArrowGoBackFill/></button>
    </div>
  );
});
export default PopupImage;