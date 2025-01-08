import { Metadata } from "next"

export const metadata: Metadata = { 
    title: {
      template: "Order Product ~ %s",     
      default: "My World",  
      absolute: ""
    } ,
   } // Page title
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        
        <body>
        <header style={{background:"p", padding:'1rem',font:"Arial"}}>    
          <p>oder</p>
        </header> 
          {children}
          <footer style={{background:"ghostwhite", padding:'1rem'}}>
            <p>footer</p>
          </footer> 
          </body>
      </html>
    )
  }
  