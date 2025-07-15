import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Navbar} from './components/Navbar'
import {Footer} from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Artworks from './pages/Artworks'
import Categories from './pages/Categories'
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';


function App() {
    return (
        <BrowserRouter>
            <div className="layout-wrapper">
                <Navbar/>
                <main className="container">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/artworks" element={<Artworks/>}/>
                        <Route path="/categories" element={<Categories/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/aboutus" element={<AboutUs/>}/>
                    </Routes>
                </main>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default App
