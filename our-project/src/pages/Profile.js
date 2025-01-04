import React, {  useState } from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header'
import SubmitBtn from './components/SubmitBtn'
import Select from './components/Select'

const Profile = ()=>{
    const fields = [
        { name: "firstName", label: "First name ", type: "text" },
        { name: "lastName", label: "Last name ", type: "text"},
        { name: "company", label: "Company ", type: "text"},
        { name: "fAddress", label: "First address ", type: "text"},
        { name: "sAddress", label: "Another address ", type: "text"},
        { name: "city" , label: "City" , type : "select" , component: Select },
        { name: "mailbox", label: "Mailbox", type: "text" },
        { name: "country", label: "Country ", type: "text" , value :"Palestine" },
      ];
    
      const initialFormData = {};
      fields.forEach((field) => { initialFormData[field.name] = field.value || "";
      });
    
      const [formData, setFormData] = useState(initialFormData);
    
    const saveChangesHandler = () => {
      console.log("Page Submitted", formData);
    };
    
    const CancelHandler = () => {
      setFormData(initialFormData); // Reset form
    };
    
      return (
    
        <div className="App"> 
            <Header HeaderName="Create New Account" />
                    
                          <Form fields={fields} onSubmit={saveChangesHandler} />
                          <br></br> 
                          <br></br>     
                          <div className="mb-8 space-x-10">
                            <SubmitBtn SubmitName="Save changes" onSubmit={saveChangesHandler}/>
                            <SubmitBtn SubmitName="Cancel" onSubmit={CancelHandler} />
                         </div>
    
        </div>
    
      );
    }
    export default Profile;
    