import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor]=useState("white")

  return (
    <>
      <div style={{background:color,height:'100vh'}}>
      <h1  style={{color:'black',fontWeight:'bolder',textAlign:'center',paddingTop:'20px'}}>Background Color Changing App</h1>
        <div style={{justifyContent:'space-evenly',display:'flex',marginTop:'400px'}}>
        <button onClick={()=>setColor("plum")} style={{background:'black',color:'plum',borderRadius:'8px',width:'80px',height:'50px'}}>Plum</button>
        <button onClick={()=>setColor("orange")} style={{background:'black',color:'orange',borderRadius:'8px',width:'80px',height:'50px'}}>Orange</button>
        <button onClick={()=>setColor("green")} style={{background:'black',color:'green',borderRadius:'8px',width:'80px',height:'50px'}}>Green</button>
        <button onClick={()=>setColor("cyan")} style={{background:'black',color:'cyan',borderRadius:'8px',width:'80px',height:'50px'}}>Cyan</button>
        <button onClick={()=>setColor("blue")} style={{background:'black',color:'blue',borderRadius:'8px',width:'80px',height:'50px'}}>Blue</button>
        <button onClick={()=>setColor("pink")} style={{background:'black',color:'pink',borderRadius:'8px',width:'80px',height:'50px'}}>Pink</button>
        </div>

      </div>
      
    </>
  )
}

export default App