import { useContext, useEffect } from "react";
import useForm from "../hooks/useForm";
import { Context } from "../context/InventoryContext";

const AddPhone = () => {
  const { onInputChange, handleSubmit, newData } = useForm();
  const value = useContext(Context);

  const data = value();
  
  useEffect(() => {
    if(newData){
      data.postData(newData);
    }
  }, [newData])

 

  return (
    <section className="add-phone">
      <form onSubmit={handleSubmit} className="userForm">
        <label htmlFor="model">Model</label>
        <input
          onChange={onInputChange}
          type="text"
          name="model"
          id="model"
          placeholder="Type the model name"
          required
        />

        <label htmlFor="brand">Brand</label>
        <input
          onChange={onInputChange}
          type="text"
          name="brand"
          id="brand"
          placeholder="Type the brand of the device"
          required
        />

        <label htmlFor="brand-description">Brand Description</label>
        <input
          onChange={onInputChange}
          type="text"
          name="brandDescription"
          id="brand-description"
          placeholder="Type the brand description"
          required
        />

        <label htmlFor="brandIMG">
          Add an IMG for the brand
        </label>
        <input
          type="text"
          onChange={onInputChange}
          name="brandIMG"
          id="brandIMG"
          placeholder="Place your img url here..."
        />

        <label htmlFor="description">Mobile description</label>
        <input
          onChange={onInputChange}
          type="text"
          name="description"
          id="description"
          placeholder="Type the info of your device"
          required
        />

        <label htmlFor="imgURL">Insert mobile IMG</label>
        <input
          onChange={onInputChange}
          type="text"
          name="imgURL"
          id="imgURL"
          placeholder="Place your img url here..."
        />

        <label htmlFor="price">Price</label>
        <input
          onChange={onInputChange}
          type="number"
          name="price"
          id="price"
          required
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default AddPhone;
