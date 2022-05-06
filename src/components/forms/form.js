import React from "react";
import { useState } from "react";
//import './components/css/form.css';


function form() {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
    });

    


       return (
        <div className="wrapper">
            <h1>Registration Form</h1>
            <form>
                <fieldset>
                    <label>
                        <p>Name</p>
                        <input value={values.firstName} name="name" />
                    </label>
                    <label>
                        <p>Last Name</p>
                        <input value={values.lastName} lastName="lastName" />
                    </label>
                </fieldset>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};

export default form;