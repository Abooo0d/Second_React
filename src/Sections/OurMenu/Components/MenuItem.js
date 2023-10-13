type info = {
  name:ReactNode;
  image:ReactNode;
  desc:ReactNode;
  price:ReactNode;
};
const MenuItem = ({name,image,desc,price}:info) => {
  return (
    <div className="menu-item">
      <img src={image}/>
      <div className="item-info">
        <h3 className="item-name">
          {name}
          </h3>
          <p className="item-desc">{desc}</p>
      </div>
      <span className="price">{price}</span>
    </div>
  );
};
export default MenuItem;