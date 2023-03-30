import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaPinterest, FaInstagram } from "react-icons/fa";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import Logo from '@assets/Img/Logo1.png'
import "./Header.scss";

export const Header = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="Header">
      <div className="Wrapper">
        <div className="Header-top">
          <button className="Header-bars" onClick={toggleMenu}>
            <AiOutlineBars size={30} />
          </button>

          <ul className="Header-ul">
            <li className="Header-li">
              <Link to="https://www.instagram.com/" target="_blank" title="Instagram" rel="noreferrer" className="Header-social">
                <FaInstagram size={10} />
              </Link>
            </li>
            <li className="Header-li">
              <Link to="https://www.facebook.com/" target="_blank" title="Facebook" rel="noreferrer" className="Header-social">
                <FaFacebookF size={10} />
              </Link>
            </li>
            <li className="Header-li">
              <Link to="https://www.pinterest.com/" target="_blank" title="Pintrest" rel="noreferrer" className="Header-social">
                <FaPinterest size={10} />
              </Link>
            </li>
          </ul>

          <h1 className="Header-h1">
            <Link to="/" title="Meal Api" rel="noreferrer" className="Header-a">
              <img src={Logo} alt="Meal Api image" className="Header-img" />
            </Link>
          </h1>

          <form className="Header-form">
            <input type="text" placeholder="Search"  className="Header-input" />
            <button className="Header-button">
              <CiSearch size={20} className="Header-svg" />
            </button>
          </form>

          <button className="Header-close" onClick={toggleMenu}>
            {menu && <AiOutlineClose size={25}/>}
          </button>
        </div>

        <div className="Header-bottom">
          <nav className={`Header-nav ${menu ? "isMobile" : ""}`}>
            <ul className="Header-ul">
              <li className="Header-li">
                <Link to="/" title="Home" className="Header-a">
                  Home
                </Link>
              </li>
              <li className="Header-li">
                <Link to="/recipes" title="Recipes" className="Header-a">
                  Recipes
                </Link>
              </li>

            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
