import { useRef } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { SideMenu } from "../../components/SideMenu/SideMenu";
import styles from "./PageTemplate.module.css";

export function PageTemplate({ children }) {
  const menuRef = useRef();
  const toggleMenu = menuRef.current.toggleVisibility;

  return (
    <div className={styles.PageTemplate}>
      <Navbar menuClick={toggleMenu} />

      <div className={styles.container}>
        <SideMenu ref={menuRef} />
        <div className={styles.mainContent}>{children.map((item) => item)}</div>
      </div>
    </div>
  );
}
