import styles from "./ModalWindow.module.scss";
import { Dispatch, SetStateAction } from "react";
import { SlClose } from "react-icons/sl";

export interface IModal {
  IsActive?: boolean;
  setIsActive?: Dispatch<SetStateAction<boolean>>;
}

export default function ModalWindow({ IsActive, setIsActive }: IModal) {
  return (
    <>
      {IsActive ? (
        <div
          className={styles.modal}
          onClick={() => setIsActive && setIsActive(false)}
        >
          <div className={styles.content}>
            <button className={styles.button} onClick={() => setIsActive && setIsActive(false)}>
              <SlClose style={{ width: "33px", height: "33px", color: "grey"}}/>
            </button>
            <div className={styles.container}>
              <h2 className={styles.text}>Great!</h2>
              <div className={styles.text}>Have a nice rest!</div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
