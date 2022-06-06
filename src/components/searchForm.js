import React from 'react'
import './searchBar.css'
import { useState, useEffect } from "react"
import "../App.css";
import axios from 'axios'
import TopicButtons from './topicButtons'
import SearchContext from './searchContext'
import ImageContext from './imageContext'
import ImageList from './imageList'
const API_KEY = process.env.REACT_APP_API_KEY;
const url = 'https://api.unsplash.com/search/photos'
const SearchForm = () =>{
  const initialValues = { firstName: "", surname: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [topic, setTopic] = useState('');
  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }
   const handleSearch= (e) => {
    e.preventDefault()
    console.log('handleSearch = ', e)
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }
  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "First Name is required!";
    }
    if (!values.surname) {
        errors.surname = "Surname is required!";
    } 
    return errors;
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues)
    }
  }, [formErrors]);
  useEffect(() => {
    console.log('topic= ', topic)
    if (Object.keys(formErrors).length === 0 && isSubmit && topic) {
      onSearch()
    }
  }, [isSubmit]);
  const onSearch = async() => {
    try {
      console.log('topic = ', topic)
      const response = await axios.get(url, {
        params: { query: topic},
        headers: {
            Authorization: `Client-ID ${API_KEY}`
        }})
      setImages(response.data.results)
    this.setState({ images: response.data.results })
    }
    catch {
      console.log('no Image found')
    }
  }
  return ( 
      <div className="container">
        <form onSubmit={handleSearch}>
          <h1>Search Image</h1>
          <div className="ui divider"></div>
          <div className="ui form">
            <div className="field">
              <label>FirstName: </label>
              <input
                type="text"
                name="firstName"
                placeholder="FirstName"
                value={formValues.firstName}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.firstName}</p>
            <div className="field">
              <label>Surname: </label>
              <input
                type="text"
                name="surname"
                placeholder="surname"
                value={formValues.surname}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.surname}</p>
            <SearchContext.Provider value = {{topic, setTopic}}>
              <TopicButtons />       
            </SearchContext.Provider>

            <button onClick={searchButtonHandler} className="fluid ui button blue">Search</button>
          </div>
        </form>
        <br></br>
        <div>
        <span>Found: {images.length} images</span>
        <ImageContext.Provider value = {{images}}>
             <ImageList />
        </ImageContext.Provider>
        </div>
      </div>
  );   
}
export default SearchForm;

