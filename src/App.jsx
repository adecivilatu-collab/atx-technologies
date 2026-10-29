import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import LiveDemoStudio from './components/LiveDemoStudio';
import DigitalProducts from './components/DigitalProducts';
import TrainingAcademy from './components/TrainingAcademy';
import PlatformPortal from './components/PlatformPortal';
import CaseStudies from './components/CaseStudies';
import Articles from './components/Articles';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import FAQ from './components/FAQ';
import Roadmap from './components/Roadmap';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

export default function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-atx-navy-dark text-slate-100 flex flex-col selection:bg-atx-gold selection:text-atx-navy-dark">
      <Navbar onOpenDemoModal={() => setDemoModalOpen(true)} />
      <main className="flex-1">
        <Hero onOpenDemoModal={() => setDemoModalOpen(true)} />
        <Services />
        <LiveDemoStudio 
          isModalOpen={demoModalOpen} 
          onCloseModal={() => setDemoModalOpen(false)} 
        />
        <DigitalProducts />
        <TrainingAcademy />
        <PlatformPortal />
        <CaseStudies />
        <Articles />
        <About />
        <WhyChooseUs />
        <FAQ />
        <Roadmap />
        <ContactForm />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
