import "./App.css";
import Home from "./components/Home.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import "antd/dist/antd.css";
import "../node_modules/react-image-gallery/styles/css/image-gallery.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
