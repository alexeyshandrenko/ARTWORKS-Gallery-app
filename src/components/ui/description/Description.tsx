import { FC } from "react";

import styles from "./styles/description.module.scss";

import { ContainerProps } from "../../../model/models";

const Description: FC<ContainerProps> = ({ children }) => {
  return <p className={styles.description}>{children}</p>;
};

export default Description;
