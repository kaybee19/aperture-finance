import React from "react";
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import GlobalStyle from './/styles/GlobalStyle'

// Context wrapper for passing language and color props
import { AppProvider } from './context/Context';

// Comps
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <GlobalStyle />
        <Navbar />
        <div id="tsparticles"></div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
