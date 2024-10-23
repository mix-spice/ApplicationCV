function Education({formData, onSubmit, onFormSubmit}) {
    const handleChange = (e) => {
        const {id, value} = e.target;
        onSubmit({
            ...formData, 
            [id]:value
        });
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        onSubmit(formData)
    };
    return (
    <>
    <h2>Education</h2>
    <form onSubmit={onFormSubmit}>
    <div>
    <input placeholder="School name" type = "text" id="schoolName" value = {formData.schoolName} onChange={handleChange}></input>
    </div>
    <div>
    <input placeholder="Faculty" type = "text" id="faculty"  value = {formData.faculty} onChange={handleChange}></input>
    </div>
    <div>
    <label for="sdate" id="startLabel">Start Date</label>
    </div>
    <div>
    <input type = "date" id="sDate" value={formData.sDate}  onChange={handleChange}></input>
    </div>
    <div>
    <div>
    <label for="fdate" id="finishLabel">Finish Date</label>
    </div>
    <input type = "date" id="fDate" value={formData.fDate} onChange={handleChange}></input>
    </div>
    <input type = "submit" value= "Submit" onSubmit={handleSubmit}></input>
    </form>
    </>
)}
export default Education;