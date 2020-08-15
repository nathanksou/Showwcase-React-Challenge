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

export const ListContainer = styled.div`
  flex: 3;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-right: 1em;
`;

export const EntryContainer = styled.div`
  margin: 1em;
  padding: 1em;
  border: 2px solid #2a9d8f;
  border-radius: 3px;
  text-align: left;
`;

export const Title = styled.div`
  font-weight: bold;
  margin-bottom: 0.5em;
`;

export const YearGrade = styled.div`
  font-size: 0.75em;
  display: flex;
  justify-content: space-between;
`;

export const Description = styled.div`
  font-size: 0.75em;
`;