import React from 'react'
import { useForm, useController } from "react-hook-form";
import './index.css';
import CheckComment from './CheckComment'

type Inputs = {
    Comments: string;
    Files: string;
    comment2:string;
  }

export const CommentSection = () => {
    const { register, control, handleSubmit, formState: { errors } } = useForm<Inputs>({
        defaultValues:{
            Comments:""
        },
        mode:"onChange"
    });

    const submitHandler = (data:any) => {
        console.log( data)

    }

    return (
        <div className="w-screen  border-2 border-black mx-auto relative">
            <form onSubmit={handleSubmit(submitHandler)}>
                <div className="mx-auto w-3/4 mt-4  relative border-black flex flex-col justify-center">
                    <label className="mb-2" >Comments</label>
                    <input className="border-gray-300 border-2 mt-2 my-4 h-14 px-2 rounded-md" {...register('Comments', {
                        required: "Need to type something",
                    })} placeholder="Ask a question, add a comment and collabortae" id='Comments' />
                    {errors.Comments && <p className="text-red-600 my-2">{errors.Comments.message}</p>}
                    <input type="file" {...register('Files', {
                        required: "Enter the file"
                    })} />
                    {errors.Files && <p className="text-red-600 my-2">{errors.Files.message}</p>}

                    <CheckComment control={control} name="comment2" rules={{ required: true }} />

                    <div className="flex justify-end border-none"><button type="submit" className="w-24 bg-green-400 rounded-md px-4 py-3 my-4  border-gray-500">Post</button></div>
                </div>
            </form>
        </div>
    )
}