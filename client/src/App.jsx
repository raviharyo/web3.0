import { useState } from 'react'
import {Footer, Loader, Services, Navbar,Transactions,Welcome} from './components/index.js'

const App = ()=>{

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
      <Navbar/>
      <Welcome/>
      </div>
      <Services/>
      <Transactions/>
      <Footer/>
    </div>
  )
} 


export default App
