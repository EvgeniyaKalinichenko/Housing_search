import { SlArrowRightCircle } from "react-icons/sl";
import styles from "./Button.module.scss";
import { Dispatch, SetStateAction } from "react";

type ButtonProps = {
  text: string;
  small?: boolean;
  onClick?: () => void;
  IsActive?: boolean;
  setIsActive?: Dispatch<SetStateAction<boolean>>;
};

export const Button: React.FC<ButtonProps> = ({ text, small=false, onClick }: ButtonProps) => {
  return (
    <button type="button" className={small ? styles.smallButton : styles.button} onClick={onClick}>
      {text}
      <SlArrowRightCircle />
    </button>
  );
};
