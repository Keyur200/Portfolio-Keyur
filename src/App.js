import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BlogApp from './Components/BlogApp';
import ShoppingCart from './Components/ShoppingCart';
import Projects from './Pages/Projects';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="App w-[100%] flex sm:flex-col md:flex-col justify-center md:h-screen bg-black py-10 ">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/:subpages?' element={<Sidebar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
