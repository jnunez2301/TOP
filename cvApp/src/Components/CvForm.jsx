/* eslint-disable react/prop-types */


export const CvForm = ({ handleName, handleEmail, handlePhone, handleAdress, handleTitleDescription }) => {

    
    
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
                    <input 
                    onChange={(event) => handleName(event)}
                    type="text" id="name" name="name" placeholder="Full name"/>
                    
                    <label htmlFor="email">Email</label>
                    <input 
                    onChange={event => handleEmail(event)}
                    type="text" id="email" name="email" placeholder="email@provider.com"/>

                    <label htmlFor="phone">Phone Number</label>
                    <input 
                    onChange={event => handlePhone(event)}
                    type="text" id="phone" name="phone" placeholder="Number: +34 612 123 123"/>

                    <label htmlFor="adress">Adress</label>
                    <input 
                    onChange={event => handleAdress(event)}
                    type="text" id="adress" name="adress" placeholder="Adress: Madrid, Spain..."/>

                    <label htmlFor="titleDescription">Title quote</label>
                    <input 
                    onChange={event => handleTitleDescription(event)}
                    type="text" id="titleDescription" name="titleDescription" placeholder="I'am a fullstack developer..."/>

                </form>
                <div className="layout-item">
                    <h2>Education</h2>
                    <form>
                        <label htmlFor="school">School</label>
                        <input name="school" type="text" />

                        <label htmlFor="degree">Degree</label>
                        <input type="text" name="degree" />

                        <label htmlFor="start-date">Start Date</label>
                        <input type="text" name="start-date"/>

                        <label htmlFor="end-date">End Date</label>
                        <input type="text" name="end-date"/>

                        <label htmlFor="location">Location</label>
                        <input type="text" name="location"/>
                    </form>
                </div>
                <div className="layout-item">
                    <h2>Experience</h2>
                    <form>
                        <label htmlFor="company">Company Name</label>
                        <input type="text" name="company" />

                        <label htmlFor="position-title">Position title</label>
                        <input type="text" name="position-title"/>

                        <label htmlFor="start-date">Start Date</label>
                        <input type="text" name="start-date"/>

                        <label htmlFor="end-date">End Date</label>
                        <input type="text" name="end-date"/>

                        <label htmlFor="description">Description</label>
                        <input type="text" name="description"/>
                    </form>
                </div>
            </aside>
  )
}
