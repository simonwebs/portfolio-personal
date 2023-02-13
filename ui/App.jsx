import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Main } from './common/general/Main';

export const App = () => (
 
     <>
      <Router>
     <Header />
    <div className="flex flex-col grow bg-gray-100 dark:bg-slate-800">
      <Main />
    </div>
  <Footer />
  </Router>
  </>

);
