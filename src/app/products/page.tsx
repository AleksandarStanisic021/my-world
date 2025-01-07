import Link from "next/link"

export default function ProductList() {
  return (
    <>
    <h1>
      Product List
    </h1>
        <Link href="/products/1"><h2>product 1</h2></Link>
        <Link href="/products/2"><h2>product 2</h2></Link>
        <Link href="/products/3"><h2>product 3</h2></Link>

        <Link href="/">Home</Link> 
    </>
  )
}
