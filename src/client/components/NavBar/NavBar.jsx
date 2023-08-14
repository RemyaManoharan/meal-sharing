import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { CgMenuCheese } from "react-icons/cg";
import { Link } from "react-router-dom";

import "./NavBar.css";

function NavBar() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      {/* logo */}
      <Link to="/">
        <span>
          <h1>MEAL SHARING APP</h1>
        </span>
      </Link>
      {/* burger menu */}
      {isMobile && (
        <button className="btnMenu" onClick={toggleMenu}>
          <CgMenuCheese />
        </button>
      )}
      {/* navigation links */}
      <ul
        className="navigation"
        style={{ display: isMobile && isOpen ? "none" : "flex" }}
      >
        <li>
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/meals" onClick={toggleMenu}>
            Meals
          </Link>
        </li>
        <li>
          <Link to="/reviews" onClick={toggleMenu}>
            Reviews
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default NavBar;
