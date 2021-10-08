import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './component/navbar';
import { HomePage , DetailPage } from './pages';
import { BrowserRouter , Switch , Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/detail/:id" component={DetailPage}/>
        </Switch>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
