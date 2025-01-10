

async function ProductReview({params}: {params:Promise<{productId: string, reviewId: string}>})
 {  
 
    const { productId, reviewId} = await params;       
  return (
    <h2>
     This is product {productId} -ID: {reviewId}   
    </h2>
  )
}

export default ProductReview
