import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './src/about'
import Contact from './src/contact'
import Project from './src/project'
import Layout from './components/Layout'
import References from './src/references'
import Services from './src/services'

const MainRouter = () => {
            // The Layout component is included here so that it is displayed on all pages
            // The Routes component defines the different routes for the application and which component to render for each route
    return (<div>
        <Layout />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project" element={<Project />} />
            <Route path="/references" element={<References />} />
            <Route path="/services" element={<Services />} />
        </Routes>
    </div>)
}
export default MainRouter