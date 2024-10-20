import  { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import menuIcon from "../../assets/nav/menuIcon.png";
import closeIcon from "../../assets/nav/closeIcon.png";

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
        className={`${styles.title} bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-transparent bg-clip-text md:text-[60px] px-4`}
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
          <li >
            <Link to="/about" style={{ "--clr": "#0535fa" }} className={`${styles.menuItem} text-[20px]`}  onClick={handleMenu}>
              <span>About</span>
              <i></i>
            </Link>
          </li>
          <li>
            <Link to="/skills" style={{ "--clr": "#05f809" }} className={`${styles.menuItem} text-[20px]`} onClick={handleMenu}>
            <span>Skills</span>
            <i></i>
            </Link>
          </li>
          <li>
            <Link to="/coding" style={{ "--clr": "#ff6347" }} className={`${styles.menuItem} text-[20px]`} onClick={handleMenu}>
              <span>Coding</span>
              <i></i>
            </Link>
          </li>
          <li>
            <Link to="/projects" style={{ "--clr": "#f2f607" }} className={`${styles.menuItem} text-[20px]`} onClick={handleMenu}>
              <span>Projects</span>
              <i></i>
            </Link>
          </li>
          <li>
            <Link to="/contact" style={{ "--clr": "#ff1493" }} className={`${styles.menuItem} text-[20px]`} onClick={handleMenu}>
              <span>Contact</span>
              <i></i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
