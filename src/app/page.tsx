'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'


export default function Home() {

  const [cowCount, setCowCount] = useState(205)
    const [cowCountInput, setCowCountInput] = useState(cowCount.toString())
  const [foodTypeIndex, setFoodTypeIndex] = useState(0)

  const foodTypes = [
	  { name: 'Corn', icon: '🌽' , coef: 0.5},
	  { name: 'Grass', icon: '🌱', coef:  0.4},
	  { name: 'Hay', icon: '🌾', coef: 0.3 }
  ]
  
  const calculateMethane = () => {
    return (cowCount * foodTypes[foodTypeIndex].coef)
  }

  const nextFoodType = () => {
    setFoodTypeIndex((prev) => (prev + 1) % foodTypes.length)
  }

  const prevFoodType = () => {
    setFoodTypeIndex((prev) => (prev - 1 + foodTypes.length) % foodTypes.length)
  }

  const handleCowCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setCowCountInput(value)
    const numValue = parseInt(value, 10)
    if (!isNaN(numValue)) {
      setCowCount(numValue)
    }
  }

  return (
 <div className="min-h-screen bg-[#98FB98] flex items-center justify-center">
      <div className="text-center text-white p-8">
        <h1 className="text-5xl font-bold mb-12">Cowculator</h1>
        
       
        <div className="flex justify-center mb-8">
          <div className="text-center">
            <div className="text-6xl mb-4">🐮</div>
            <div className="text-xl flex items-center justify-center font-bold">
              Cow Count: 
              <input
                type="text"
                value={cowCountInput}
                onChange={handleCowCountChange}
                className="ml-2 w-20 bg-transparent border-b border-white text-center text-xl"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mb-12">
          <button
            onClick={prevFoodType}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="text-center">
            <div className="text-4xl mb-2">{foodTypes[foodTypeIndex].icon}</div>
			  <div className="text-xl font-bold">Food Type: {foodTypes[foodTypeIndex].name}</div>
          </div>

          <button
            onClick={nextFoodType}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="text-xl font-bold">
          Methane Produced = {calculateMethane().toLocaleString()}³* (cubic meters³ / day)<br/>
		  *This number will be tuned based on further research.
        </div>
      </div>

	<div>
		<h1 className="text-xl">Feedback Form: </h1>
	</div>
    </div>
  );
}
