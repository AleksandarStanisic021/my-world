
import Link from "next/link"

export default function F1() {
  return (
    <div  style={{ padding: '1rem' }}>  
     <h1>  f1 route</h1>
        <Link href="/f1/f2">Go to F2</Link>     
    </div>
  )
}
