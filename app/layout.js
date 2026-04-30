
import "./globals.css"

export const metadata = { title: "Charity Draw Platform" }

export default function RootLayout({children}){
 return (
  <html>
   <body className="bg-gray-900 text-white">
    {children}
   </body>
  </html>
 )
}
