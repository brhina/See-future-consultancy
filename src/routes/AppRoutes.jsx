import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion as Motion, useReducedMotion } from 'framer-motion'
import { pageVariants } from '../utils/motionPresets'

import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import ThematicAreas from '../pages/ThematicAreas';
import Contact from '../pages/Contact';
import TermsOfService from '../pages/TermsOfService';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import HelpCenter from '../pages/HelpCenter';
import LatestNews from '../sections/homes/LatestNews';

function AppRoutes() {
  const location = useLocation()
  const reduceMotion = useReducedMotion()

  return (
    <AnimatePresence mode="wait">
      <Motion.main
        key={location.pathname}
        className="min-h-screen w-full"
        variants={reduceMotion ? undefined : pageVariants}
        initial={reduceMotion ? false : 'initial'}
        animate={reduceMotion ? undefined : 'animate'}
        exit={reduceMotion ? undefined : 'exit'}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/latest-news" element={<LatestNews />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/thematic-areas" element={<ThematicAreas />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/help" element={<HelpCenter />} />
        </Routes>
      </Motion.main>
    </AnimatePresence>
  )
}

export default AppRoutes
