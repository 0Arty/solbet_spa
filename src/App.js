import './index.css'
import style from './App.module.scss'
import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './pages/Home'
import Games from './pages/Games'
import FAQ from './pages/FAQ'
import { RouteNames } from './constants/routes'

function App() {
  return (
    <div className = {style.application}>
    <Header />
    
      <Routes>
        <Route path={RouteNames.init} element={<Home />} />
        <Route path={RouteNames.games} element={<Games />} />
        <Route path={RouteNames.faq} element={<FAQ />} />
      </Routes>
    </div>
  );
}

export default App;
