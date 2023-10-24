import React from 'react'
import './App.css'
import './Mobile.css'
import UnitedSection from './Main/UnitedSection'
import MarketPlace from './Main/MarketPlace'
import Shoppify from './Main/Shoppify'
import Accordion from './components/Accordion'
import PerfectVideos from './Main/PerfectVideos'
import BeforeFooter from './Main/BeforeFooter'
import Footer from './Main/Footer'
import Hamburger from './components/Hamburger'
const App = () => {
  return (
    <div>
      <Hamburger />
     <UnitedSection />
     <MarketPlace />
     <Shoppify />
     <Accordion />
     <PerfectVideos />
     <BeforeFooter />
     <Footer />
    </div>
  )
}

export default App