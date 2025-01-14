import { comments } from '../data';

export async function GET( request: Request, {params}: {params:Promise<{id:string}>} )
{
    const { id } =await  params;
    const comment = comments.find(comment => comment.id === parseInt(id));
    return Response.json(comment);    
}          


export async function PATCH(request: Request, {params}: {params:Promise<{id:string}>})
{
    const { id } = await  params;
    const comment = comments.find(comment => comment.id === parseInt(id));
    const updatedComment = await request.json();
    if (comment) {
        comment.text = updatedComment.text;
    } else {
        return new Response('Comment not found', { status: 404 });
    }
    return new Response(JSON.stringify(comment), {
        headers: { 'content-type': 'application/json' } ,
        status: 200 
    });   
}       

export async function DELETE(request: Request, {params}: {params:Promise<{id:string}>})
{
    const { id } = await  params;
    const index = comments.findIndex(comment => comment.id === parseInt(id));
    if (index > -1) {
        comments.splice(index, 1);
        return new Response('Comment deleted', { status: 200 });
    } else {
        return new Response('Comment not found', { status: 404 });
    }
}   
