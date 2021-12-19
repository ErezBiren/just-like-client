
import "./App.css";
import Login from "./components/Auth/Login/Login";
import SignUp from "./components/Auth/SignUp/SignUp";
import SignUpUserType from "./components/Auth/SignUpUserType/SignUpUserType";
import Home from "./pages/Home";
// import NotFoundPage from "./pages/NotFoundPage";
import { useSelector } from "react-redux";
import { HashRouter, Route, Routes } from "react-router-dom";
import { RootState } from "./store/store";
// import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  return (
    <HashRouter>
      <Routes>
        <Route path="/*" element={isLoggedIn ? <Home /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/SignUpUserType" element={<SignUpUserType />} />
        {/* <Route path="/" element={<NotFoundPage />} /> */}
      </Routes>
    </HashRouter>
  );
}

export default App;
