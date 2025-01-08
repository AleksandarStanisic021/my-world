import Link from "next/link"; 
export default async function News(
  { params, query }: 
  {
    params: Promise<{ id: string }>;
    query: Promise <{ lang?: "en"|"fr" }>;    
   }
) { 
  const { id } =await params;
  //const { lang } = await query;

  return (
    <div>
      <h1>News for {id}</h1>
      <p>read in language...</p>
      <Link href={`/articles/${id}?lang=en`}>Read english</Link>
      <Link href={`/articles/${id}?lang=fr`}>Read france</Link>
    </div>
  )
}
