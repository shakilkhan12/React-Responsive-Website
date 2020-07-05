import React, { useContext } from 'react';
import "./assets/css/app.css"
import Header from "./components/Header"
import Nav from './components/Nav';
import Toggle from "./components/toggle"
import About from "./components/About"
import Services from "./components/Services"
import Prices from "./components/Prices"
import Features from "./components/features"
import Overly from "./components/overly"
import Deffent from "./components/defferent"
import GlobalContextProvider from "./Context/globalContext"
function App() {

  return (
    <GlobalContextProvider>
      <Toggle />
      <Header />
      <Nav />
      <About />
      <Services />
      <Prices />
      <Deffent />
      <Features />
      <Overly />
    </GlobalContextProvider>
  );
}

export default App;
