import { useState,useCallback,useEffect,useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charallowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  
  // Usecallback is used to memorize the function
  const passwordGenarator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charallowed) str += ",.;'[]{}:!#$%^&*()"

    for (let index = 1; index < length; index++) {
      let char = Math.floor(Math.random()*str.length +1)

      pass +=  str.charAt(char)      
    }
    setPassword(pass)
  }, [length,numberAllowed,charallowed,setPassword])
   //setPassword in dependencies is to optimize.this is optional. But is you give password it will go to infinate loop 

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,3)
    passwordRef.button.
    window.navigator.clipboard.writeText(password)
  },[password])
  
  //UseEffect is called when the  page loads/rerun and also runs when there is change in Dependenies.
  useEffect(() => {
    passwordGenarator()
  },[length,numberAllowed,charallowed,passwordGenarator])

  //UseRef hook is used to do the changes on element and manipulate it. Like highiligting the text that need to copy  
  const passwordRef = useRef(null)

  //Returns Html 
  return (
    <>      
      <div className='w-full max-x-md mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-800
       text-orange-500 max-w-96'>
        <hl className="text-center text-white my-3">Password Generator</hl>

        <div className="flex shadow rounded-lg overflow-hidden mb-4 py-4"> 
          <input type="text" 
            value={password} 
            className="outline-none w-full py-1 px-3 bg-white" 
            placeholder="Password" 
            ref={passwordRef}
            readOnly /> 
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          onClick={copyPasswordToClipboard}>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className="flex items-center gap-x-1"> 
            <input type='range'
                min={6}
                max={99}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {setLength(e.target.value)}}
              />

             <label>Length:{length}</label>
          </div>

          <div className="flex items-center gap-x-1">
              <input type="checkbox"
              defaultChecked={numberAllowed}
              id = "numberInput"
              onChange={() => {setNumberAllowed((prev) => !prev)}}
              />
              <label htmlFor='numberInput'>Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
              <input type="checkbox"
              defaultChecked={charallowed}
              id = "charInput"
              onChange={() => {setCharAllowed((prev) => !prev)}}
              />
              <label htmlFor='charInput'>Charecters</label>
          </div>
        </div>
       
      </div>
    </>
  )
}

export default App
