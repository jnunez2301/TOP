export const CvForm = () => {
  return (
    <aside className="cv-form">
                <div className="layout-item">
                    <button>Content</button>
                    <button>Customize</button>
                </div>
                <div className="layout-item">
                    <button>Clear resume</button>
                    <button>Load example</button>
                </div>
                <form className="layout-item"> 
                    <label htmlFor="name">Full name</label>
                    <input type="text" id="name" name="name" placeholder="Full name"/>
                    
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" placeholder="email@provider.com"/>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" id="phone" name="phone" placeholder="Number: +34 612 123 123"/>
                    <label htmlFor="adress">Adress</label>
                    <input type="text" id="adress" name="adress" placeholder="Adress: Madrid, Spain..."/>
                </form>
                <div className="layout-item">
                    <h2>Education</h2>
                </div>
                <div className="layout-item">
                    <h2>Experience</h2>
                </div>
            </aside>
  )
}
