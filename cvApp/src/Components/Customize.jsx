const Customize = () => {

  const cvElement = document.querySelector('.cv-element')
  const cvTitle = document.querySelector('.cv-title')

  const handleVertical = () =>{
    cvTitle.style.flexDirection = 'column-reverse'
    cvTitle.style.justifyContent = 'start'
    cvTitle.style.width = '279px'
    cvElement.style.flexDirection = 'row'
  }

  const handleHorizontal = () =>{
    cvTitle.style.flexDirection = 'row'
    cvTitle.style.width = '100%'
    cvTitle.style.justifyContent = 'space-between'
    cvElement.style.flexDirection = 'column'
    
  }

  return (
    <div className="layout-item btn-layout">
      <button className="btn-move" onClick={handleVertical}>
        <img src="/vertical.svg" alt="move-vertical"/>
        <p>Move Vertical</p>
      </button>
      <button className="btn-move" onClick={handleHorizontal}>
        <img src="/horizontal.svg" alt="move-horizontal" />
        <p>Move Horizontal</p>
      </button>
    </div>
  )
}

export default Customize