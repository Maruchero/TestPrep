import styles from "./MainPage.module.css";

export function MainPage() {
  return (
    <>
      <h1 className={styles.h1}>Main page</h1>
      <a href="./edit-quiz/">edit-quiz</a>
      <br />
      <a href="./attemp-quiz/">attemp-quiz</a>
    </>
  );
}
