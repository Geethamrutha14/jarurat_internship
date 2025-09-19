import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Patients from './pages/Patients'
import About from './pages/About'

export default function App(){
  const [route, setRoute] = React.useState('home')
  return (
    <>
      <Header route={route} setRoute={setRoute} />
      <main className="container">
        {route === 'home' && <Home />}
        {route === 'patients' && <Patients />}
        {route === 'about' && <About />}
      </main>
    </>
  )
}
