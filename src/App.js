import './App.css';
import AllMails from './components/AllMails';
import Filter from './components/Filter';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Filter/>
      <Routes>
        <Route path='/' element={<AllMails/>}/>
      </Routes>
    </div>
  );
}

export default App;
