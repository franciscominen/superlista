import React from 'react';
import './App.scss';
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/layout/Home';
import MyListContainer from './components/MyListComponent/MyListContainer';
import Default from './components/layout/Default';
import StoreProvider from './context/StoreProvider';
import ProductsContainer from './components/ProductsComponent/ProductsContainer';
import 'react-slideshow-image/dist/styles.css';

function App() {
  
  return (
    <>
    <Router>

      <StoreProvider> 
        
        <Navbar />

        <Switch>
          
          <Route exact component={ProductsContainer} path="/productos/:categoria" />
          <Route exact component={Home} path="/" />
          <Route exact component={ProductsContainer} path="/productos" />
          <Route exact component={MyListContainer} path="/mi-lista" />
          <Route exact component={Default} path="/on-work" />

        </Switch>

      </StoreProvider> 

    </Router>  
    
    </>
  );
}

export default App;