

async function ProductReview({params}: {params:Promise<{productId: string, reviewId: string}>})
 {  
  const random=Math.random();
  if (random>=0.1)   
  {
    throw new Error('This is an error');  
  }
    const { productId, reviewId} = await params;       
  return (
    <h2>
     This is product {productId} -ID: {reviewId}   
    </h2>
  )
}

export default ProductReview
