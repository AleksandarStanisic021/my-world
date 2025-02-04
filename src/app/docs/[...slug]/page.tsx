
export default  async function Docs({ params }:
 { 
    params:  Promise<{slug: string[]}>   
 }) 

{ 
const {slug} = await params;

if(slug.length === 2) {
    return <h1>Docs for {slug[1]}</h1>        
}

if(slug.length === 1) {
    return (
        <h1> 
        Docs for {slug[0]}
        <p>very cool params</p>
        </h1>
         )        
}
  return (
    <>
      <h2>Docs</h2>
    </>
  )
}
