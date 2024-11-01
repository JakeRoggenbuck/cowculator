'use client'

import Image from "next/image";

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'


const COW = "🐄";

export default function Home() {

  const [cowCount, setCowCount] = useState(205)
    const [cowCountInput, setCowCountInput] = useState(cowCount.toString())
  const [foodTypeIndex, setFoodTypeIndex] = useState(0)

  const foodTypes = [
	  { name: 'Corn', icon: '🌽' , coef: 0.8},
	  { name: 'Grass', icon: '🌱', coef:  0.9},
	  { name: 'Hay', icon: '🌾', coef: 0.7 }
  ]
  
  const calculateMethane = () => {
    return (cowCount * 1000 * foodTypes[foodTypeIndex].coef) ** 2
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
            <div className="text-xl flex items-center justify-center">
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
			  <div className="text-xl">Food Type: {foodTypes[foodTypeIndex].name}</div>
          </div>

          <button
            onClick={nextFoodType}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="text-xl">
          Methane Produced = {calculateMethane().toLocaleString()}²* (tons² / day)<br/>
		  This number will be tuned based on research.
        </div>
      </div>
    </div>
  );
}
