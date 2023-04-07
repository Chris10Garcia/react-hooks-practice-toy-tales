import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyList, deleteToy, updateLikes}) {
  return (
    <div id="toy-collection">
      {toyList.map(toy => 
        <ToyCard key={toy.id} toy={toy} updateLikes = {updateLikes} deleteToy={deleteToy}/>)
      }
    </div>
  );
}

export default ToyContainer;
