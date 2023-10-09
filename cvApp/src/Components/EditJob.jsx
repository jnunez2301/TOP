import { useEffect, useState } from "react"

/* eslint-disable react/prop-types */
const EditJob = ({ showModal, hideModal, updatedJobForm, jobs, jobIndex }) => {

  const [jobInput, setJobInput] = useState({
        title: '',
        description: '',
        previousDate: '',
        currentDate: '',
        adress: ''
  })

  useEffect(() =>{
    if(jobs){
      setJobInput({
        title: jobs.title,
        description: jobs.description,
        previousDate: jobs.previousDate,
        currentDate: jobs.currentDate,
        adress: jobs.adress
    })
    }
  }, [jobs])

  const handleTitleChange = (event) => {
    setJobInput({...jobInput, title: event.target.value})
  }

  const handleDescriptionChange = (event) =>{
    setJobInput({...jobInput, description: event.target.value})
  }

  
  const handlePreviousChange = (event) =>{
    setJobInput({...jobInput, previousDate: event.target.value})
  }

  const handleCurrentChange = (event) =>{
    setJobInput({...jobInput, currentDate: event.target.value})
  }

  const handleAddressChange = (event) =>{
    setJobInput({...jobInput, adress: event.target.value})
  }

  return (
    <div className="modal-background" style={{visibility: `${showModal}`}}>
      {
        jobs && 
        <div className="modal">
          <form onSubmit={(event) => updatedJobForm(jobIndex, event)}>

            <label htmlFor="editJob">Edit Job</label>
            <input type="text" name="editJob" id="editJob" placeholder="Where you studied"
            onChange={handleTitleChange}
            value={jobInput.title}/>

            <label htmlFor="editDescription">Edit Description</label>
            <textarea type="text" name="editDescription" id="editDescription" placeholder="What did you do on your work?"
            onChange={handleDescriptionChange}
            value={jobInput.description}/>
            
            <label htmlFor="editStart">Edit Start Date</label>
            <input type="text" name="editStart" id="editStart"
            onChange={handlePreviousChange}
            value={jobInput.previousDate}/>

            <label htmlFor="editEnd">Edit End Date</label>
            <input type="text" name="editEnd" id="editEnd" 
            onChange={handleCurrentChange}
            value={jobInput.currentDate}/>

            <label htmlFor="editJobLocation">Edit Location</label>
            <input type="text" name="editJobLocation" id="editJobLocation" onChange={handleAddressChange}
            value={jobInput.adress}/>

            <button type="submit" onClick={() => hideModal()}>Submit</button>
            <button type="button" onClick={() => hideModal()}>Cancel</button>

          </form>
        </div>
      }
    </div>
  )
}

export default EditJob