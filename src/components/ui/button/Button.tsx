import { FC } from "react";

import styles from "./styles/button.module.scss";

import { ButtonProps } from "../../../model/models";

const Button: FC<ButtonProps> = ({ onClick, children, type, disabled }) => {
  return (
    <button
      className={styles.button}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
