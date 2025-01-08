import Link from "next/link"

export default function ProductList() {
  const productId=100
  return (
    <>
    <h1>
      Product List
    </h1>
        <Link href="/"><h3>Home</h3></Link> 
        <Link href="/products/1"><h2>product 1</h2></Link>
        <Link href="/products/2"><h2>product 2</h2></Link>
        <Link href="/products/3"><h2>product 3</h2></Link>
       <Link href={`/products/${productId}`}><h2>product {productId}</h2></Link>   
    </>
  )
}
