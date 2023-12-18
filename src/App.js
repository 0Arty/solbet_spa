import './index.css'
import style from './App.module.scss'
import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './components/home/Home';
import Faq from './components/faq/Faq';

function App() {
  return (
    <div className = {style.application}>
    <Header />
    
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/faq' element={<Faq />}></Route>
      </Routes>
    </div>
  );
}

export default App;
