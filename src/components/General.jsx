import React, {useState} from "react";

    function General({formData, onSubmit, onFormSubmit}) {
        const handleChange = (e) => {
        const {id, value} = e.target;
        onSubmit({
            ...formData, 
            [id]:value
        });
    };
   



    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData)
      
    };

    return(
    <>
    <h2>General</h2>
    <form onSubmit={onFormSubmit}>
    <div>
    <input placeholder="First Name" type = "text" id="firstName" value={formData.firstName} onChange={handleChange}></input>
    </div>
    <div>
    <input placeholder="Last Name" type = "text" id="lastName" value={formData.lastName} onChange={handleChange}></input>
    </div>
    <div>
    <input placeholder="Email" type = "email" id="email" value={formData.email} onChange={handleChange}></input>
    </div>
    <div>
    <input placeholder="Phone number" type = "text" id="phone" value={formData.phone} onChange={handleChange}></input>
    </div>
    <input type = "submit" value= "Submit"></input>
    </form>
    </>
)}
export default General;