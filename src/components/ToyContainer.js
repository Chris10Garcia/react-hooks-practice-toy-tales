import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyList}) {
  return (
    <div id="toy-collection">
      {toyList.map(toy => <ToyCard key={toy.id} toy={toy}/>)}
    </div>
  );
}

export default ToyContainer;
