import React, { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({
    studentName: '',
    fatherName: '',
    dob: '',
    course: '',
    year: '',
    parentAddress: '',
    parentContact: '',
    hosteller: '',
    localGuardian: '',
    lgAddress: '',
    lgContact: '',
    declaration: '',
    studentSignature: '',
    parentSignature: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  return (
    <div className='css'>

      <h1>HOSTEL ACCOMMODATION APPLICATION FORM</h1>
      <form  acceptCharset="UTF-8">
        <label htmlFor="studentName">1. Name of the Student (IN BLOCK LETTERS):</label>
        <input
          type="text"
          id="studentName"
          name="studentName"
          value={data.studentName}
          onChange={handleChange}
          required
        /><br />

        <label htmlFor="fatherName">2. Father’s Name:</label>
        <input
          type="text"
          id="fatherName"
          name="fatherName"
          value={data.fatherName}
          onChange={handleChange}
          required
        /><br />

        <label htmlFor="dob">3. Date of Birth:</label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={data.dob}
          onChange={handleChange}
          required
        /><br />

        <label htmlFor="course">4. Course Admitted:</label>
        <input
          type="text"
          id="course"
          name="course"
          value={data.course}
          onChange={handleChange}
        /><br />

        <label htmlFor="year">5. Year in which studying:</label>
        <input
          type="text"
          id="year"
          name="year"
          value={data.year}
          onChange={handleChange}
        /><br />

        <label htmlFor="parentAddress">6. Address of PARENT (in block letters):</label>
        <textarea
          id="parentAddress"
          name="parentAddress"
          value={data.parentAddress}
          onChange={handleChange}
          required
        ></textarea><br />

        <label htmlFor="parentContact">7.Phone with STD Code / Mobile No & E-mail ID of Parent:</label>
        <input
          type="text"
          id="parentContact"
          name="parentContact"
          value={data.parentContact}
          onChange={handleChange}
          required
        /><br />

        <label htmlFor="hosteller">8.Hosteller:</label>
        <input
          type="text"
          id="hosteller"
          name="hosteller"
          value={data.hosteller}
          onChange={handleChange}
        /><br />

        <label htmlFor="localGuardian">9. Name of the Local Guardian:</label>
        <input
          type="text"
          id="localGuardian"
          name="localGuardian"
          value={data.localGuardian}
          onChange={handleChange}
        /><br />

        <label htmlFor="lgAddress">10.Address of Local Guardian:</label>
        <textarea
          id="lgAddress"
          name="lgAddress"
          value={data.lgAddress}
          onChange={handleChange}
        ></textarea><br />

        <label htmlFor="lgContact">11.Phone / Mobile No of L.G.:</label>
        <input
          type="text"
          id="lgContact"
          name="lgContact"
          value={data.lgContact}
          onChange={handleChange}
        /><br />

        <label htmlFor="declaration">12.DECLARATION BY THE STUDENT:</label><br />
        <textarea
          id="declaration"
          name="declaration"
          value={data.declaration}
          onChange={handleChange}
          required
        ></textarea><br />

        <label htmlFor="studentSignature">13.Student's Signature:</label>
        <input
          type="text"
          id="studentSignature"
          name="studentSignature"
          value={data.studentSignature}
          onChange={handleChange}
          required
        /><br />

        <label htmlFor="parentSignature">14.Parent's Signature:</label>
        <input
          type="text"
          id="parentSignature"
          name="parentSignature"
          value={data.parentSignature}
          onChange={handleChange}
          required
        /><br />

        <input type="submit" value="Submit" />
      </form>
    </div>

   
  );
}

export default App;
