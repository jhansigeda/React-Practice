import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  const btnColors = ["olive","Red","blue","Yellow","Black","grey","purple"]

  return (
    <>
      <div id="mainDiv" className="w-screen h-screen duration-200" style={{backgroundColor : color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">   
        <div className="flex flex-wrap justify-center gap-3 shadow-2xl bg-white px-3 py-2 rounded-3xl">
                      
            {btnColors.map((btnColor, index) => (
               <button onClick={() => {setColor(btnColor)}} key={index} className="outline-none px-4 py-1 text-white rounded-full shadow-lg" 
                   style={{backgroundColor : btnColor}} >
                      {btnColor}
                </button>              
            ))}     
            </div>   
        </div>       
      </div>     
    </>
  )
}

export default App
