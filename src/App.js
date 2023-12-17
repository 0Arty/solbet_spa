import style from './App.module.scss'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'

function App() {
  return (
    <div className = {style.application}>
    <Header />
      <Routes>
        <Route path='/' element={<div></div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
