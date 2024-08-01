import React from 'react'
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import Features from './components/Features'
import HeroSection from './components/HeroSection'
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction'
// import Blog from './components/Blog'
import HowItWorks from './components/HowItWorks'
import FAQ from './components/FAQ'
import UseCases from './components/UseCases'
import CTABar from './components/CTABar'


const App = () => {
	return (
		<div>
			<AppHeader />
			<HeroSection />
			<HowItWorks />
			<UseCases />
			<Features />
			<CTABar />
			<Testimonials />
			<FAQ />
			<CallToAction />
			{/* <Blog /> */}
			<AppFooter />
		</div>
	)
}

export default App
