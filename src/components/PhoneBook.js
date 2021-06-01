import React from "react";
import Person from "./Person";

const PhoneBook = ({ persons }) => {
  return (
    <ul>
      {persons.map((person) => (
        <Person
          person={person}
          key={person.id}
          name={person.name}
          number={person.number}
        />
      ))}
    </ul>
  );
};

export default PhoneBook;
