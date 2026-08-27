import './App.css'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="site-shell">
      <div className="glass-orb glass-orb-one" aria-hidden="true" />
      <div className="glass-orb glass-orb-two" aria-hidden="true" />
      <div className="glass-orb glass-orb-three" aria-hidden="true" />
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
