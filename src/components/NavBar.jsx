import { Link } from "react-router-dom";
import '../index.css'

const NavBar = () => {
  return (
      <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to="/darkcoffee">Dark Coffee</Link>
        <Link to="/latte">Latte</Link>
        <Link to="/lavender">Lavender</Link>
        <Link to="/botanicalgreen">Botanical Green</Link>
      </div>
  );
};
export default NavBar
