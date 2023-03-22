import styles from "./styles/burger.module.scss";

import { FC } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

interface BurgerProps {
  toggleMenu: () => void;
  isOpen: boolean;
}

const Burger: FC<BurgerProps> = ({ toggleMenu, isOpen }) => {
  return (
    <div className={styles.burger}>
      <button className={styles.burger__button} onClick={toggleMenu}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
    </div>
  );
};

export default Burger;
