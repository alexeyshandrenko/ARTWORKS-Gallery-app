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
        {/* <img
          src={
            isOpen ? "/images/icons/cancel.png" : "/images/icons/burger-bar.png"
          }
          alt="burger"
        /> */}
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
    </div>
  );
};

export default Burger;
