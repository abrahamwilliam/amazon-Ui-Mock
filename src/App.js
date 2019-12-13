import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Styles/Styles.css';
import ProductContainer from './Container/ProductContainer';
import Main from './Container/Main';
import NewerHomePage from './Components/NewerHomePage';
import {BrowserRouter} from 'react-router-dom';


function App() {



  return (
    <React.Fragment>     
   
    <BrowserRouter>
    
    <NewerHomePage>
    
    </NewerHomePage>
    </BrowserRouter>
    </React.Fragment>
   
  );
}





export default App;
