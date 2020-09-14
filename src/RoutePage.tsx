import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "components/Header/Header";
import MyLinks from "components/MyLinks/MyLinks";
import Home from "components/Home/Home";

const RoutePage: React.FC = () => {
  return (
    <Router>
      <Route path="*" component={Header} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={MyLinks} />
      </Switch>
    </Router>
  );
};

export default RoutePage;
