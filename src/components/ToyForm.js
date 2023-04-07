import React, { useState } from "react";

function ToyForm({addToy}) {
  const [formData, setFormData] = useState({
    name : "",
    image : "",
    likes : 0
  })

  function handleOnChange(e){
    const key = e.target.name
    const value = e.target.value
    setFormData({...formData, [key] : value})
  }

  function handleOnSubmit(e){
    e.preventDefault(0)
    addToy(formData) //from App Component
  }

  return (
    <div className="container">
      <form onSubmit = {handleOnSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange = {handleOnChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange = {handleOnChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
          onChange = {handleOnChange}
        />
      </form>
    </div>
  );
}

export default ToyForm;
