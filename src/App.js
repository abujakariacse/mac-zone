import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Review from './Components/Review/Review';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/reviews' element={<Review></Review>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/blogs' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
