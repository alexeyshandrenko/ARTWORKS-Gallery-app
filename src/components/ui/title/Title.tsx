import { FC } from "react";

import styles from "./styles/title.module.scss";

import { ContainerProps } from "../../../model/models";

const Title: FC<ContainerProps> = ({ children }) => {
  return <h2 className={styles.title}>{children}</h2>;
};

export default Title;
