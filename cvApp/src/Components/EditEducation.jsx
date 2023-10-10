import { useEffect, useState } from "react"

/* eslint-disable react/prop-types */
const EditEducation = ({ showModal, hideModal, updateForm, education, schoolIndex, handleDeleteEducation }) => {



  const [educationInput, setEducationInput] = useState({
        title: '',
        description: '',
        previousDate: '',
        currentDate: '',
        adress: ''
      })

  useEffect(() => {
    if(education){
      setEducationInput({ 
        title: education.title,
        description: education.description,
        previousDate: education.previousDate,
        currentDate: education.currentDate,
        adress: education.adress
      })
    }
  }, [education])
  

  const handleTitleChange = (event) => {
    setEducationInput({...educationInput, title: event.target.value})
  }

  const handleDescriptionChange = (event) =>{
    setEducationInput({...educationInput, description: event.target.value})
  }

  
  const handlePreviousChange = (event) =>{
    setEducationInput({...educationInput, previousDate: event.target.value})
  }

  const handleCurrentChange = (event) =>{
    setEducationInput({...educationInput, currentDate: event.target.value})
  }

  const handleAddressChange = (event) =>{
    setEducationInput({...educationInput, adress: event.target.value})
  }

  return (
    <div className="modal-background" style={{ visibility: `${showModal}` }}>
      {education &&
        <div className="modal">
          <form onSubmit={(event) => updateForm(schoolIndex, event)}>
            <label htmlFor="editSchool">Edit School</label>
            <input name="editSchool" id="editSchool" type="text" placeholder="Where you studied"
              onChange={handleTitleChange}
              value={educationInput.title}
              required
            />

            <label htmlFor="editDegree">Edit Degree</label>
            <input type="text" name="editDegree" id="editDegree" placeholder="The name of your degree"
              onChange={handleDescriptionChange}
              value={educationInput.description}
              required />

            <label htmlFor="edit-start-date">Edit Start Date</label>
            <input type="text" name="edit-start-date" id="edit-start-date" placeholder="When did you started? MM/YYYY"
              onChange={handlePreviousChange}
              value={educationInput.previousDate}
              required />

            <label htmlFor="edit-end-date">Edit End Date</label>
            <input type="text" name="edit-end-date" id="edit-end-date" placeholder="When did it end? MM/YYYY or Present"
              onChange={handleCurrentChange}
              value={educationInput.currentDate}
              required />

            <label htmlFor="edit-location">Edit Location</label>
            <input type="text" name="edit-location" id="edit-location" placeholder="Where was it? City, Country..."
              onChange={handleAddressChange}
              value={educationInput.adress}
              required />

            <button className="btn-edit" type="submit" onClick={() => hideModal()}>Submit</button>
            <button className="btn-edit" type="button" onClick={() => hideModal()}>Cancel</button>
            <button className="btn-edit btn-delete" 
            type="button"
            onClick={() => handleDeleteEducation(schoolIndex)}>
              Delete
            </button>
          </form>
        </div>}
    </div>
  )
}

export default EditEducation