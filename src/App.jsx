import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Service from "./components/Service/Service"
import { servicesData, storiesData } from "./data/sections"
import Review from "./components/Review/Review"
import From from "./components/Form/From"
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className="App">
  
    <Navbar />
    <Hero />
    <About/>
    <Service {...servicesData} />
    <Service {...storiesData} />
    <Review/>
    <From/>
    <Footer />



    </div>
  )
}

export default App