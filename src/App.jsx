
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard'
import { useState } from 'react'

function App() {

  const loadCoffees = useLoaderData()

  const [coffees, setCoffees] = useState(loadCoffees)

  return (
    <div className='max-w-6xl mx-auto'>
      <h1 className='text-5xl font-bold text-center my-5'>All Coffee Items: {coffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-8'>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
