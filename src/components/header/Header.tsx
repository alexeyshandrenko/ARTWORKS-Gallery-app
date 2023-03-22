import { Link } from "react-router-dom";

import { FC, useContext, useEffect, useState } from "react";

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
              <Link to={"/"}>{locale === "ru" ? "Главная" : "Home"}</Link>
            </li>
            <li>
              <Link to={"/watercolour"}>
                {locale === "ru" ? "Акварель" : "Water Colour"}
              </Link>
            </li>
            <li>
              <Link to={"/acrylic"}>
                {locale === "ru" ? "Акрил" : "Acrylic"}
              </Link>
            </li>
            <li>
              <Link to={"/phygital"}>Phygital</Link>
            </li>
            <li>
              <Link to={"/about"}>{locale === "ru" ? "Обо мне" : "About"}</Link>
            </li>
            <li>
              <Link to={"/contact"}>
                {locale === "ru" ? "Контакты" : "Contact"}
              </Link>
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
