import React, { useState } from 'react';

const EducationModal = ({ handleEducationsUpdate }) => {
  const [schoolName, setSchoolName] = useState('');
  const [degree, setDegree] = useState('');
  const [fieldOfStudy, setFieldOfStudy] = useState('');
  const [startYear, setStartYear] = useState('');
  const [endYear, setEndYear] = useState('');
  const [grade, setGrade] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    handleEducationsUpdate({ schoolName, degree, fieldOfStudy, startYear, endYear, grade, description });
  };

  return (
    <form id="educationForm" onSubmit={handleSubmit}>
      <div>
        <label>
          Name of School:
          <input type="text" name="schoolName" onChange={(event) => setSchoolName(event.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Degree:
          <input type="text" name="degree" onChange={(event) => setDegree(event.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Field of Study:
          <input type="text" name="fieldOfStudy" onChange={(event) => setFieldOfStudy(event.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Start Year:
          <input type="text" name="startYear" onChange={(event) => setStartYear(event.target.value)} />
        </label>
      </div>
      <div>
        <label>
          End Year:
          <input type="text" name="endYear" onChange={(event) => setEndYear(event.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Grade:
          <input type="text" name="grade" onChange={(event) => setGrade(event.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Description:
          <input type="text" name="description" onChange={(event) => setDegree(event.target.value)} />
        </label>
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default EducationModal;