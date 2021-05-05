import './App.scss';
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './layout/Home';
import ProductsContainer from './containers/ProductsContainer'
import MyListContainer from './containers/MyListContainer';
import { ListProvider } from './utils/ListContext';

function App() {
  return (
    <>
      <Router>

        <ListProvider> 
          
          <Navbar/>

          <Switch>

            <Route exact component={Home} path="/" />
            <Route exact component={ProductsContainer} path="/productos" />
            <Route exact component={ProductsContainer} path="/productos/:categoriaId" />
            <Route exact component={MyListContainer} path="/mi-lista" />

          </Switch>

        </ListProvider> 

      </Router>      
    </>
  );
}

export default App;