import { ChangeEvent, useState, FC } from "react";
import { TextField, MenuItem } from "@mui/material";

import styles from "./styles/menu.module.scss";

import { MenuProps } from "../../model/models";

const Menu: FC<MenuProps> = ({ locale, handleChange }) => {
  return (
    <TextField
      className={styles.menu}
      select
      value={locale}
      onChange={handleChange}
    >
      <MenuItem value="ru">RU</MenuItem>
      <MenuItem value="en">EN</MenuItem>
    </TextField>
  );
};

export default Menu;
