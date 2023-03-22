import { useContext } from "react";

import Container from "../container/Container";
import styles from "./styles/footer.module.scss";

import { LocaleContext } from "../wrapper/Wrapper";
import Menu from "../menu/Menu";

const Footer = () => {
  const { locale, handleChange } = useContext(LocaleContext);

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer__container}>
          <p className={styles.footer__text}>©2023 NADEZHDA HOVAEVA</p>
          <ul className={styles.footer__list}>
            <li>
              <a href="https://vk.com/nadiakhovaeva">
                <img src="/images/icons/vk.png" alt="icon" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src="/images/icons/instagram.png" alt="icon" />
              </a>
            </li>
            <li>
              <Menu locale={locale} handleChange={handleChange} />
            </li>
          </ul>
        </div>
        {/* <Menu locale={locale} handleChange={handleChange} /> */}
      </Container>
    </footer>
  );
};

export default Footer;
