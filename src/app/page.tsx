import  Link from "next/link"


export default function Home() {
  return (
    <>
      <h1>WELCOME HOME</h1>
        <p>About</p>
        <Link href="/blog">Blog</Link> 
        <Link href="/products">Products</Link>
    </>
  )
}
