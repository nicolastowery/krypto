import "./index.css";
export default function Header() {
  return (
    <header className="header">
      <span className="logo">Krypto</span>
      <ul className="navbar">
        <li className="navbarList">
          <a href="#" className="navbarListItem">
            about
          </a>
          <a href="#" className="navbarListItem">
            pricing
          </a>
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
