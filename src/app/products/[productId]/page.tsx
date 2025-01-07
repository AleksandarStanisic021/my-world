import Link from "next/link";
export default async function ProductDetails({params}: {params:Promise<{productId:string}>})
 {       
    const productId = (await params).productId;                
  return (
    <>
    <Link href="/">Home</Link>
      <h2 style={{color: 'red'}}>  
          Details about product {productId}   
      </h2>
    </>
  )
}

