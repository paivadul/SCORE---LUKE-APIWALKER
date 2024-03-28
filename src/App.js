import Home from './pages/Home'
import './App.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import RptaWapi from './components/characterType'

function App() {
  return (
    <div className="App">
      <Home />
    </div>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;