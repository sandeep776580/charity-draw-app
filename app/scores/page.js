
"use client"
import {useState} from "react"
import {supabase} from "../../lib/supabaseClient"

export default function Scores(){

 const[score,setScore]=useState("")

 const submit=async()=>{

  const{data:{user}}=await supabase.auth.getUser()

  const{data:existing}=await supabase
   .from("scores")
   .select("*")
   .eq("user_id",user.id)
   .order("created_at")

  if(existing && existing.length>=5){
   await supabase.from("scores").delete().eq("id",existing[0].id)
  }

  await supabase.from("scores").insert({
   user_id:user.id,
   score:parseInt(score)
  })

  alert("Score saved")
 }

 return(
  <div className="p-10">
   <h1 className="text-2xl mb-4">Enter Score</h1>
   <input className="p-2 text-black" placeholder="1-45" onChange={(e)=>setScore(e.target.value)}/>
   <button className="ml-4 bg-blue-500 px-4 py-2" onClick={submit}>Submit</button>
  </div>
 )
}
