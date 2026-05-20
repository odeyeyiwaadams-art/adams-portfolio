import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Results from './sections/Results'
import Projects from './sections/Projects'
import TycoonVision from './sections/TycoonVision'
import Industries from './sections/Industries'
import Certifications from './sections/Certifications'
import About from './sections/About'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-navy">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Results />
        <Projects />
        <TycoonVision />
        <Industries />
        <Certifications />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
