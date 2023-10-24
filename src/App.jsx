import { useState } from 'react'
import './App.css'
import Router from './Router'
import { useRoutes } from 'react-router-dom'
import siteContext from './Context/Context'
import './../node_modules/bootstrap/dist/css/bootstrap.css'
import './css/font-awesome.css'
import HeaderNav from './Components/HeaderNav/HeaderNav'
function App() {
  const router = useRoutes(Router)

  return (
    <>
      <siteContext.Provider value={''}>
        <HeaderNav />
        {router}
      </siteContext.Provider>
    </>
  )
}

export default App
