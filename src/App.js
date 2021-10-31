import "./App.css";
import Login from "./components/Auth/Login/Login";
import SignUp from "./components/Auth/SignUp/SignUp";
import SignUp2 from "./components/Auth/SignUp2/SignUp2";
import Home from "./pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="Just_Like_Client">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/signup2">
          <SignUp2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
