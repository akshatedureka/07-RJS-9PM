import './App.css';
import Login from './components/Login';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Error from "./components/Error";
function App() {
  return (
    <div className="App">
       
            <Routes>
                <Route path='/' element={<Login />} />
                
                <Route path='/error' element={<Error /> }/>

                <Route path='/dashboard' element={<Dashboard />} />
            </Routes>
      
    </div>
  );
}

export default App;
