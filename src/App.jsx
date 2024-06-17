import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
    
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element="Menu"/> 
          <Route path="/formacionacademica" element={<Formacionacademica/>}/> 
          
        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
