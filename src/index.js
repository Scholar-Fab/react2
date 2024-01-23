import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ListeFormateurs from './composants/ListeFormateurs';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Link }  from 'react-router-dom';
import Home from './composants/Home';
import About from './composants/About';
import InfosFormateurs from './composants/InfosFormateurs';
import DetailFormateur from './composants/DetailFormateur';
import { FormateursContexteProvider } from './contexte/FormateursContexte';
import CreateFormateur from './composants/CreateFormateur';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <FormateursContexteProvider>  
    <BrowserRouter>
    <nav style={{ margin: 10}}>
      <Link to="/" style={{ padding: 5}}>Accueil</Link>
      <Link to="/formateurs" style={{ padding: 5}}>Formateurs</Link>
      <Link to="/formateurs/create" style={{ padding: 5}}>Ajouter un formateur</Link>
      <Link to="/about" style={{ padding: 5}}>A propos</Link>
    </nav>
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/formateurs" element={<InfosFormateurs />}>
          <Route path="" element={<ListeFormateurs />} />
          <Route path=":slug" element={<DetailFormateur />} />
          <Route path="create" element={<CreateFormateur />} />
        </Route>
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    </FormateursContexteProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
