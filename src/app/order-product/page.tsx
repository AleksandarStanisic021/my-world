"use client";   

import { useRouter } from "next/navigation";  

export default function OrederProduct()
 {
    const router = useRouter();
    const handleClick = () => {
        router.push("/");   
    }

  return (
    <>
    <h3>Order Product</h3> 
    <button onClick={handleClick}>Place order</button>
    </>
  )
}
