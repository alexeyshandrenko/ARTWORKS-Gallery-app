import { FC, useEffect, useState } from "react";
import { ModalProps } from "../../model/models";

import styles from "./styles/modal.module.scss";

const Modal: FC<ModalProps> = ({
  name,
  type,
  title,
  description,
  isOpen,
  onClose,
}) => {
  return isOpen ? (
    <div className={styles.modal}>
      <button onClick={onClose} className={styles.modal__close}>
        <img src="/images/icons/cancel.png" alt="close" />
      </button>
      <div className={styles.modal__container}>
        <div className={styles.modal__left}>
          <div className={styles.modal__image}>
            <img src={`/images/${type}/${name}`} alt="pic" />
          </div>
        </div>
        <div className={styles.modal__right}>
          <div className={styles.modal__description}>
            <div className={styles.modal__title}>{title}</div>
            <div className={styles.modal__text}>{description}</div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
