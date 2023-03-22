import { FC } from "react";
import { InputProps } from "../../../model/models";

import styles from "./styles/input.module.scss";

const Input: FC<InputProps> = ({ name, label, value, ...rest }) => {
  return (
    <div
      className={
        value ? `${styles.input} ${styles.input_active}` : styles.input
      }
    >
      <label htmlFor={name}>{label}</label>
      <input name={name} {...rest} />
    </div>
  );
};

export default Input;
