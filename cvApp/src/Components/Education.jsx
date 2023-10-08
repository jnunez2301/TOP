export const Education = () => {
  return (
    <div className="layout-item">
                    <h2>Education</h2>
                    <form>
                        <label htmlFor="school">School</label>
                        <input name="school" id="school" type="text" placeholder="Where you studied"/>

                        <label htmlFor="degree">Degree</label>
                        <input type="text" name="degree" id="degree" placeholder="The name of your degree"/>

                        <label htmlFor="start-date">Start Date</label>
                        <input type="text" name="start-date" id="start-date" placeholder="When did you started? MM/YYYY"/>

                        <label htmlFor="end-date-2">End Date</label>
                        <input type="text" name="end-date" id="end-date" placeholder="When did it end? MM/YYYY or Present"/>

                        <label htmlFor="location">Location</label>
                        <input type="text" name="location" id="location" placeholder="Where was it? City, Country..."/>
                    </form>
    </div>
  )
}
