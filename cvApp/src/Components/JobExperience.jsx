import { useState } from "react"

/* eslint-disable react/prop-types */
export const JobExperience = ({submitJob, jobs}) => {

  const [hide, setHide] = useState(true)

  /* const handleDelte = (index)=>{
      return inputValue.jobs.filter(job => jobs !== index)
  } */
  
  return (
    hide ?
    <div className="layout-item">
    {
      <>
      <ul >
      {
      jobs &&
      jobs.map((job, index) => (
        
          <li  key={index}>
            <h3>{job.title}</h3>
          <figure>
            <img onClick={() => setHide(!hide)} src="/showIcon.svg" alt="showicon" />
          </figure>
          </li>
        
      ))
      }
      
      </ul>
      <figure className="btn-add">
        <p>Add Experience</p>
        <img onClick={()=> setHide(!hide)} src='/circlePlus.svg' alt="add-btn"/>
      </figure>
      </>
    }
    
    </div>
     :
     
    <div className="layout-item">
                    <h2>Experience</h2>
                    <form onSubmit={submitJob}>
                        <label htmlFor="company">Company Name</label>
                        <input type="text" name="company" id="company" placeholder="Name of the company"/>

                        <label htmlFor="position-title">Position title</label>
                        <input type="text" name="position-title" id="position-title" placeholder="Which department did you work for?"/>

                        <label htmlFor="job-start-date">Start Date</label>
                        <input type="text" name="start-date-job" id="job-start-date" placeholder="When did you started? MM/YYYY"/>

                        <label htmlFor="job-end-date">End Date</label>
                        <input type="text" name="job-end-date" id="job-end-date" placeholder="When did it end? MM/YYYY or Present"/>

                        <label htmlFor="job-description">Description</label>
                        <input type="text" name="job-description" id="job-description" placeholder="What where you used to do on your job?"/>

                        <button type="submit">Submit</button>
                        <button type="button" onClick={() => setHide(!hide)}>Cancel</button>
                    </form>
    </div>
  )
}
