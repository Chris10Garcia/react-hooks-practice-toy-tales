import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

const jsonAPI = 'http://localhost:3001/toys'

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyList, setToyList] = useState([])


  // get full data list once
  useEffect( ()=>{
    fetch(jsonAPI)
    .then( r => r.json())
    .then(data => setToyList(data))
    }, [])

  // show / hide form
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  // adds new toy object. function is propped down to ToyForm Container
  function addToy (formData){
    fetch(jsonAPI, {
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then(data => setToyList([...toyList, data]) ) 
  }

  // deletes toy using ID. function is propped down
  function deleteToy(id){
    fetch(jsonAPI + "/" + id, {
      method: "DELETE",
      headers: {"Content-Type" : "application/json"},
    })
    .then( () => {
      const newList = toyList.filter(toy => toy.id !== id)
      setToyList(newList)
    })
  }

  // updates number of likes using id and previous like value. function is propped down
  function updateLikes(id, likes){
    fetch(jsonAPI + "/" + id, {
      method: "PATCH",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify({likes: parseInt(likes) + 1})
    })
    .then(r => r.json())
    .then(data => {
      const newList = toyList.map(toy => toy.id === id ? data : toy)
      setToyList(newList)
    })
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer updateLikes = {updateLikes} deleteToy={ deleteToy} toyList = {toyList} />
    </>
  );
}

export default App;
