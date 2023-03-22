import { FC, useContext, useEffect, useState } from "react";
import { Link, NavLink, useMatch } from "react-router-dom";
import styles from "./styles/header.module.scss";

import Container from "../container/Container";
import Burger from "../burger/Burger";
import Menu from "../burger/Menu";

import { LocaleContext } from "../wrapper/Wrapper";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { locale } = useContext(LocaleContext);

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    body.style.overflow = isOpen ? "hidden" : "visible";
  }, [isOpen]);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.header__navigation}>
          <ul>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? `${styles.link} ${styles.link_pending}`
                    : isActive
                    ? `${styles.link} ${styles.link_active}`
                    : styles.link
                }
                to={"/"}
              >
                {locale === "ru" ? "Главная" : "Home"}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? `${styles.link} ${styles.link_pending}`
                    : isActive
                    ? `${styles.link} ${styles.link_active}`
                    : styles.link
                }
                to={"/watercolour"}
              >
                {locale === "ru" ? "Акварель" : "Water Colour"}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? `${styles.link} ${styles.link_pending}`
                    : isActive
                    ? `${styles.link} ${styles.link_active}`
                    : styles.link
                }
                to={"/acrylic"}
              >
                {locale === "ru" ? "Акрил" : "Acrylic"}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? `${styles.link} ${styles.link_pending}`
                    : isActive
                    ? `${styles.link} ${styles.link_active}`
                    : styles.link
                }
                to={"/phygital"}
              >
                Phygital
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? `${styles.link} ${styles.link_pending}`
                    : isActive
                    ? `${styles.link} ${styles.link_active}`
                    : styles.link
                }
                to={"/about"}
              >
                {locale === "ru" ? "Обо мне" : "About"}
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? `${styles.link} ${styles.link_pending}`
                    : isActive
                    ? `${styles.link} ${styles.link_active}`
                    : styles.link
                }
                to={"/contact"}
              >
                {locale === "ru" ? "Контакты" : "Contact"}
              </NavLink>
            </li>
          </ul>
          <Burger isOpen={isOpen} toggleMenu={toggleMenu} />
        </nav>
      </Container>
      <Menu toggleMenu={toggleMenu} isOpen={isOpen} />
    </header>
  );
};

export default Header;
