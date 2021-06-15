import React from 'react'
import { useForm, useController } from "react-hook-form";
import './index.css';

const CheckComment = (props) => {

    const handleChange=(e)=>{
        console.log(e)
    }

    const { field, fieldState } = useController(props);
    return (
        <div className="w-full">
            <input className="border-gray-300 border-2 mt-2 my-4 w-full h-14 px-2 rounded-md " {...field} value={props.value} onChange={()=>handleChange()} placeholder="Ask a question, add a comment and collabortae" />
        </div>
    )
}

export default CheckComment
