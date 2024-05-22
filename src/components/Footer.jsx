import { Link } from "react-router-dom";
import '../index.css'

const Footer = () => {
    return (
        <footer id="footer">
        <Link to="/">Home</Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to="/darkcoffee">Dark Coffee</Link>
        <Link to="/latte">Latte</Link>
        <Link to="/lavender">Lavender</Link>
        <Link to="/botanicalgreen">Botanical Green</Link>
    </footer>
    )
}

export default Footer
