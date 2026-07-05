import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {

  return (
    <>
      <div class="card" style="width: 18rem;">
  <img class="card-img-top" src={product.image} alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">{product.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${product.price.toFixed(2)}</h6>
    <p class="card-text">{
      product.description
    }</p>
  </div>
</div>
 <h2>Hello, There!</h2>
    </>
  )
}

export default App
