import { comments } from '../data';

export async function GET( request: Request, {params}: {params:Promise<{id:string}>} )
{
    const { id } =await  params;
    const comment = comments.find(comment => comment.id === parseInt(id));
    return Response.json(comment);    
}          
 
/*
export async function PUT(request: Request)
{
    const comment = await request.json();
    const index = comments.findIndex(c => c.id == comment.id);
    if (index == -1) return Response.notFound();
    comments[index] = comment;
    return Response.json(comment);
}   */