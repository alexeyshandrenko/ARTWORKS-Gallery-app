import { useContext } from "react";

import { homeImages } from "../../db/db";

import Container from "../../components/container/Container";
import Description from "../../components/ui/description/Description";
import Title from "../../components/ui/title/Title";
import styles from "./styles/contact.module.scss";

import { LocaleContext } from "../../components/wrapper/Wrapper";

const Contact = () => {
  const { locale } = useContext(LocaleContext);

  return (
    <main className={styles.main}>
      <Container>
        <div className={styles.main__container}>
          <div className={styles.main__contact}>
            <div className={styles.main__title}>
              <Title>{locale === "ru" ? "Контакты" : "Contact"}</Title>
            </div>
            <ul className={styles.main__text}>
              <li>
                <Description>
                  <a href="#">nadiah@mail.ru</a>
                </Description>
              </li>
              <li>
                <Description>
                  <a href="#">hovaevanadezda@gmail.com</a>
                </Description>
              </li>

              <li>
                <Description>
                  Instagram&nbsp;&nbsp;
                  <a href="https://instagram.com/nnnad?igshid=YmMyMTA2M2Y=">
                    @nnnad
                  </a>
                </Description>
              </li>
              <li>
                <Description>
                  Vk&nbsp;&nbsp;
                  <a href="https://vk.com/nadiakhovaeva">
                    https://vk.com/nadiakhovaeva
                  </a>
                </Description>
              </li>
            </ul>
          </div>
          <div className={styles.grid}>
            {homeImages.map((el) => {
              return (
                <div key={el.id} className={styles.grid__item}>
                  <img src={`/images/${el.name}`} alt="picture1" />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Contact;
