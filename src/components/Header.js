import { Link, NavLink } from "react-router-dom"; 
import Logo from "../assets/logo.png"
import { useCart } from "../context/CartContext";
import "./Header.css";

export const Header = () => {
  const { cartList } = useCart();

  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="Shopmate Logo" />
        <span>Carrito de compras</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>Home</NavLink>
        <NavLink to="/cart" className="link">Carrito</NavLink>
      </nav>
      <Link to="/cart" className="items">
        <span>Carrito {cartList.length}</span>
      </Link>
    </header>
  )
}
