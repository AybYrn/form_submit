import "./App.css";
import React from "react";

function App() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    info: "",
    smoking: true,
    employment: "",
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    console.log(name, value, type, checked);
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  console.log(formData);
  return (
    <div className="form--container">
      <h1>Submission Form</h1>
      <form>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
          value={formData.firstName}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          value={formData.lastName}
        />
        <input
          type="text"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
          value={formData.email}
        />
        <textarea
          name="info"
          placeholder="Give info"
          onChange={handleChange}
          value={formData.info}
        />
        <div className="smoke">
          <input
            type="checkbox"
            name="smoking"
            onChange={handleChange}
            checked={formData.smoking}
            id="smoke"
          />
          <label htmlFor="smoke">Are You Smoking ?</label>
        </div>
        <fieldset>
          <legend>Current Employment Status</legend>
          <input
            type="radio"
            id="unemployed"
            name="employment"
            value="unemployed"
            checked={formData.employment === "unemployed"}
            onChange={handleChange}
          />
          <label htmlFor="unemployed">Unemployed</label>
          <br />
          <input
            type="radio"
            id="partTime"
            name="employment"
            value="part-time"
            checked={formData.employment === "part-time"}
            onChange={handleChange}
          />
          <label htmlFor="partTime">Part-Time</label>
          <br />
          <input
            type="radio"
            id="fullTime"
            name="employment"
            value="full-time"
            checked={formData.employment === "full-time"}
            onChange={handleChange}
          />
          <label htmlFor="fullTime">Full-Time</label>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
