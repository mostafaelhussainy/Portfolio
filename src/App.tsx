import './App.css';
import About from './components/About';
import ContactMe from './components/ContactMe';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
    return (
        <div
            className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 scroll-smoth
        scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-gray-800"
        >
            <Header />
            <Hero />
            <About />
            <Projects />
            <Skills />
            <ContactMe />
        </div>
    );
}

export default App;
