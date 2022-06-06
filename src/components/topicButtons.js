import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import SearchContext from './searchContext';
const Button = styled.button`
  /* Same as above */
`;
const ButtonToggle = styled(Button)`
  opacity: 0.6;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
`;
const types = ['Travel', 'Cars', 'Wildlife', 'Technology','Other'];

const TopicButtons= ()=> {
  const {topic, setTopic} = useContext(SearchContext)
  const initialValues = {searchTopic: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [active, setActive] = useState(types[0]);
  const [showOther, setShowOther] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSearch= (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setFormErrors(validate(formValues));
  }
  const validate = (values) => {
    const errors = {};
    if (!values.searchTopic) {
      errors.name = "Search Topic required!";
    }
    return errors;
  }
  useEffect(() => {
    console.log('rendering topicButtons');   
    
   }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setTopic(value);
  }
  const setToggle = (type)=> {
    setActive(type)
    console.log('selected type = ', type)
    if(type === 'Other'){
      setShowOther(true)
    }
    else {
      setShowOther(false)
      setTopic(type);
    }
  }
  return (
    <>
     <ButtonGroup>
      {types.map(type => (
        <ButtonToggle
          key={type}
          active={active === type}
          onClick={() => setToggle(type)}>
          {type}
        </ButtonToggle>
      ))}
    </ButtonGroup>
    {
      showOther? 
      <div className="field">
      <label>Search Topic: </label>
      <input
        type="text"
        name="searchTopic"
        placeholder="Enter Topic"
        value={formValues.searchTopic}
        onChange={handleChange}
      />
    </div>
      : null
    }
    </>   
  );
}
export default TopicButtons;

