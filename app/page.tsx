'use client'
import ChooseUsSection from './components/ChooseUsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/NavBar'
import ServicesSection from './components/ServicesSection'

const Home = () => {
  return (
    <main className="main-container">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ChooseUsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

export default Home
