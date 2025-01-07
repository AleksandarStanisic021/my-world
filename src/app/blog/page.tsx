import  Link from "next/link"


export const metadata = { title: 'blog data' } 


export default function Blog() {
  return (
    <>
    <h3>Blog Posts</h3> 
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      Obcaecati ducimus et atque rerum? In ea autem impedit, similique,
       nesciunt enim error praesentium optio iste voluptas natus neque
       repellat eum vel.</p> 
    <Link href="/">Home</Link>
    </>
  )
}
