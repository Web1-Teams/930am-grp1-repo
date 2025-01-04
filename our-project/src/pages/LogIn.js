import React from 'react';
import Form from './components/Form';
import Header from './components/Header'
import SubmitBtn from './components/SubmitBtn'
import Label from './components/Label'
import Button from './components/Button'

const LogIn = ({ name , link}) => {
  
    const fields = [
        { name: "email", label: "Email", type: "email", placeholder: " Enter your Email",require : true },
        { name: "password", label: "Password", type: "password", placeholder: " Enter your password" ,require : true},
      ];
      const handleFormSubmit = (formData) => {
        console.log("Form submitted with data:", formData);
      };
     
      return (
        <>
    
          <Header HeaderName="Log In" desc="log in with your Email and Password"/>
    
          <Form fields={fields} onSubmit={handleFormSubmit} />
          <br></br>
          <br></br>
          <SubmitBtn SubmitName="Log In"/>
          <br></br> 
          <br></br>     
          <Label labelName="Don't have an account? "/>
          <Button name="create new account" link="#sign in page link"/>
        </>
      );
};

export default LogIn;