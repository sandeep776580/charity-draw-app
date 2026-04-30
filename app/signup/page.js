
"use client"
import {useState} from "react"
import {supabase} from "../../lib/supabaseClient"

export default function Signup(){

 const[email,setEmail]=useState("")
 const[password,setPassword]=useState("")

 const signup=async()=>{
  await supabase.auth.signUp({email,password})
  alert("Account created")
 }

 return(
  <div className="p-10">
   <h1 className="text-2xl mb-4">Signup</h1>
   <input className="p-2 text-black" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
   <input className="p-2 text-black" type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/><br/><br/>
   <button className="bg-blue-500 px-4 py-2" onClick={signup}>Signup</button>
  </div>
 )
}
