import { Routes, Route } from 'react-router-dom';
import ticher from './assets/ticher.jpg'
import './App.css'
import Home from "./pages/Home.jsx";
import Advice from "./pages/Adviсe.jsx";
import Feedback from "./pages/Feedback.jsx";
import Literature from "./pages/Literature.jsx";

import Header from './components/Header.jsx';
function App() {

  return (
    <div className='app'>
      <Header />
      <main className='main'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/advice" element={<Advice />} />
          <Route path="/literature" element={<Literature />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
