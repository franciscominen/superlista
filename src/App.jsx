import './App.scss';
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './layout/Home';
import ProductCardsContainer from './components/ProductCardComponent/ProductCardsContainer'
import MyListContainer from './components/MyListComponent/MyListContainer';
import { ListProvider } from './utils/ListContext';

function App() {
  return (
    <>
      <Router>

        <ListProvider> 
          
          <Navbar />

          <Switch>
            
            <Route exact component={ProductCardsContainer} path="/productos/:categoria" />
            <Route exact component={Home} path="/" />
            <Route exact component={ProductCardsContainer} path="/productos" />
            <Route exact component={MyListContainer} path="/mi-lista" />

          </Switch>

        </ListProvider> 

      </Router>      
    </>
  );
}

export default App;