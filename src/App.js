import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <Routes>
      <Route exact path="/" Component={Home} />
      <Route exact path="/login" Component={Login} />
      <Route exact path="/register" Component={Register} />
      <Route path="/not-found" Component={NotFound} />
    </Routes>
  );
}

export default App;
