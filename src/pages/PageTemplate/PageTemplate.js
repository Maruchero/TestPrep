import { useRef, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { SideMenu } from "../../components/SideMenu/SideMenu";
import styles from "./PageTemplate.module.css";

export function PageTemplate({ children }) {
  // State variables
  const [content] = useState(Array.isArray(children) ? children : [children])

  // Menu Functions
  const menuRef = useRef();
  const toggleMenu = () => {
      menuRef.current.toggleVisibility();
  };

  // Render
  return (
    <div className={styles.PageTemplate}>
      <Navbar menuClick={toggleMenu} />

      <div className={styles.container}>
        <SideMenu ref={menuRef} />
        <div className={styles.mainContent}>{content.map((item) => item)}</div>
      </div>
    </div>
  );
}
