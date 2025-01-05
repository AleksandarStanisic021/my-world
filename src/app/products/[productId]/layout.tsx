

const layout = ({childern}:{
    childern: React.ReactNode   
}) => {
  return (
    <>
      {childern}
      <p style={{background:"salmon",color:'yellowgreen'}}>Featured product</p>
    </>
  )
}

export default layout



