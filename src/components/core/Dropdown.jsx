"use client";
import { useState } from "react";
import Link from "./Link";

const Dropdown = ({ data, children }) => {
  const [toggle, setToggle] = useState(false);

  const toggleDropdown = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-link nav-link py-2 px-0 px-lg-2 dropdown-toggle"
        // aria-expanded={toggle ? "true" : "false"}
        onClick={toggleDropdown}
      >
        {children}
      </button>

      <ul className={`dropdown-menu ${toggle ? "show" : ""}`.trim()}>
        <li>
          <Link
            path="https://www.google.com"
            className="dropdown-item d-flex align-items-center justify-content-between"
          >
            Google
          </Link>
        </li>
        <li>
          <Link
            path="/about"
            className="dropdown-item d-flex align-items-center justify-content-between"
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
