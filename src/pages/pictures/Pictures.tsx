import { useState, useEffect, useContext } from "react";

import styles from "./styles/pictures.module.scss";

import { useLocation } from "react-router-dom";

import { PictureProps } from "../../model/models";

import Container from "../../components/container/Container";
import Title from "../../components/ui/title/Title";
import Description from "../../components/ui/description/Description";
import { pictureDescriptions, pictureArray } from "../../db/db";
import Picture from "../../components/picture/Picture";

import { LocaleContext } from "../../components/wrapper/Wrapper";

const Pictures = () => {
  const { pathname } = useLocation();
  const [pictures, setPictures] = useState<PictureProps[]>([]);
  const { locale } = useContext(LocaleContext);

  const picDescription = pictureDescriptions.find((el) => {
    return el.type === pathname.substring(1);
  });

  useEffect(() => {
    const array = pictureArray.filter((el) => {
      return el.type === pathname.substring(1);
    });
    setPictures(array);
  }, [pathname]);

  return (
    <main className={styles.main}>
      <Container>
        <div className={styles.main__container}>
          <div className={styles.text}>
            <div className={styles.text__title}>
              <Title>
                {locale === "ru"
                  ? picDescription?.title
                  : picDescription?.titleEn}
              </Title>
            </div>
            <Description>
              {locale === "ru" && picDescription?.title === "Phygital"
                ? picDescription?.description
                : locale === "en" && picDescription?.title === "Phygital"
                ? picDescription?.descriptionEn
                : null}
            </Description>
          </div>
          <div className={styles.grid}>
            {pictures.length > 0 &&
              pictures.map((picture) => {
                return locale === "ru" ? (
                  <Picture
                    key={picture.id}
                    id={picture.id}
                    name={picture.name}
                    type={picture.type}
                    title={picture.title}
                    subtitle={picture.subtitle}
                    description={picture.description}
                  />
                ) : (
                  <Picture
                    key={picture.id}
                    id={picture.id}
                    name={picture.name}
                    type={picture.type}
                    title={picture.titleEn}
                    subtitle={picture.subtitleEn}
                    description={picture.descriptionEn}
                  />
                );
              })}
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Pictures;
