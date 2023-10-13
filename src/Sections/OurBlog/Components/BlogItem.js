import { PiLinkBold } from "react-icons/pi";
const BlogItem = (props) => {
  return(
    <div className="blog-item">
      <div className="blog-image">
        <img src={props.img} />
        <div className="blog-overlay">
          <PiLinkBold />
        </div>
      </div>
      <div className="info">
        <span className="date">{props.date}</span>
        <h3 className="blog-name">{props.name}</h3>
        <span className="by"> Created By {props.by}</span>
      </div>
    </div>
  );
};
export default BlogItem;