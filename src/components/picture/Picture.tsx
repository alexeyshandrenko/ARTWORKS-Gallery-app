import { FC, useState, useEffect } from "react";

import styles from "./styles/picture.module.scss";

import { PictureProps } from "../../model/models";
import Modal from "../modal/Modal";

const Picture: FC<PictureProps> = ({
  name,
  description,
  type,
  subtitle,
  title,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    body.style.overflow = isModalOpen ? "hidden" : "visible";
  }, [isModalOpen]);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      {isModalOpen && (
        <Modal
          name={name}
          type={type}
          isOpen={isModalOpen}
          onClose={toggleModal}
          title={title}
          subtitle={subtitle}
          description={description}
        />
      )}
      <div className={styles.picture}>
        <button onClick={toggleModal}>
          <img loading="lazy" src={`/images/${type}/${name}`} alt="pictures" />
        </button>
      </div>
    </>
  );
};

export default Picture;
