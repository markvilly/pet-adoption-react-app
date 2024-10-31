import Pet from "./Pet";
import React from "react";

const Result = ({ pets }) => {
  return (
    <div className="search">
      {/* console.log(pets) */}
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            /*{...pet}*/
            id={pet.id}
            animal={pet.animal}
            name={pet.name}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            key={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Result; // export the component
