
export default function layout({children}: {children: React.ReactNode}) 
{    
  const random=Math.random();
  if (random>=0.1)   
  {
    throw new Error('This is an  layot error');  
  } 
  return (
    <>
        <h1 style={{color: 'lightblue'}}>     
            Product Details   
        </h1>
        {children}           
    </>
  )
}
