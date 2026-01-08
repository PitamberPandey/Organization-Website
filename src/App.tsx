import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TopBar from './components/TopBar';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import ITServices from './pages/ITServices';
import LawServices from './pages/LawServices';
import About from './pages/About';
import Contact from './pages/Contact';
import PublishLayout from './pages/Publish';
import CompanyRegistration from './pages/CompanyRegistration';
import CourtMarriage from './pages/CourtMarriage';
import DivorceProcess from './pages/DivorceProcess';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <TopBar />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/it-services" element={<ITServices />} />
          <Route path="/law-services" element={<LawServices />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Nested Publish Routes */}
          <Route path="/publish" element={<PublishLayout />}>
            <Route index element={<Navigate to="company-registration" replace />} />
            <Route path="company-registration" element={<CompanyRegistration />} />
            <Route path="court-marriage" element={<CourtMarriage />} />
            <Route path="divorce-process" element={<DivorceProcess />} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Routes>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
