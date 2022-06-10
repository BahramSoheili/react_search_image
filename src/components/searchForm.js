import React from 'react'
import './searchBar.css'
import { useState, useEffect } from "react"
import "../App.css"
import axios from 'axios'
import TopicButtons from './topicButtons'
import SearchContext from './searchContext'
import ImageContext from './imageContext'
import ImageDialog from './imageDialog'
const API_KEY = process.env.REACT_APP_API_KEY
const url = 'https://api.unsplash.com/search/photos'
const SearchForm = () =>{
  const initialValues = { firstName: "", surname: "", otherTopic: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const [topic, setTopic] = useState('')
  const [images, setImages] = useState([])
  const [openModal, setOpenModal] = useState(true)


  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }
   const handleSearch= (e) => {
    e.preventDefault()
    setFormErrors(validate(formValues))
    if(e.nativeEvent.submitter.localName === 'input'){
      console.log('Search submit')
      setIsSubmit(true)
    }
    else {
      setIsSubmit(false)
    }
  }
  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "First Name is required!"
    }
    if (!values.surname) {
        errors.surname = "Surname is required!";
    }
    if (!values.otherTopic && topic === 'other') {
      errors.otherTopic = "Other Topic is required!"
  } 
    return errors
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues)
    }
  }, [formErrors])
  useEffect(() => {
    console.log('topic= ', topic)
    if (Object.keys(formErrors).length === 0 && isSubmit && topic) {
      onSearch()
    }
  }, [isSubmit])
  const onSearch = async() => {
    try {
      console.log('topic onSearch = ', topic)
      const response = await axios.get(url, {
        params: { query: topic},
        headers: {
            Authorization: `Client-ID ${API_KEY}`
        }})
      console.log('response: ', response.data.results)
      setImages(response.data.results)
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
            {    
              topic === 'other'? 
              <div>
                <div className="field">
                <br></br>
                <label>Other Topic: </label>
                <input
                  type="text"
                  name="otherTopic"
                  placeholder="Enter Topic"
                  value={formValues.otherTopic}
                  onChange={handleChange}/>
                </div>
                <p>{formErrors.otherTopic}</p>
              </div>
              : null
            }
            <br></br>
            <br></br>
            <input type="submit" label = "Search"/>
          </div>
        </form>
        <br></br>
        <div>
        {
          images.length > 0 && openModal? 
          <div>
            <ImageContext.Provider 
                 value = {{images, setImages, setOpenModal, setTopic}}>
              <ImageDialog  />
            </ImageContext.Provider>
          </div>
          :
          <span>No images</span>
        }
        </div>
      </div>
  );   
}
export default SearchForm;

