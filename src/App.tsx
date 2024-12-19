import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FeaturesPage from './pages/featurespage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/contactpage';

// Home page components
import Hero from './components/Hero';
import Features from './components/Features';
import ComingSoon from './components/ComingSoon';
import Contact from './components/Contact';

// HomePage component
function HomePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero />
            <Features />
            <ComingSoon />
            <Contact />
        </div>
    );
}

// Main App component
function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/featurespage" element={<FeaturesPage />} />
                        <Route path="/AboutPage" element={<AboutPage />} />
                        <Route path="/Contact" element={<ContactPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;