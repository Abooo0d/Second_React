const NavItem = (props) => {
  return(
    <li className={props.cls + " nav-item"}>
      <a className="nav-link" href="#a">
        {props.link}
      </a>
    </li>
  );
};
export default NavItem;
