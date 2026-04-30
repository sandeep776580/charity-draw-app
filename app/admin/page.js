
"use client"
import {generateDraw} from "../../utils/drawEngine"

export default function Admin(){

 const draw=()=>{
  const numbers=generateDraw()
  alert("Draw Numbers: "+numbers.join(","))
 }

 return(
  <div className="p-10">
   <h1 className="text-3xl mb-6">Admin Panel</h1>
   <button className="bg-red-500 px-4 py-2" onClick={draw}>
    Generate Monthly Draw
   </button>
  </div>
 )
}
