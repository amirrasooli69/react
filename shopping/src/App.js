import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './component/navbar';
import { HomePage , Detail } from './pages';
import { BrowserRouter , Switch , Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <div className="container">
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route path="/detail">
          <Detail/>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
