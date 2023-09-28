import Header from "../component/Header";
import React, { useState } from "react";

const Reports = () => {
  // Define a state variable to hold the selected option
  const [selectedOption, setSelectedOption] = useState("");

  // Handler function to update the selected option
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <Header />
      <h2 style={{}}>Dropdown Example</h2>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
};

export default Reports;
