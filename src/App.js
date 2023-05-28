
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [btn, setBtn] = useState("Dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type,
    });
    setInterval(() => {
      showAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setBtn("Light Mode");
      document.body.style.backgroundColor = "#1b2b3b";
      showAlert("Dark Mode has been enableed", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      setBtn("Dark Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enableed", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar mode={mode} toggleMode={toggleMode} btn={btn} />
        <Alert alert={alert} />
        <Routes>
          <Route
            exact
            path="/"
            element={<TextForm mode={mode} showalert={showAlert} />}
          ></Route>
          <Route exact path="/about" element={<About mode={mode}/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
