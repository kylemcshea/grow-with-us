import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import HomePage from "./Components/HomePage";
import PartnershipAccess from "./Components/Partners";
import Giveaways from "./Components/GiveAways";
import IGServices from "./Components/IGServices";
import PRServices from "./Components/PRServices";
import ForBusiness from "./Components/ForBusiness";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Router>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/partnership_access">
          <PartnershipAccess />
        </Route>
        <Route exact path="/giveaways">
          <Giveaways />
        </Route>
        <Route exact path="/instagram_services">
          <IGServices />
        </Route>
        <Route exact path="/pr_services">
          <PRServices />
        </Route>
        <Route exact path="/for_business">
          <ForBusiness />
        </Route>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
