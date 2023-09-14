import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage';
import PostsGrid from './Components/PostsGrid/PostsGrid';
import CrearPost from './Components/CrearPost/CrearPost'
import Footer from './Components/Footer/Footer';

function App() {
  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route exact path='/articulos' element={<PostsGrid/>}/>
          <Route exact path='/crear-blog' element={<CrearPost/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
