import { SlArrowRightCircle } from "react-icons/sl";
import styles from "./Button.module.scss";

type ButtonProps = {
  text: string;
  small?: boolean;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({ text, small=false, onClick }: ButtonProps) => {
  return (
    <button type="button" className={small ? styles.smallButton : styles.button} onClick={onClick}>
      {text}
      <SlArrowRightCircle />
    </button>
  );
};
