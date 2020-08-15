import React, { useState } from 'react';
import Modal from 'react-modal';
import AsyncSelect from 'react-select/async';
import TextField from '@material-ui/core/TextField';
import { Form, SelectContainer, SubmitButton, materialStyles, modalStyles, selectStyles } from './styledComponents';

const EducationModal = ({ isOpen, handleCloseModal, handleEducationsUpdate }) => {
  const [schoolName, setSchoolName] = useState('');
  const [degree, setDegree] = useState('');
  const [fieldOfStudy, setFieldOfStudy] = useState('');
  const [startYear, setStartYear] = useState('');
  const [endYear, setEndYear] = useState('');
  const [grade, setGrade] = useState('');
  const [description, setDescription] = useState('');

  const fetchSchoolData = (query) => {
    return fetch(`http://universities.hipolabs.com/search?name=${query}`)
      .then(response => response.json())
      .then(result => {
        return Array.from(result).slice(0, 10).map(school => ({ value: school.name, label: school.name }));
     });
  };

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

  const classes = materialStyles();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      contentLabel="Add Education Experience"
      style={modalStyles}
    >
      <Form id="education-form" onSubmit={handleSubmit}>
        <SelectContainer>
          <AsyncSelect
            styles={selectStyles}
            placeholder="Name of School"
            defaultOptions
            loadOptions={fetchSchoolData}
            onChange={(school) => setSchoolName(school.value)}
            required
          />
        </SelectContainer>
        <div className={classes.root} >
          <TextField
            label="Degree"
            id="outlined-margin-normal"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            onChange={(event) => setDegree(event.target.value)}
          />
          <TextField
            label="Field of Study"
            id="outlined-margin-normal"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            onChange={(event) => setFieldOfStudy(event.target.value)}
          />
          <TextField
            label="Grade"
            id="outlined-margin-normal"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            onChange={(event) => setGrade(event.target.value)}
          />
          <TextField
            label="Start Year"
            id="outlined-margin-normal"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            onChange={(event) => setStartYear(event.target.value)}
          />
          <TextField
            label="End Year"
            id="outlined-margin-normal"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            onChange={(event) => setEndYear(event.target.value)}
          />
          <TextField
            id="outlined-multiline-static"
            label="Description"
            style={{ margin: 8 }}
            placeholder="Built an education showcase platform."
            fullWidth
            multiline
            rows={4}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <SubmitButton />
      </Form>
    </Modal>
  );
};

export default EducationModal;