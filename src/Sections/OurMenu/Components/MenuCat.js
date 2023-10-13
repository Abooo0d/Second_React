import {forwardRef} from "react";
import { type } from "@testing-library/user-event/dist/type";
import { BiSolidDrink } from "react-icons/bi";
type b = {
  icon: ReactElement<IconProps>;
  name:ReactNode;
  classs:ReactNodre;
  num:ReactNode;
};
const MenuCat = forwardRef(function({icon,name,classs,num}:b,ref) {
  return (
    <div className={classs + " menu-cat"} ref={ref} data-num={num}>
      <h3>{name}</h3>
      {icon}
    </div>
  );
})
export default MenuCat;