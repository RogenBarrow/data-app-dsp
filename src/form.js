import React from "react";

function inputForm() {
    return (
        <div>
            <h1>Registration Form</h1>
            <form>
                <fieldset>
                    <label>
                        <p>Name</p>
                        <input name="name" />
                    </label>
                    <label>
                        <p>Last Name</p>
                        <input lastName="lastName" />
                    </label>
                </fieldset>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};

export default inputForm;