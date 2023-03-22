import { Link } from "react-router-dom";
import styles from "./styles/burger.module.scss";
import { FC, useContext } from "react";

import { LocaleContext } from "../wrapper/Wrapper";

interface MenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const Menu: FC<MenuProps> = ({ isOpen, toggleMenu }) => {
  const { locale } = useContext(LocaleContext);

  return (
    <div
      className={isOpen ? `${styles.menu} ${styles.menu_active}` : styles.menu}
      onClick={toggleMenu}
    >
      <div
        className={styles.menu__content}
        onClick={(e: any) => e.stopPropagation()}
      >
        <ul>
          <li onClick={toggleMenu}>
            <Link to="/">{locale === "ru" ? "Главная" : "Home"}</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/watercolour">
              {locale === "ru" ? "Акварель" : "Water Colour"}
            </Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/acrylic">{locale === "ru" ? "Акрил" : "Acrylic"}</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/phygital">Phygital</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/about">{locale === "ru" ? "Обо мне" : "About"}</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/contact">
              {locale === "ru" ? "Контакты" : "Contact"}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
