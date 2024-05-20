
import './App.css'
import Bmi from './components/BMI/Bmi'
import Classes from './components/Classes/Classes'
import ContactUs from './components/ContactUs/ContactUs'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Review from './components/Review/Review'
import Trainer from './components/Trainer/Trainer'

function App() {
  

  return (
    <>
      <Header />
      <Hero />
      <Classes />
      <Bmi />
      <Trainer />
      <Review />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
