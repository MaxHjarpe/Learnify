import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginPage from "./pages/Login";
import DetailPage from "./pages/DetailPage";
import Homepage from "./pages/Homepage";
import Navigation from "./components/Navigation";
import "antd/dist/antd.css";
import Category from "./components/Categories";

function App() {
  return (
    <>
    <Navigation/>
    <Route exact path="/" component={Category}/>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact  path="/login" component={LoginPage} />
        <Route exact path="/detail" component={DetailPage} />
      </Switch>
    </>
  );
}

export default App;
