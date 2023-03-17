import './App.scss';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Home from './Components/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { ListProvider } from './Context';


function App() {
  
  return (
    <ListProvider>
      <Router>
          <div className="App">
              <Routes>
                <Route path='/Authentication/SignUp' element={<SignUp/>}/>
                <Route path='/Authentication/Login' element={<Login/>}/>
                <Route path='/Authentication/Home' element={<Home/>}/>
              </Routes>
          </div>
      </Router>
    </ListProvider>
  );
}

export default App;
