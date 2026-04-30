
"use client"
import {useEffect,useState} from "react"
import {supabase} from "../../lib/supabaseClient"

export default function Dashboard(){

 const[user,setUser]=useState(null)

 useEffect(()=>{
  supabase.auth.getUser().then(r=>setUser(r.data.user))
 },[])

 return(
  <div className="p-10">
   <h1 className="text-3xl">Dashboard</h1>
   {user && <p className="mt-2">Welcome {user.email}</p>}

   <div className="mt-6 space-x-4">
    <a href="/scores" className="bg-purple-500 px-4 py-2">Enter Score</a>
    <a href="/charities" className="bg-yellow-500 px-4 py-2">Select Charity</a>
   </div>
  </div>
 )
}
