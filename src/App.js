// React
import { Routes, Route, BrowserRouter } from "react-router-dom";

// Pages and components
import { AttempQuiz } from "./pages/AttempQuiz/AttempQuiz";
import { EditQuiz } from "./pages/EditQuiz/EditQuiz";
import { MainPage } from "./pages/MainPage/MainPage";

// Firebase
/*
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

const addData = () => {
  addDoc(collectionRef, {
    title: "Basi di dati",
    version: 0
  }).then(() => {
    console.log("data added")
  }).catch((e) => {
    console.log("Something went wrong: " + e)
  })
}

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
*/

// App
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/attemp-quiz/" element={<AttempQuiz />} />
        <Route path="/edit-quiz/" element={<EditQuiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
