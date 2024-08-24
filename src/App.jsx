import React from 'react'
import { Link, Route,Routes } from 'react-router-dom'

function App() {
  return (
    <div>
<Link to="/home">Home</Link>
<Link to="/products">Products</Link>
<Link to="/dashboard">Dashbaord</Link>

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/dashboard' element={<Dashboard />} />

        <Route />

      </Routes>
    </div>
  )
}

export default App