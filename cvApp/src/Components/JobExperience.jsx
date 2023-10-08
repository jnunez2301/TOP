export const JobExperience = () => {
  return (
    <div className="layout-item">
                    <h2>Experience</h2>
                    <form>
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
                    </form>
                </div>
  )
}
