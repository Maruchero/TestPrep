import { useEffect, useRef, useState } from "react";
import styles from "./Dropdown.module.css";

export function Dropdown({ caption, children }) {
  // Convert children to array
  if (!Array.isArray(children)) children = [children];

  // Component variables
  const [dropdownClasses, setDropdownClasses] = useState([styles.dropdown]);
  const [maxHeight, setMaxHeight] = useState(0);
  const ref = useRef(null);

  const content = (
    <div
      className={styles.container}
      style={{ "--max-height": maxHeight + "px" }}
    >
      <div className={styles.content} ref={ref}>
        {children.map((item) => item)}
      </div>
    </div>
  );

  // Component did mount
  useEffect(() => {
    setMaxHeight(ref.current.clientHeight);
  }, []);

  // On click
  const handleClick = () => {
    if (dropdownClasses.includes(styles.active)) {
      setDropdownClasses([styles.dropdown]);
      return;
    }
    setDropdownClasses([styles.dropdown, styles.active]);
  };

  const selectRating = (rating, event) => {
    event.stopPropagation();
    console.log(rating);
  }

  // Render
  return (
    <div className={dropdownClasses.join(" ")}>
      <div className={styles.visible} onClick={handleClick}>
        <span className={styles.caption}>{caption}</span>
        <div className={styles.right}>
          <div className={styles.rating}>
            {[1, 2, 3, 4, 5].map((n) => {
              return (
                <div className={styles.mark} key={n} onClick={(event) => {selectRating(n, event)}}>
                  {n}<span className={styles.indicator}></span>
                </div>
              );
            })}
          </div>

          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>

      {content}
    </div>
  );
}
