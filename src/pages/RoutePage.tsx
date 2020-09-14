import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "components/Header/Header";
import MyLinks from "pages/MyLinks/MyLinks";
import Home from "pages/Home/Home";
import Footer from "components/Footer/Footer";
import { OuterContainer, InnerContainer } from "./style";
import { AuthService } from "linkbookFirebase";

const RoutePage: React.FC = () => {
  const [init, setInit] = useState(false);
  const [user, setUser] = useState<object | null>(null);

  const changeUser = (newUser: any): void => setUser(newUser);

  useEffect(() => {
    AuthService.onAuthStateChanged((currentUser) => {
      if (currentUser) changeUser(currentUser);
      else changeUser(null);
      setInit(true);
    });
  }, []);

  return (
    <Router>
      <OuterContainer>
        <InnerContainer>
          <Route path="*" component={Header} />
          <Switch>
            <Route exact path="/">
              {init && !user && <Home changeUser={changeUser} />}
              {init && user && <MyLinks user={user} />}
            </Route>
          </Switch>
          <Route path="*" component={Footer} />
        </InnerContainer>
      </OuterContainer>
    </Router>
  );
};

export default RoutePage;
