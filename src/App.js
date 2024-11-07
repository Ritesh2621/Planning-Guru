import React from 'react'
import {BrowserRouter as Router, Route , Routes} from "react-router-dom"
import './styles/App.scss'
import './styles/contact.scss'
import './styles/header.scss'
import './styles/home.scss'
import './styles/mediaquery.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import ContactUs from './components/ContactUs'
import Gallery from './components/Gallery'



const App = () => {
  return (
    <Router>
     <Header/>
<Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path='/gallery' element={<Gallery/>}/>
  <Route path='/contact' element={<ContactUs/>}/>

</Routes>
<Footer/>
    </Router>
  )
}

export default App