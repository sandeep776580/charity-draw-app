
export default function Home(){
 return(
  <main className="p-10">
   <h1 className="text-4xl font-bold">Charity Draw Platform</h1>
   <p className="mt-4">Play, win prizes, support charities.</p>
   <div className="mt-6 space-x-4">
    <a href="/signup" className="bg-blue-500 px-4 py-2 rounded">Signup</a>
    <a href="/login" className="bg-green-500 px-4 py-2 rounded">Login</a>
   </div>
  </main>
 )
}
