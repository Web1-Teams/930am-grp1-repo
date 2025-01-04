import React, { useState } from "react"
import Input from "./Input";
import Label from "./Label";

const Form = ({ fields,  formData: externalFormData, setFormData: externalSetFormData, onSubmit }) => {
    const initialFormData = {};

    fields.forEach(field => { initialFormData[field.name] = ''; // Initialize each field with an empty string
    });

    const [internalFormData, internalSetFormData] = useState(initialFormData);

    const formData = externalFormData || internalFormData;
    const setFormData = externalSetFormData || internalSetFormData;
  

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
    

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(formData);
      };

      
      return (
        <div className="lg:w-full md:w-1/2 text-lg ">
        <form onSubmit={handleSubmit} className="space-y-4 " > 
          {fields.map((field) => (
            <>
           
            <div key={field.name} className="grid grid-cols-2 gap-2 gap-x-14   text-left">

            <Label labelName={field.label} />
            
              {field.type === "select" ? (
            // Render custom Select component
                <field.component
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
               />
          ) : (
            // Render Input component for other field types
            <Input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              placeholder={field.placeholder || ""}
              onChange={handleChange}
              required={field.required}
            />
          )}
            </div>
            </>
            
          ))}
     
        </form>
        </div>
      );
}
export default Form;