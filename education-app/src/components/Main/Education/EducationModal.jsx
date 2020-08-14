import React, { useState } from 'react';
import Modal from 'react-modal';
import AsyncSelect from 'react-select/async';
import { modalStyles } from './styledComponents';

const EducationModal = ({ isOpen, handleEducationsUpdate }) => {
  const [schoolName, setSchoolName] = useState('');
  const [degree, setDegree] = useState('');
  const [fieldOfStudy, setFieldOfStudy] = useState('');
  const [startYear, setStartYear] = useState('');
  const [endYear, setEndYear] = useState('');
  const [grade, setGrade] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const education = { schoolName, degree, fieldOfStudy, startYear, endYear, grade, description };
    handleEducationsUpdate(education);
    resetForm();
  };

  const resetForm = () => {
    document.getElementById('education-form').reset();
    setSchoolName('');
    setDegree('');
    setFieldOfStudy('');
    setStartYear('');
    setEndYear('');
    setGrade('');
    setDescription('');
  }

  const fetchSchoolData = (query) => {
    return fetch(`http://universities.hipolabs.com/search?name=${query}`)
      .then(response => response.json())
      .then(result => {
        return Array.from(result).slice(0, 10).map(school => ({ value: school.name, label: school.name }));
     });
  };

  return (
    <Modal
      isOpen={isOpen}
      contentLabel="Add Education Experience"
      style={modalStyles}
    >
      <form id="education-form" onSubmit={handleSubmit}>
        <div>
          Name of School:
          <AsyncSelect
            defaultOptions
            loadOptions={fetchSchoolData}
            onChange={(school) => setSchoolName(school.value)}
            required
          />
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
    </Modal>
  );
};

export default EducationModal;