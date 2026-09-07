import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat'
import Hero from '../sections/Hero'
import Problem from '../sections/Problem'
import Solution from '../sections/Solution'
import Portfolio from '../sections/Portfolio'
import BeforeAfter from '../sections/BeforeAfter'
import Benefits from '../sections/Benefits'
import HowItWorks from '../sections/HowItWorks'
import Differentiators from '../sections/Differentiators'
import Testimonials from '../sections/Testimonials'
import Faq from '../sections/Faq'
import Offer from '../sections/Offer'
import ContactForm from '../sections/ContactForm'
import FinalCta from '../sections/FinalCta'

export default function Landing() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Portfolio />
        <BeforeAfter />
        <Benefits />
        <HowItWorks />
        <Differentiators />
        <Testimonials />
        <Faq />
        <Offer />
        <ContactForm />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
