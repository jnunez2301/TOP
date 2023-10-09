import { useState } from "react"

/* eslint-disable react/prop-types */
export const Education = ({submitSchool, schools, handleEditSchool}) => {
  
  const [hide, setHide] = useState(true)



  return (
    hide ?
    <div className="layout-item">
      {
        <>
        <ul>
          {
            schools && schools.map((school, index)=>(
              <li key={index}>
                <h3>{school.title}</h3>
                <figure>
                  <img onClick={(event) => handleEditSchool(index, event)} src="/edit.svg" alt="show-icon" />
                  
                </figure>
              </li>
            ))
          }
        </ul>
        <figure className="btn-add">
          <p>Add Education</p>
          <img onClick={() => setHide(!hide)} src="/circlePlus.svg" alt="add-btn" />
        </figure>
        </>
      }
    </div>
    :
    
    <div className="layout-item">
                    <h2>Education</h2>
                    <form onSubmit={submitSchool}>
                        <label htmlFor="school">School</label>
                        <input name="school" id="school" type="text" placeholder="Where you studied"/>

                        <label htmlFor="degree">Degree</label>
                        <input type="text" name="degree" id="degree" placeholder="The name of your degree"/>

                        <label htmlFor="start-date">Start Date</label>
                        <input type="text" name="start-date" id="start-date" placeholder="When did you started? MM/YYYY"/>

                        <label htmlFor="end-date">End Date</label>
                        <input type="text" name="end-date" id="end-date" placeholder="When did it end? MM/YYYY or Present"/>

                        <label htmlFor="location">Location</label>
                        <input type="text" name="location" id="location" placeholder="Where was it? City, Country..."/>

                        <button>Submit</button>
                        <button type="button" onClick={() => setHide(!hide)}>Cancel</button>
                      </form>
                      
    </div>
  )
}
