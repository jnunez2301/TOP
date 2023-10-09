/* eslint-disable react/prop-types */
const EditEducation = ({showModal, hideModal, updateForm, education}) => {
  
  return (
    <div className="modal-background" style={{visibility: `${showModal}`}}>
    <div className="modal">
        <form onSubmit={updateForm}>
                        <label htmlFor="editSchool">Edit School</label>
                        <input name="editSchool" id="editSchool" type="text" placeholder="Where you studied"
                        />

                        <label htmlFor="editDegree">Edit Degree</label>
                        <input type="text" name="editDegree" id="editDegree" placeholder="The name of your degree"/>

                        <label htmlFor="edit-start-date">Edit Start Date</label>
                        <input type="text" name="edit-start-date" id="edit-start-date" placeholder="When did you started? MM/YYYY"/>

                        <label htmlFor="edit-end-date">Edit End Date</label>
                        <input type="text" name="edit-end-date" id="edit-end-date" placeholder="When did it end? MM/YYYY or Present"/>

                        <label htmlFor="edit-location">Edit Location</label>
                        <input type="text" name="edit-location" id="edit-location" placeholder="Where was it? City, Country..."/>

                        <button>Submit</button>
                        <button type="button" onClick={() => hideModal()}>Cancel</button>
                      </form>
    </div>
    </div>
  )
}

export default EditEducation