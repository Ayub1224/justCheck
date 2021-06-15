import React from 'react'
import { useForm } from "react-hook-form";
import '../index.css';
import FormControl from './StyledComp/Interface'

type Iforgot = {
    Email: string;
}


const ForgotPassword = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Iforgot>({
        defaultValues: {
            Email: ""
        }
    }
    )

    const SubmitHandler = (data: any) => {
        console.log(data)
    }

    return (
      <form onSubmit={handleSubmit(onsubmit)}>
          <FormControl>
              
          </FormControl>
      </form>
    )
}

export default ForgotPassword

// Inline-block px-5 py-3 rounded-lg shadow-lg bg-indigo-500 hover:bg0indigo-400 hover:-translate-y-.5 focus:outline-none focus:ring-offset-2 focus:ring-indigo-500 focys:ring-opacity-50 transform transition text-white uppercase tracking-wider font-semibold text-base text:sm sm:text-base.  

// transform translate-x--1/2 translate-y--1/2
