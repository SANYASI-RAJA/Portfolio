import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import menuIcon from "../../assets/nav/menuIcon.png";
import closeIcon from "../../assets/nav/closeIcon.png";
import logo from "../../assets/nav/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleOutSideClick = (event) => {
    if (
      !event.target.closest("#menuOptions") &&
      !event.target.closest("#menu")
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutSideClick);
    return () => {
      document.removeEventListener("click", handleOutSideClick);
    };
  }, []);
  return (
    <nav className={styles.navbar}>
      <Link
        to="/"
        className={`${styles.title} bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-transparent bg-clip-text md:text-[40px]`}
      >
        SANYASI RAJA
      </Link>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuOpen ? closeIcon : menuIcon}
          alt="menu-button"
          onClick={handleMenu}
          id="menu"
        />
        <ul
          className={`${styles.menuItems} ${
            menuOpen && styles.menuOpen
          } text-[#5cc8b4] md:font-bold`}
          id="menuOptions"
        >
          <li>
            <Link to="/about" className={`${styles.menuItem} text-[20px]`} onClick={handleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/skills" className={`${styles.menuItem} text-[20px]`} onClick={handleMenu}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/coding" className={`${styles.menuItem} text-[20px]`} onClick={handleMenu}>
              Coding
            </Link>
          </li>
          <li>
            <Link to="/projects" className={`${styles.menuItem} text-[20px]`} onClick={handleMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className={`${styles.menuItem} text-[20px]`} onClick={handleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
