import './App.css';
import Display from './compononts/DisplayAll';
// import Main from './view/Main';
// import NewCharacter from './compononts/CreateCharacter';
import OneCharacter from './compononts/OneCharacter';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div  className="App">
        <Routes>
          <Route path='/' element={<Display/>}/>
          <Route path='/character/:id' element={<OneCharacter/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
