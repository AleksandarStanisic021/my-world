


export default function ComplexLayout({children,analytics}:
     {children: React.ReactNode,
        analytics: React.ReactNode}
    )
{   
  let isLoad=true;
 
  return (
    <div>
      {isLoad?<div>{children}<div>{analytics}</div></div> 
      : <div style={{color:'red'}}>Loading...</div>}
    </div>
  ) 
}
     
