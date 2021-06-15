import React from 'react';
import './App.css';
import tw from 'twin.macro';
import { useForm } from "react-hook-form";

type FormValues = {
  firstName: string;
  LastName: string;
}

function App() {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm();

  const submitHandler = () => {

  }
  const errorHandler = () => {

  }

  return (<>
    <div className="max-w-1200p">
      <form onSubmit={handleSubmit(submitHandler, errorHandler)} className="max-w-1200p">
        <div className="flex flex-col ">
          <label htmlFor="FirstName">FirstName*</label>
          <input {...register('firstName', {
            pattern: /^[a-zA-Z]([a-z-A-Z]){2,6}$/,
            required: "Enter Fast Name",
          })} id='FirstName' />
          {errors.firstName && <p>{errors.firstName.message}</p>}
          <label htmlFor="LastName">Last Name*</label>
          <input id="LastName" {...register('LastName', {
            pattern: /^[A-Za-z]([a-zA-Z]){2,8}$/,
            required: "Enter Last Name"
          })}></input>
          {errors.firstName && <p>{errors.LastName.message}</p>}
          <label htmlFor="JobForm">Your Job Title</label>
          <input id="JobForm" {...register('JobForm',{
            required:"Enter The Title",
          })}></input>
          {errors.firstName && <p>{errors.firstName.message}</p>}
          <label htmlFor="E-mail">Cintact Email*</label>
          <input type="email"  id="E-mail" {...register('E-mail',{
            required:"Enter a valid E-mail ID",
            pattern:/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
          })} />
          {errors.firstName && <p>{errors.LastName.message}</p>}
          


        </div>
      </form>


    </div>
  </>);
}

export default App;
