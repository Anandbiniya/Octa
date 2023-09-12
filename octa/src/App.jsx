import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Adminstrator from './components/Adminstrator'
import LogIn from './components/LogIn'
import Dashboard from './components/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Adminstrator/>
    
      </div>
      <Dashboard/>
      {/* <div>
        <LogIn/>
      </div> */}
      
     
    
    </>
  )
}

export default App
