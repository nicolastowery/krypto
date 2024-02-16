import { NavLink } from "react-router-dom";
import "./index.css";
export default function Header() {
  return (
    <header className="header">
      <NavLink to="/" className="logo">
        Krypto
      </NavLink>
      <ul className="navbar">
        <li className="navbarList">
          <NavLink to="#" className="navbarListItem">
            about
          </NavLink>
          <NavLink to="/pricing" className="navbarListItem">
            pricing
          </NavLink>
          <a href="#" className="navbarListItem">
            contact
          </a>
          <a href="#" className="navbarListItem">
            buy NFTs
          </a>
        </li>
      </ul>
    </header>
  );
}
