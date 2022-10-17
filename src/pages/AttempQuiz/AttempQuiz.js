import { Dropdown } from "../../components/Dropdown/Dropdown";
import { PageTemplate } from "../PageTemplate/PageTemplate";

import styles from "./AttempQuiz.module.css";

export function AttempQuiz() {
  return (
    <PageTemplate>
      <h1>AttempQuiz</h1>
      <p>Lorem impsum dolor sit amet.</p>
      <div className={styles.dropdownContainer}>
        <Dropdown caption="First dropdown">
          <h1>Hello, world!</h1>
        </Dropdown>
        <Dropdown caption="Is this another question?">
          <p>This is the content of the answer</p>
          <p>I can include multiple paragraphs</p>
        </Dropdown>
        <Dropdown caption="Reasons why I hate React">
          <span>I can also include some prestyled images</span>
          <span>There will be some scale levels</span>
        </Dropdown>
      </div>
    </PageTemplate>
  );
}
