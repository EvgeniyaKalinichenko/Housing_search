import { Link } from "react-router-dom";
import styles from './Header.module.scss'

export const Header = () => {
  return (
    <>
    <div className={styles.header}>Header</div>
    <Link to="#" className={styles.link}>
    
    </Link>
    </>
  )
}

export default Header;