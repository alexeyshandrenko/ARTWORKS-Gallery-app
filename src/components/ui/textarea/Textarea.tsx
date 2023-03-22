import { FC } from "react";

import styles from "./styles/textarea.module.scss";

import { TextareaProps } from "../../../model/models";

const Textarea: FC<TextareaProps> = ({ name, label, ...rest }) => {
  return (
    <div className={styles.area}>
      <label htmlFor={name}>{label}</label>
      <textarea name={name} {...rest}></textarea>
    </div>
  );
};

export default Textarea;
