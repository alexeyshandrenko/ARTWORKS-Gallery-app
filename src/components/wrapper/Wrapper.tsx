import { createContext } from "react";

import styles from "./styles/wrapper.module.scss";

import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Menu from "../menu/Menu";
import { ChangeEvent, useState } from "react";
import { MenuProps } from "../../model/models";

export const LocaleContext = createContext<MenuProps>({} as MenuProps);

const Wrapper = () => {
  const [locale, setLocale] = useState<string>("ru");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocale(e.target.value as string);
  };

  const value = { locale, handleChange };

  return (
    <div className={styles.wrapper}>
      <LocaleContext.Provider value={value}>
        <Header />
        <Outlet />
        <Footer />
      </LocaleContext.Provider>
    </div>
  );
};

export default Wrapper;
