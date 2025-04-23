import styles from "./ModalWindow.module.scss";
import { Dispatch, SetStateAction } from "react";
import { SlClose } from "react-icons/sl";

export interface IModal {
  IsActive?: boolean;
  setIsActive?: Dispatch<SetStateAction<boolean>>;
}

export default function ModalWindow({ IsActive, setIsActive }: IModal) {
  return IsActive ? (
    <div className={styles.modalOverlay} onClick={() => setIsActive?.(false)}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.button}
          onClick={() => setIsActive?.(false)}
        >
          <SlClose className={styles.icon} />
        </button>
        <div className={styles.content}>
          <h2 className={styles.text}>Great!</h2>
          <div className={styles.text}>Have a nice rest!</div>
        </div>
      </div>
    </div>
  ) : null;
}
