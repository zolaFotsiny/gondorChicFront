import "./App.css";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import PageAcceuil from "./vue/PageAcceuil";
import PageAcceuilClient from "./vue/PageAcceuilClient";
function App() {


  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" Component={PageAcceuil}></Route>
    <Route path="pageAcceuilClient" Component={PageAcceuilClient}></Route>
  </Routes>
  </BrowserRouter>
 
  );
}

export default App;
