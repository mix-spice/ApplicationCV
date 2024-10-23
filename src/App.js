import logo from './logo.svg';
import React, {useState} from "react";
import './App.css';
import General from './components/General';
import Experience from './components/Experience';
import Education from './components/Education';
import { jsPDF } from "jspdf"; // Import jsPDF

function App() {
  const [tempGeneralData, setTempGeneralData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  })

  const[tempEducationData, setTempEducationData] = useState({
    schoolName: "",
    faculty: "",
    sDate: "",
    fDate: ""
  })

  const[tempExperienceData, setTempExperienceData] = useState({
    companyName: "",
    position: "",
    responsibilities: "",
    sDate: "",
    fDate: ""
  })


  const[submittedData, setSubmittedData] = useState({
    firstName: "",
    lastNane: "",
    email: "",
    phone: ""
  })

  const [submittedGeneralData, setSubmittedGeneralData] = useState(null);
  const [submittedEducationData, setSubmittedEducationData] = useState(null);
  const [submittedExperienceData, setSubmittedExperienceData] = useState(null);


  const handleGeneralChange = (data) => {
    setTempGeneralData(data);
  }

  const handleGeneralSubmit = (e) => {
    e.preventDefault();
    setSubmittedGeneralData(tempGeneralData);
    console.log("General Data Submitted: ", tempGeneralData)
  }

  const handleEducationChange = (data) => {
    setTempEducationData(data);
  }

  const handleEducationSubmit = (e) => {
    e.preventDefault();
    setSubmittedEducationData(tempEducationData);
    console.log("Education Data Submitted", tempEducationData);
  }

  const handleExperienceChange = (data) =>{
    setTempExperienceData(data);
  }

  const handleExperienceSubmit = (e) => {
    e.preventDefault();
    setSubmittedExperienceData(tempExperienceData);
    console.log("Experience Data Submitted", tempExperienceData);
  }

  const generatePDF = () => {
    const doc = new jsPDF();
  

  doc.setFontSize(16);
  doc.text("Submitted Data", 10, 10)

  if (submittedGeneralData) {
    doc.setFontSize(12);
    doc.text(`First Name: ${submittedGeneralData.firstName}`, 10, 30);
    doc.text(`Last Name: ${submittedGeneralData.lastName}`, 10, 40);
    doc.text(`Email: ${submittedGeneralData.email}`, 10, 50);
    doc.text(`Phone: ${submittedGeneralData.phone}`, 10, 60);
  }

  // Add Education Data
  if (submittedEducationData) {
    doc.text("Education Information", 10, 80);
    doc.text(`School Name: ${submittedEducationData.schoolName}`, 10, 90);
    doc.text(`Faculty: ${submittedEducationData.faculty}`, 10, 100);
    doc.text(`Start Date: ${submittedEducationData.sDate}`, 10, 110);
    doc.text(`End Date: ${submittedEducationData.fDate}`, 10, 120);
  }

  // Add Experience Data
  if (submittedExperienceData) {
    doc.text("Experience Information", 10, 140);
    doc.text(`Company Name: ${submittedExperienceData.companyName}`, 10, 150);
    doc.text(`Position: ${submittedExperienceData.position}`, 10, 160);
    const responsibilitiesText = doc.splitTextToSize(
      `Responsibilities: ${submittedExperienceData.responsibilities}`,
      180 // Wrap text within a width of 180
    );
    doc.text(responsibilitiesText, 10, 170);
    doc.text(`Start Date: ${submittedExperienceData.sDate}`, 10, 180);
    doc.text(`End Date: ${submittedExperienceData.fDate}`, 10, 190);
  }

  doc.save("submitted_data.pdf");
  };

  return (
    <div className="container">
    <div className="form-data">
      <General formData={tempGeneralData} onSubmit={handleGeneralChange} onFormSubmit={handleGeneralSubmit}/>
      <Education formData={tempEducationData} onSubmit={handleEducationChange} onFormSubmit={handleEducationSubmit}/>
      <Experience formData={tempExperienceData} onSubmit={handleExperienceChange} onFormSubmit={handleExperienceSubmit}/>
      </div>
      <div className="submitted-data">
  <h2>Submitted Data</h2>

  {/* General Data */}
  {submittedGeneralData ? (
    <div className='sGeneral'>
      <h2>General</h2>
      <p><strong className='titel'>First Name:</strong> {submittedGeneralData.firstName}</p>
      <p><strong className='titel'>Last Name:</strong> {submittedGeneralData.lastName}</p>
      <p><strong className='titel'>Email:</strong> {submittedGeneralData.email}</p>
      <p><strong className='titel'>Phone:</strong> {submittedGeneralData.phone}</p>
    </div>
  ) : (
    <p>No general data submitted yet.</p>
  )}

  {/* Education Data */}
  {submittedEducationData ? (
    <div className='sEducation'>
      <h2>Education</h2>
      <p><strong className='titel'>School Name:</strong> {submittedEducationData.schoolName}</p>
      <p><strong className='titel'>Faculty:</strong> {submittedEducationData.faculty}</p>
      <p><strong className='titel'>Start Date:</strong> {submittedEducationData.sDate}</p>
      <p><strong className='titel'>End Date:</strong> {submittedEducationData.fDate}</p>
    </div>
  ) : (
    <p>No education data submitted yet.</p>
  )}

  {/* Experience Data */}
  {submittedExperienceData ? (
    <div className='sExperience'>
      <h2>Experience</h2>
      <p><strong className='titel'>Company Name:</strong> {submittedExperienceData.companyName}</p>
      <p><strong className='titel'>Position:</strong> {submittedExperienceData.position}</p>
      <p><strong className='titel'>Responsibilities:</strong> {submittedExperienceData.responsibilities}</p>
      <p><strong className='titel'>Start Date:</strong> {submittedExperienceData.sDate}</p>
      <p><strong className='titel'>End Date:</strong> {submittedExperienceData.fDate}</p>
    </div>
  ) : (
    <p>No experience data submitted yet.</p>
  )}
  <button onClick={generatePDF}>Download CV</button>
      </div>
     </div>
 
  );
}

export default App;
