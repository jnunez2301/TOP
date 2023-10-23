const AddPhone = () => {
  return (
    <section>
      <form className="userForm">
        <label htmlFor="model">Model</label>
        <input type="text" name="model" id="model" placeholder="Type the model name"/>

        <label htmlFor="brand">Brand</label>
        <input type="text" name="brand" id="brand" placeholder="Type the brand of the device"/>

        <label htmlFor="brand-description">Brand Description</label>
        <input type="text" name="brand-description" id="brand-description" placeholder="Type the brand description"/>

        <label htmlFor="brandIMG">Add an for the brand</label>
        {/* Please change this for filesystem */}
        <input type="text" name="brandIMG" id="brandIMG"/>

        <label htmlFor="description">Mobile description</label>
        <input type="text" name="description" id="description" placeholder="Type the info of your device"/>

        <label htmlFor="imgURL">Insert mobile IMG</label>
        <input type="text" name="imgURL" id="imgURL" />

      </form>
    </section>
  )
}

export default AddPhone