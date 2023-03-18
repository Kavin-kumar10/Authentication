import './App.scss';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Home from './Components/Home';
import { HashRouter as Router,Routes,Route } from 'react-router-dom';
import { ListProvider } from './Context';
import { useState } from 'react';


function App() {
  const [Authorized,setAuthorized] = useState(false);
  
  return (
    <ListProvider>
      <Router>
          <div className="App">
              <Routes>
                <Route path='/SignUp' element={<SignUp/>}/>
                <Route exact path='/Login' element={<Login setAuthorized={setAuthorized}/>}/>
                <Route exact path='/Home' element={<Home Authorized = {Authorized} />}/>
                <Route path='*' element={<Login setAuthorized={setAuthorized}/>}/>
              </Routes>
          </div>
      </Router>
    </ListProvider>
  );
}

export default App;
