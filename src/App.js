import logo from "./logo.svg";
import "./App.css";

// Pages and components
import { AttempQuiz } from "./pages/AttempQuiz/AttempQuiz";

// Firebase
import { app, database } from "./firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";

const collectionRef = collection(database, "quizzes");

/*
addDoc(collectionRef, {
  title: "Basi di dati",
  version: 0
}).then(() => {
  console.log("data added")
}).catch((e) => {
  console.log("Something went wrong: " + e)
})
*/

const getData = () => {
  onSnapshot(collectionRef, (data) => {
    console.log(
      data.docs.map((item) => {
        return { id: item.id, ...item.data() };
      })
    );
  });
};
getData();

const updateData = () => {
  const docToUpdate = doc(database, "quizzes", "oHAqUf58QFALTaobxVDm");
  updateDoc(docToUpdate, {
    version: 1,
  }).then(() => {
    console.log("Doc updated");
  });
};

// App
function App() {
  return (
    <>
      <AttempQuiz />
    </>
  );
}

export default App;
