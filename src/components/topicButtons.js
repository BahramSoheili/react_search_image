import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import SearchContext from './searchContext';
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';


const radios = [
  { name: 'Travel', value: 'travel' },
  { name: 'Cars', value: 'cars' },
  { name: 'Wildlife', value: 'wildlife' },
  { name: 'Technology', value: 'technology' },
  { name: 'Other', value: 'other' }
];
const types = ['Travel', 'Cars', 'Wildlife', 'Technology','Other'];

const TopicButtons= ()=> {
  const {topic, setTopic, setOther} = useContext(SearchContext)
  const initialValues = {searchTopic: ""}
  const [formValues, setFormValues] = useState(initialValues)
  const [active, setActive] = useState(types[0]) 
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
    if(type != 'other'){
      setTopic(type);
      setOther(false);
    }
    else {
      setTopic('');
      setOther(true);
    }
  }
  return (
    <ToggleButtonGroup type="radio" name="topics">
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant="secondary"
            name="radio"
            value={radio.value}
            onChange={(e) => setToggle(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>

  );
}
export default TopicButtons;

