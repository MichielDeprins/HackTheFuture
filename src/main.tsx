import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import FetchAllAnimals from './AnimalAPI.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
    <FetchAllAnimals />
  </React.StrictMode>,
)
