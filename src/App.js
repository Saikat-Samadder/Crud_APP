import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbaar from './components/Navbaar.js'
import Home from './components/Home.js';
import Register from './components/Register.js';
import { Routes,Route } from 'react-router-dom';
import Edit from './components/Edit.js';
import Details from './components/Details.js';
function App() {
  return (
    <>
    <Navbaar/>
       <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/register' Component={Register}/>
          <Route path='/edit/:id' Component={Edit}/>
          <Route path='/view/:id' Component={Details}/> 
       </Routes>
    </>
  );
}

export default App;
