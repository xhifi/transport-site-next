import Dropdown from "./core/Dropdown";
import LOGO from "../app/favicon.ico";
import Image from "./core/Image";
import Link from "./core/Link";
import { useState } from "react";
import Brand from "../../public/brand.svg";
import Logo from "./core/Logo";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggle = () => setMenuOpen(!menuOpen);

  return (
    <>
      <div className="container-fluid bg-light py-1">
        <div className="d-flex align-items-center">
          <Logo src={Brand.src} />

          <ul className="align-items-center list-unstyled mb-0 ms-auto d-none d-md-flex">
            <li className="border-end px-3">
              <i class="bi bi-globe-americas me-1"></i>Virginia
            </li>
            <li className="border-end px-3">
              <Link path="tel:3463263009" className="text-dark text-decoration-none">
                <i class="bi bi-telephone-fill me-1"></i>(346) 326-3009
              </Link>
            </li>
            <li className="ps-3">
              <Link path="mailto:support@activetransportllc.com" className="text-dark text-decoration-none">
                <i class="bi bi-envelope-fill me-1"></i> support@activetransportllc.com
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom shadow">
        <div className="container-fluid">
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
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Our Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Why Choose Us?
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
          <ul className="list-unstyled m-0 d-flex align-items">
            <li className="me-2">
              <i class="bi bi-facebook me-1"></i>
            </li>
            <li className="me-2">
              <i class="bi bi-instagram me-1"></i>
            </li>
            <li className="me-2">
              <i class="bi bi-google me-1"></i>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
