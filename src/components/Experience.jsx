function Experience({formData, onSubmit, onFormSubmit}){
    const handleChange = (e) =>{
        const {id,value} = e.target;
         onSubmit({
        ...formData,
        [id]:value
    });
};

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData)
    }

    return (
    <>
    <h2>Experience</h2>
    <form onSubmitCapture={onFormSubmit}>
    <div>
    <input type = "text" placeholder="Company" id="companyName" value = {formData.companyName} onChange={handleChange}></input>
    </div>
    <div>
    <input type = "text" placeholder="Position" id="position" value = {formData.position} onChange={handleChange}></input>
    </div>
    <div>
   
    <textarea
        placeholder="Responsibilities"
        id = "responsibilities"
        value = {formData.responsibilities}
        onChange={handleChange}
        rows="3">
    </textarea>
    </div>
    <div>
    <div>
    <label for="sdate" id="startLabel">Start Date</label>
    </div>
    <input type = "date" placeholder="Start" id="sDate" value = {formData.sDate} onChange={handleChange}></input>
    </div>
    <div>
    <div>
    <label for="fdate"  id="finishLabel">Finish Date</label>
    </div>
    <input type = "date" placeholder="Company" id="fDate"  value = {formData.fDate} onChange={handleChange}></input>
    </div>
    <input type = "submit"  value= "Submit"></input>
    </form>
    </>
)}
export default Experience;