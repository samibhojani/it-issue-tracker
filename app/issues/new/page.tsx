"use client"

import { TextField, Button } from '@radix-ui/themes'
import SimpleMDE from 'react-simplemde-editor';
import { useForm, Controller,  } from 'react-hook-form'
import "easymde/dist/easymde.min.css";

interface issueForm {
    title: string;
    description: string;
}


const NewIssuePage =  ()=> {
    const {register, control,handleSubmit} = useForm <issueForm>();
    
  return (
    <>
    <form className='max-w-xl space-y-3' 
    onSubmit={handleSubmit((data) => console.log(data))}>
      <TextField.Root>
        <TextField.Input placeholder='Issue Title' {...register('title')}/>
      </TextField.Root>
        <Controller 
        name='description'
        control={control}
        render={({ field }) =>  <SimpleMDE placeholder='Issue Description' {...field }/>}
        />
      <Button>Submit New Issue</Button>
    </form>
    </>
  )
}

export default NewIssuePage
