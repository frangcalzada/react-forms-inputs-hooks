import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    text: "",
    checkbox: false,
    radio: "",
    select: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="form-container">
      <h1>Form Example</h1>
      <form className="form-field">
        <label>Text:</label>
        <input
          type="text"
          name="text"
          value={formData.text}
          onChange={handleChange}
        />

        <div className="form-field">
          <label>Checkbox:</label>
          <input
            type="checkbox"
            name="checkbox"
            checked={formData.checkbox}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label>Radio:</label>
          <input
            type="radio"
            name="radio"
            value="option1"
            checked={formData.radio === "option1"}
            onChange={handleChange}
          />{" "}
          Option 1
          <input
            type="radio"
            name="radio"
            value="option2"
            checked={formData.radio === "option2"}
            onChange={handleChange}
          />{" "}
          Option 2
        </div>

        <div className="form-field">
          <label>Select:</label>
          <select
            name="select"
            value={formData.select}
            onChange={handleChange}
          >
            <option value="">--Please choose an option--</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>  

        <div className="form-data">
          <h3>Form Data:</h3>
          <p><strong>Text:</strong> {formData.text || 'N/A'}</p>
          <p><strong>Checkbox:</strong> {formData.checkbox ? 'Checked' : 'Unchecked'}</p>
          <p><strong>Radio:</strong> {formData.radio || 'N/A'}</p>
          <p><strong>Select:</strong> {formData.select || 'N/A'}</p>
          </div>
      </form>
    </div>
  );
}

export default App;
