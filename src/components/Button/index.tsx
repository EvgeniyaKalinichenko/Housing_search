import { SlArrowRightCircle } from "react-icons/sl";
import styles from "./Button.module.scss";

type ButtonProps = {
  text: string;
  small: boolean;
  onClick?: () => void;
};

export const Button = ({ text, small}: ButtonProps) => {
  return (
    <button className={small ? styles.smallButton : styles.button}>
      {text}
      <SlArrowRightCircle />
    </button>
  );
};
