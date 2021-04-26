import './App.scss';
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './layout/Home';
import ProductsContainer from './containers/ProductsContainer'
import MyListContainer from './containers/MyListContainer';

function App() {
  return (
    <>
      <Router>

        <Navbar/>

        <Switch>

          <Route exact component={Home} path="/" />
          <Route exact component={ProductsContainer} path="/productos" />
          <Route exact component={MyListContainer} path="/mi-lista" />

        </Switch>

      </Router>      
    </>
  );
}

export default App;