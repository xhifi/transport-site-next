import Dropdown from "./core/Dropdown";
import LOGO from "../app/favicon.ico";
import Image from "./core/Image";
import Link from "./core/Link";
import { useState } from "react";
import Logo from "./core/Logo";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggle = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom shadow">
      <div className="container-fluid">
        <Logo src={LOGO.src} />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <nav className={`collapse navbar-collapse ${menuOpen ? "show" : "collapse"}`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li>
              <Dropdown>Dropdown menu</Dropdown>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Navigation;
