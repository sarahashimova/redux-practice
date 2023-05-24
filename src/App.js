import { Route, Routes, Link } from 'react-router-dom';
import Products from './redux1/pages/Products';
import Favourites from './redux1/pages/Favourites';



function App() {
  return (
    <div className="App">
      <ul>
        <li><Link to="/">Products</Link></li>
        <li><Link to="/favourites">Favourites</Link></li>
      </ul>

      <Routes>
         <Route path='/' element={<Products/>}></Route>
         <Route path='/favourites' element={<Favourites/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
