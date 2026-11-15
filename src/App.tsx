import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedReptiles from './components/FeaturedReptiles'
import DidYouKnow from './components/DidYouKnow'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedReptiles />
        <DidYouKnow />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
