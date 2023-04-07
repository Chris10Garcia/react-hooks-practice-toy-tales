import React from "react";

function ToyCard({toy, deleteToy, updateLikes}) {
  const {id, name, image, likes} = toy


  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick = {()=> updateLikes(id, likes)} className="like-btn">Like {"<3"}</button>
      <button onClick = {()=> deleteToy(id)} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
