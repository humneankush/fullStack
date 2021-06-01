import React, { useState } from "react";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import PhoneBook from "./components/PhoneBook";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const addNewName = (event) => {
    event.preventDefault();

    if (persons.map((person) => person.name).includes(newName)) {
      window.alert(`${newName} has already been added to the phonebook.`);
    } else {
      const newPerson = {
        name: newName,
        number: newNumber,
      };

      setPersons(persons.concat(newPerson));

      setNewName("");

      setNewNumber("");

      setFilter("");
      console.log("new contact created");
    }
  };
  const handleNewName = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };
  const handleNewNumber = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };
  const handleFilter = (event) => {
    console.log(event.target.value);
    setFilter(event.target.value);
  };

  const results = !filter
    ? persons
    : persons.filter((person) =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      );

  return (
    <div>
      <h1>Phonebook</h1>
      <h2>Search</h2>
      <Filter filter={filter} handleFilter={handleFilter} />
      <h2>Add contact</h2>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        addNewName={addNewName}
        name={newName}
        handleNewName={handleNewName}
        number={newNumber}
        handleNewNumber={handleNewNumber}
      />
      <h2>List</h2>
      <PhoneBook persons={results} filter={filter} />
    </div>
  );
};

export default App;
