import React from 'react'
import { Route, Routes , Link, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Dashboard from './pages/Dashboard'

function App() {
  let navigate = useNavigate();

  function handleCLick1(){
    navigate('/dashboard')
  }
  function handleCLick2(){
    navigate('/home')
  }
  function handleCLick3(){
    navigate('/product')
  }
  return (
    <div>

      {/* <a href="/dashboard">dashboard</a>
      <a href="/products">products</a>
      <a href="/home">home</a> */}

      {/* <Link to="/home">HOME</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/products">products</Link> */}

      <button onClick={handleCLick1}>Dashboard</button>
      <button onClick={handleCLick2}>Home</button>
      <button onClick={handleCLick2}>Product</button>


    <Routes>
      <Route path='/home' element={ <Home /> } />
      <Route path='/product' element={ <Product />} />
      <Route path='/dashboard' element={ <Dashboard /> } />
    </Routes>

    </div>
  )
}

export default App