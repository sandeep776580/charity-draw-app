
export default function Charities(){

 const charities=[
  {name:"Education Fund"},
  {name:"Child Health NGO"},
  {name:"Food Support Charity"}
 ]

 return(
  <div className="p-10">
   <h1 className="text-2xl mb-6">Select Charity</h1>

   {charities.map((c,i)=>(
    <div key={i} className="bg-gray-800 p-4 mb-3 rounded">
     {c.name}
    </div>
   ))}
  </div>
 )
}
