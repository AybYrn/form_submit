import "./App.css";
import React from "react";

function App() {
  const [formData, setFormData] = React.useState({firstName : "", lastName : "", email : ""})

  function handleChange(event){
    const target = event.target
    const value = event.target.value

    setFormData(prevData => {
      return {
        ...prevData,
        [target.name] : value
      }
    })
  }
  return (
    <div className="form--container">
      <h1>Submission Form</h1>
      <form>
        <input
          type="text"
          name="firstName"
          placeholder=" Enter First Name"
          onChange={handleChange}
          value={formData.firstName}
        ></input>
        <input
          type="text"
          name="lastName"
          placeholder=" Enter Last Name"
          onChange={handleChange}
          value={formData.lastName}
        ></input>
        <input
          type="text"
          name="email"
          placeholder=" Enter Email Address"
          onChange={handleChange}
          value={formData.email}
        ></input>
        <input type="checkbox"></input>
      </form>
    </div>
  );
}

export default App;
