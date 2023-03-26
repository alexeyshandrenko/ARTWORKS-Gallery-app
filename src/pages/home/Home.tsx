import styles from "./styles/home.module.scss";

import { FC, useContext } from "react";

import Container from "../../components/container/Container";

import { homeImages } from "../../db/db";
import Title from "../../components/ui/title/Title";
import Description from "../../components/ui/description/Description";

import { LocaleContext } from "../../components/wrapper/Wrapper";

const Home = () => {
  const { locale } = useContext(LocaleContext);

  return (
    <main className={styles.main}>
      <Container>
        <div className={styles.main__container}>
          <div className={styles.text}>
            <div className={styles.text__title}>
              <Title>
                {locale === "ru"
                  ? "Картинная галерея Надежды Ховаевой"
                  : "An Art Gallery by Nadia"}
              </Title>
            </div>
            <Description>
              {locale === "ru"
                ? "Надежда исследует механизмы памяти, глубоко укоренившиеся убеждения, эмоции и воспоминания, которые хранятся в системе мозга и управляют жизнью людей на подсознательном уровне. Память выступает связующим звеном между прошлым человека, его настоящим и будущим."
                : "Nadia is convinced that by learning about the inner world, a person can make a new leap in his development. The most powerful element is the one that is inside us. To know it means to gain incredible power!"}
            </Description>
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

export default Home;
