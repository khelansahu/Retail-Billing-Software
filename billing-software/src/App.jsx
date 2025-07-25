import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Menubar from './components/Menubar/Menubar'
import Dashboard from './pages/Dashboard/Dashboard'
import Explore from './pages/Explore/Explore'
import ManageItems from './pages/ManageItems/ManageItems'
import ManageCategory from './pages/ManageCategory/ManageCategory'
import ManageUsers from './pages/ManageUsers/ManageUsers'
import Inventry from './pages/Inventry/Inventry'
import { Toaster } from './../node_modules/react-hot-toast/src/components/toaster';
import "./App.css"

const App = () => {
  return (
    <div>
      <Menubar/>
      <Toaster/>
      <Routes>
       <Route path='/dashboard' element={<Dashboard/>} />
       <Route path='/explore' element={<Explore/>} />
       <Route path='/manageitems' element={<ManageItems/>} />
       <Route path='/managecategory' element={<ManageCategory/>} />
       {/* <Route path='/manageuser' element={<ManageUsers/>} /> */}
       <Route path='/inventry' element={<Inventry/>} />
       <Route path='/' element={<Dashboard/>} />
      </Routes>
    </div>
  )
}

export default App