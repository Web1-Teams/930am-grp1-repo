import React, { useState } from "react"
import Form from './components/Form';
import Header from './components/Header'
import SubmitBtn from './components/SubmitBtn'
import Label from './components/Label'
import Button from './components/Button'
import Checkbox from './components/Checkbox'

const NewAccount = ()=>{
  const fields = [
     { name: "firstName", label: "Your first name ", type: "text" , require : true},
     { name: "lastName", label: "Your last name ", type: "text" ,require : true},
     { name: "email", label: "Your Email ", type: "email", placeholder: "  xxxxxxx@gmail.com" ,require : true},
     { name: "mobile", label: "Your mobile ", type: "tel", placeholder: "   059-0000-000" ,require : true},
     { name: "firstPassword", label: "Your password ", type: "password", placeholder: "  Write a strong password" ,require : true},
     { name: "secondPassword", label: "", type: "password", placeholder: "  Confirm your password" ,require : true},
   ];
 
   const handleFormSubmit = (formData) => {
     console.log("Form submitted with data:", formData);
   };

   const [checkBoxSelected, setCheckBoxSelected] = useState(null);
 
   const checkBoxOnChangeHandler = (checkboxName) => {
     if (checkBoxSelected === checkboxName) {
       setCheckBoxSelected(null); 
     } 
     else {
       setCheckBoxSelected(checkboxName); 
     }
   };

   return (

    <div>        
              <Header HeaderName="Create New Account" />
        
              <Form fields={fields} onSubmit={handleFormSubmit} />
              <br></br>
              <p>I agree to receive notifications - Emails or Messages</p>
              <div>
                <Checkbox name="YES" isChecked={checkBoxSelected === "YES"} onChange={() => checkBoxOnChangeHandler("YES")}/>
                <Checkbox name="NO" isChecked={checkBoxSelected=== "NO"} onChange={() => checkBoxOnChangeHandler("NO")}/>
              </div>
              <br></br>
              <SubmitBtn SubmitName="Create my account" onSubmit={handleFormSubmit}/>
              <br></br> 
              <br></br>     
              <Label labelName="Already have an account? "/>
              <Button name="log in" link="#log in page link"/>
            </div>
  );
}
export default NewAccount;