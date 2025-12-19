import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ITServices from './pages/ITServices';
import LawServices from './pages/LawServices';
import About from './pages/About';
import Contact from './pages/Contact';
import PublishDocs from './pages/Publish';
import TopBar from './components/TopBar';

type Page = 'home' | 'it-services' | 'law-services' | 'about' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'it-services':
        return <ITServices onNavigate={setCurrentPage} />;
      case 'law-services':
        return <LawServices onNavigate={setCurrentPage} />;
      case 'about':
        return <About onNavigate={setCurrentPage} />;
      case 'contact':
        return <Contact onNavigate={setCurrentPage} />;
        case 'publish':
        return <PublishDocs onNavigate={setCurrentPage} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <TopBar />
        <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
        {renderPage()}
        <Footer onNavigate={setCurrentPage} />
      </div>
    </ThemeProvider>
  );
}

export default App;
