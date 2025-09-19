import React from 'react'

export default function Header({route, setRoute}){
  return (
    <header className="header">
      <div className="brand" role="banner">
        <div className="logo">JC</div>
        <div>
          <div style={{fontWeight:800}}>Jarurat Care</div>
          <div className="small">Patient Records Dashboard</div>
        </div>
      </div>
      <nav className="nav" aria-label="Main navigation">
        <a href="#" onClick={(e)=>{e.preventDefault(); setRoute('home')}} style={{color: route==='home' ? '#111827' : undefined}}>Home</a>
        <a href="#" onClick={(e)=>{e.preventDefault(); setRoute('patients')}} style={{color: route==='patients' ? '#111827' : undefined}}>Patients</a>
        <a href="#" onClick={(e)=>{e.preventDefault(); setRoute('about')}} style={{color: route==='about' ? '#111827' : undefined}}>About</a>
      </nav>
    </header>
  )
}
