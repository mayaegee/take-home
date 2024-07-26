import { useEffect, useState } from 'react'
import { Card } from './components/Card'
import './App.css'


function App() {
  const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://api.thecatapi.com/v1/images/search?limit=10")
            .then(res => res.json())
            .then(data => setData(data))
      }, [])

      function remove(id) {
        setData(prevData => prevData.filter((item) => item.id !== id))
      }

  return (
    <div className="container">
      {data.map((item) => {
        return (
          <Card 
            key={item.id}
            url={item.url}
            onClick={() => remove(item.id)}
            buttonText={'Delete'}
          />
        )
      })}
    </div>
  )
}

export default App