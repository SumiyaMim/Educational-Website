import './App.css';
import Header from './components/common/header/Header';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './components/home/Home';
import About from './components/about/About';
import Courses from './components/courses/Courses';
import Team from './components/team/Team';
import Price from './components/pricing/Price';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Footer from './components/common/footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
           <Route path="/"element={<Home/>}></Route>
           <Route path="/about"element={<About/>}></Route>
           <Route path="/courses"element={<Courses/>}></Route>
           <Route path="/team"element={<Team/>}></Route>
           <Route path="/pricing"element={<Price/>}></Route>
           <Route path="/blog"element={<Blog/>}></Route>
           <Route path="/contact"element={<Contact/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
