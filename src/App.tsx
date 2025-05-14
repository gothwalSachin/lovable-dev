import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProductOverview from './components/ProductOverview'

function App() {

	return (
		<div className={`min-h-dvh bg-[url(./assets/gradient-bg.png)] bg-no-repeat bg-center`}>
			<Header />
			<HeroSection />
			<ProductOverview/>
			<Footer />
		</div>
	)
}

export default App
