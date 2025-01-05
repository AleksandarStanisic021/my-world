

const layout = ({childern}:{
    childern: React.ReactNode   
}) => {
  return (
    <>
      {childern}
      <p style={{background:"salmon",color:"white",padding:'1rem'}}>Featured product</p>
    </>
  )
}

export default layout



