import './App.css';
import NavBar from './navBar/NavBar.js'
import Pelicula from './peliculas/Peliculas.js'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/peliculas' element={<Pelicula />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;
