import { FC } from "react";

import styles from "./styles/container.module.scss";

import { ContainerProps } from "../../model/models";

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
