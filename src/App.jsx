import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Movies from './components/movies'

function App() {
  const [count, setCount] = useState(0)

  return <table className="table">
    <thead>
      <tr>
        <th>Title</th>
        <th>Genre</th>
        <th>Stock</th>
        <th>Rate</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Chennai Express</td>
        <td>Comedy, Romance</td>
        <td>Limited</td>
        <td>4</td>
      </tr>
    </tbody>
    <tbody>
      <tr>
        <td>Chennai Express</td>
        <td>Comedy, Romance</td>
        <td>Limited</td>
        <td>4</td>
      </tr>
    </tbody>
  </table>
}

export default App
