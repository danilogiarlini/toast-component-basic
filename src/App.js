import "./App.css";
import { useState } from "react";
import Toast from "./Toast";

function App() {
  const [list, setList] = useState([])
  console.log(list)

  let toastProperties = null

  const toastHandler = (type) => {
    switch (type) {
      case "success":
        toastProperties = {
          id: 1,
          title: "Success",
          description: "This is a success toast",
          backgroundColor: "#5cb85c",
        };
        break;
      case "danger":
        toastProperties = {
          id: 2,
          title: "Danger",
          description: "This is a danger toast!",
          backgroundColor: "#d9534f",
        };
        break;
      case "info":
        toastProperties = {
          id: 3,
          title: "Info",
          description: "This is an Info toast!",
          backgroundColor: "#5bc0de",
        };
        break;
      case "warning":
        toastProperties = {
          id: 4,
          title: "Warning",
          description: "This is a Warning toast!",
          backgroundColor: "#f0ad4e",
        };
        break;
      default:
        toastProperties = [];
    }

    setList([toastProperties]);
  };

  const closeToastHandler = () => {
    setList([])
  }

  return (
    <div className="root">
      <h1>React Toast Component</h1>
      <div>
        <button onClick={() => toastHandler('success')}>Success</button>
        <button onClick={() => toastHandler('danger')}>Danger</button>
        <button onClick={() => toastHandler('info')}>Info</button>
        <button onClick={() => toastHandler('warning')}>Warning</button>
      </div>
      <Toast toastlist={list} position="buttom-right" setList={setList} onClose={closeToastHandler} />
    </div>
  );
}

export default App;
