import "./App.css";
import Login from "./components/Auth/Login/Login";
import SignUp from "./components/Auth/SignUp/SignUp";
import SignUp2 from "./components/Auth/SignUp2/SignUp2";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Switch>
      <Route exact path="/">
        {!isLoggedIn && <Login />}
        {isLoggedIn && <Home />}
      </Route>
      <Route path="/login">
        {!isLoggedIn && <Login />}
        {isLoggedIn && <Home />}
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/signup2">
        <SignUp2 />
      </Route>
      <Route path="/">
        <NotFoundPage></NotFoundPage>
      </Route>
    </Switch>
  );
}

export default App;
