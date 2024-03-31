import Home from './pages/Home'
import FormInicio from './pages/formInicio';
import './App.css';
import { Routes, Route} from "react-router-dom";
    
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FormInicio />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;


//PARA ESTUDIAR