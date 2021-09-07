import "./App.css";
import React, { useState, useEffect } from "react";

import Home from "./components/Home.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import AboutUs from "./components/AboutUs.js";
import Contact from "./components/Contact.js";
import { Spin } from "antd";
import "antd/dist/antd.css";
import "../node_modules/react-image-gallery/styles/css/image-gallery.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";

function App() {
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    setIsLoaded(false);
  }, []);

  return (
    <BrowserRouter>
      {isLoaded ? (
        <Spin
          size={"large"}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: " 100vh",
          }}
        />
      ) : (
        <div className="App">
          <Header />
          <Switch>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/aboutUs">
              <AboutUs />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
