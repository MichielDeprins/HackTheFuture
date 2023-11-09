import React, { useState, useEffect } from 'react';
import { Animal, AnimalType } from './types';
import { API_URL } from './constants';

function FetchAllAnimals() {
  const [animalList, setAnimals] = useState<Animal[]>([]);

  useEffect(() => {
    async function fetchData(){
        const response = await fetch(
            'https://api.htf-2023.int.icapps-projects.com/animals'
        );
        const data: Animal[] = await response.json();
        console.log(data);
        setAnimals(data);
    }
    fetchData();

  }, []);

  return (
    <div>
      <h1>All Animals</h1>
      <ul>
        {animalList.length > 0 ? (
          animalList.map(animal => (
            <li key={animal.id}>
              <h2>{animal.name}</h2>
              <p>
                <strong>Type:</strong> {animal.type}
              </p>
              <p>
                <strong>Age:</strong> {animal.age} years
              </p>
              <p>
                <strong>gender:</strong> {animal.gender}
              </p>
              <p>
              <img src={API_URL + '/' + animal.image} />
              </p>
              
            </li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </div>
  );
}


export default FetchAllAnimals;