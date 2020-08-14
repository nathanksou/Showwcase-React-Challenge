import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';

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

  const fetchSchoolData = (query) => {
    return fetch(`http://universities.hipolabs.com/search?name=${query}`)
      .then(response => response.json())
      .then(result => {
        return Array.from(result).slice(0, 10).map(school => ({ value: school.name, label: school.name }));
     });
  };

  return (
    <form id="educationForm" onSubmit={handleSubmit}>
      <div>
        Name of School:
        <AsyncSelect defaultOptions loadOptions={fetchSchoolData} onChange={(school) => setSchoolName(school.value)} />
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
          <input type="text" name="description" onChange={(event) => setDescription(event.target.value)} />
        </label>
      </div>
      <input type="submit" value="Save" />
    </form>
  );
};

export default EducationModal;