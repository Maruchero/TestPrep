import { forwardRef, useImperativeHandle, useState } from "react";
import styles from "./SideMenu.module.css";

/*
export class SideMenu extends Component {
  sideMenuClasses = [styles.sideMenu, styles.active];

  constructor(props) {
    super(props);

    this.child = React.createRef();
  }

  componentDidMount() {
    window.onresize = () => {
      const idx = this.sideMenuClasses.indexOf(styles.absolute);
      if (window.innerWidth < 600) {
        if (idx === -1) this.sideMenuClasses.push(styles.absolute);
      } else {
        if (idx !== -1) this.sideMenuClasses.splice(idx, 1);
      }
    };
    window.onresize();

    window.addEventListener("ToggleMenu", () => {
      console.log("SideMenu: toggle menu pressed");
    })
  }

  toggleVisibility() {
    const idx = this.sideMenuClasses.indexOf(styles.active);

    if (idx === -1) {
      this.sideMenuClasses.push(styles.active);
    }
    this.sideMenuClasses.splice(idx, 1);
  }

  render() {
    const recent = [
      { title: "Quiz 1", url: "." },
      { title: "Quiz 2", url: "." },
      { title: "Quiz 3", url: "." },
      { title: "Superlong quiz name that can't fit in one line", url: "." },
    ];
    let key = 0;

    return (
      <div className={this.sideMenuClasses.join(" ")}>
        <h3 className={styles.h3}>Recent quizzes</h3>
        {recent.map((item) => {
          return (
            <a
              href={item.url}
              className={styles.item}
              title={item.title}
              key={key++}
            >
              {item.title}
            </a>
          );
        })}
      </div>
    );
  }
}
*/

export const SideMenu = forwardRef((props, ref) => {
  // State Variables
  const [sideMenuClasses, setSideMenuClasses] = useState([
    styles.sideMenu,
    styles.active,
  ]);

  // Toggle Visibility
  const toggleVisibility = () => {
    const idx = sideMenuClasses.indexOf(styles.active);

    if (idx === -1) sideMenuClasses.push(styles.active);
    else sideMenuClasses.splice(idx, 1);

    setSideMenuClasses([...sideMenuClasses]);
  };
  useImperativeHandle(ref, () => ({
    toggleVisibility,
  }));

  // Render Component
  const recent = [
    { title: "Quiz 1", url: "." },
    { title: "Quiz 2", url: "." },
    { title: "Quiz 3", url: "." },
    { title: "Superlong quiz name that can't fit in one line", url: "." },
  ];
  let key = 0;

  return (
    <div className={sideMenuClasses.join(" ")}>
      <h3 className={styles.h3}>Recent quizzes</h3>
      {recent.map((item) => {
        return (
          <a
            href={item.url}
            className={styles.item}
            title={item.title}
            key={key++}
          >
            {item.title}
          </a>
        );
      })}
    </div>
  );
});
