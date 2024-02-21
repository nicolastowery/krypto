import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "./index.css";
export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      setIsSticky(offset > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isSticky ? "sticky" : ""}`}>
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
