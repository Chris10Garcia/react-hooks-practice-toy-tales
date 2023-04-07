import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

const jsonAPI = 'http://localhost:3001/toys'

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyList, setToyList] = useState([])

  useEffect( ()=>{
    fetch(jsonAPI)
    .then( r => r.json())
    .then(data => setToyList(data))
    }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addToy (formData){
    fetch(jsonAPI, {
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then(data => setToyList([...toyList, data]) )
    
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyList = {toyList} />
    </>
  );
}

export default App;
