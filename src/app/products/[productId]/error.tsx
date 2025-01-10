'use client';

import {startTransition} from 'react';
import {useRouter} from 'next/navigation'; 


export default function ErrorBoundary({error,reset}: {error: Error, reset: () => void}) 
{ 
    const r=useRouter();  
    const reload=()=>
    {
        startTransition(()=>{
            r.refresh();
            reset();
        }); 
    }
  return (
    <div>
        {error.message=("This is an  layout error, try to refresh the page")}    
        <button onClick={()=>reload()}>try to fix</button>
    </div>
  )
}











































  
