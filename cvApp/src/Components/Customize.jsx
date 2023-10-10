const Customize = () => {

  const cvElement = document.querySelector('.cv-element')

  const handleVertical = () =>{
    cvElement.style.flexDirection = 'row'
  }

  return (
    <div className="layout-item">
      <button onClick={() => handleVertical}>Flex Column</button>
    </div>
  )
}

export default Customize