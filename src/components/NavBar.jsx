import { Link } from "react-router-dom";
import '../index.css'

const NavBar = () => {
  return (
      <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
      </div>
  );
};
export default NavBar
