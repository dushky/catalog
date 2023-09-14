import { NavLink } from "react-router-dom";
import "./Header.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="list">
        <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Product catalog
            </NavLink>
            
          </li>

          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
                <ShoppingCartIcon></ShoppingCartIcon>
            </NavLink>
            
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
