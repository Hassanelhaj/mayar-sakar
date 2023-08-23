

import './globals.css'


export const metadata = {
  title: 'Mayar Sakar',
  description:'developed by hassan ',
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="en" className='dark'>

  
<head>
  
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>

</head>


      <body>

 
  
      <main>
      {children}
      </main>

     
      </body>
   

    </html>
  )
}
