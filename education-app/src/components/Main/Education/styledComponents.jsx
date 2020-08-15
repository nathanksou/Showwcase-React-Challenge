import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const Form = styled.form`
  margin: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SelectContainer = styled.form`
  width: 100%;
`;

export const SubmitButton = styled.input.attrs({
  type: 'submit',
  value: 'Submit'
})`
  margin: 1em;
  width: 50%;
  height: 3em;
  font-size: 1em;
  border: none;
  border-radius: 3px;
  background-color: #2a9d8f;
  color: #fff;
`;


export const materialStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

export const modalStyles = ({
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  },
  content: {
    top: '6em',
    left: '10em',
    right: '10em',
    bottom: '6em'
  }
});

export const selectStyles = ({
  menu: (provided) => ({ ...provided, zIndex: 9999})
});
