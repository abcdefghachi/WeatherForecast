import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

function Search({ city, setCity }) {
  const [inputCity, setInputCity] = useState(city);

  const handleChange = (event) => {
    setInputCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCity(inputCity);
  };

  useEffect(() => {
    setInputCity(city);
  }, [city]);

  return (
    <div className="d-flex flex-col align-items-center">
      <d className="fs-5 fw-medium">City</d>
      <Form className="ms-2" onSubmit={handleSubmit}>
        <Form.Control
          type="text"
          id="cityInput"
          placeholder="City..."
          className="form-control-lg shadow-sm fs-5 text-capitalize custom-input"
          value={inputCity}
          onChange={handleChange}
        />
      </Form>
    </div>
  );
}

export default Search;
