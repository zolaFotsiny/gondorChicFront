import "./App.css";
import {Routes, Route } from "react-router-dom";
import PageAcceuil from "./vue/PageAcceuil";
import PageAcceuilClient from "./vue/PageAcceuilClient";
function App() {
  
  return (
      <Routes>
        <Route path="/" Component={PageAcceuil}></Route>
        <Route path="/pageAcceuilClient" Component={PageAcceuilClient}></Route>
      </Routes>

  );
}

export default App;
