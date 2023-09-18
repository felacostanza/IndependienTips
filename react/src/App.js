import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage';
import PostsGrid from './Components/PostsGrid/PostsGrid';
import CrearPost from './Components/CrearPost/CrearPost'
import Footer from './Components/Footer/Footer';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import { AuthContextProvider } from './Context/AuthContext';

function App() {
  return (
      <BrowserRouter>
      <AuthContextProvider>
        <Navbar/>
          <Routes>
            <Route exact path='/' element={<HomePage/>}/>
            <Route exact path='/articulos' element={<PostsGrid/>}/>
            <Route exact path='/crear-blog' element={<CrearPost/>}/>
            <Route exact path='/register' element={<Register/>}/>
            <Route exact path='/login' element={<Login/>}/>
          </Routes>
          <Footer/>
        </AuthContextProvider>
      </BrowserRouter>
  );
}

export default App;
