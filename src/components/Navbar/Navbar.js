// Styles
import styles from "./Navbar.module.css";

// Component
export function Navbar({ menuClick }) {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <div
          className={styles.item}
          onClick={menuClick}
        >
          <i className="fa-solid fa-bars"></i>
        </div>
        <div className={styles.item}>
          <i className="fa-solid fa-house"></i>
        </div>
        <div className={styles.item}>New quiz</div>
      </div>
      <div className={styles.right}>
        <a className={styles.item} href=".">
          Github
        </a>
      </div>
    </nav>
  );
}
