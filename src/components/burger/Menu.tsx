import { NavLink } from "react-router-dom";
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
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? `${styles.link} ${styles.link_pending}`
                  : isActive
                  ? `${styles.link} ${styles.link_active}`
                  : styles.link
              }
              to="/"
            >
              {locale === "ru" ? "Главная" : "Home"}
            </NavLink>
          </li>
          <li onClick={toggleMenu}>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? `${styles.link} ${styles.link_pending}`
                  : isActive
                  ? `${styles.link} ${styles.link_active}`
                  : styles.link
              }
              to="/watercolour"
            >
              {locale === "ru" ? "Акварель" : "Water Colour"}
            </NavLink>
          </li>
          <li onClick={toggleMenu}>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? `${styles.link} ${styles.link_pending}`
                  : isActive
                  ? `${styles.link} ${styles.link_active}`
                  : styles.link
              }
              to="/acrylic"
            >
              {locale === "ru" ? "Акрил" : "Acrylic"}
            </NavLink>
          </li>
          <li onClick={toggleMenu}>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? `${styles.link} ${styles.link_pending}`
                  : isActive
                  ? `${styles.link} ${styles.link_active}`
                  : styles.link
              }
              to="/phygital"
            >
              Phygital
            </NavLink>
          </li>
          <li onClick={toggleMenu}>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? `${styles.link} ${styles.link_pending}`
                  : isActive
                  ? `${styles.link} ${styles.link_active}`
                  : styles.link
              }
              to="/about"
            >
              {locale === "ru" ? "Обо мне" : "About"}
            </NavLink>
          </li>
          <li onClick={toggleMenu}>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? `${styles.link} ${styles.link_pending}`
                  : isActive
                  ? `${styles.link} ${styles.link_active}`
                  : styles.link
              }
              to="/contact"
            >
              {locale === "ru" ? "Контакты" : "Contact"}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
