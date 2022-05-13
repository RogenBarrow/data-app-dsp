import React from "react";
import { useState } from "react";
import '/Users/rogenbarrow/Documents/Projects/data-dsp/data-app-dsp/src/css/form.css';


const Form = () => {
const [name, setName] = useState("");

const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
}

return (
<form className="form" onSubmit={handleSubmit}>
    <label className="labelName">Enter your name</label>
    <label>
        <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
    </label>
    <input className="button" type="submit" />
</form>
)
};

export default Form;