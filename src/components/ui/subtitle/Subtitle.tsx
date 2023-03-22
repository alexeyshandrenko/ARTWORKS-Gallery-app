import { FC } from "react";

import styles from "./styles/subtitle.module.scss";

import { ContainerProps } from "../../../model/models";

const Subtitle: FC<ContainerProps> = ({ children }) => {
  return <h2 className={styles.subtitle}>{children}</h2>;
};

export default Subtitle;
