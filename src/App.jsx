import { useState } from 'react'
import './App.css'
import Router from './Router'
import {useRoutes} from 'react-router-dom'
import siteContext from './Context/Context'
import './../node_modules/bootstrap/dist/css/bootstrap.css'
function App() {
 const router = useRoutes(Router)

  return (
    <>
    <siteContext.Provider value={''}>
{router}
    </siteContext.Provider>
    </>
  )
}

export default App
