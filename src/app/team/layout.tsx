
import React from 'react'

export default function ComplexLayout({children,analytics}:
     {children: React.ReactNode,
        analytics: React.ReactNode}
    )
{   
  let isLoad=true;
  setTimeout(() => {
    isLoad=true;
  }, 3000); 
  return (
    <div>
      {isLoad?<div>{children}<div>{analytics}</div></div> 
      : <div>Loading...</div>}
    </div>
  ) 
}
     
