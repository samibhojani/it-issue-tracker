"use client"

import { TextField, Button, Callout, Text } from '@radix-ui/themes'
import SimpleMDE from 'react-simplemde-editor';
import { useForm, Controller,  } from 'react-hook-form'
import axios from 'axios';
import "easymde/dist/easymde.min.css";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { createIssueSchema } from '@/app/ValidationSchemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import ErrorMessage from '@/app/components/ErrorMessage';

type issueForm = z.infer<typeof createIssueSchema>;


const NewIssuePage =  ()=> {
    const router = useRouter();
    const {register, control, handleSubmit, formState: { errors } } = useForm <issueForm>({
        resolver: zodResolver(createIssueSchema)
    });

    const [error, setError] = useState('')    
  return (
    <div className='max-w-xl'>
        {error && (
        <Callout.Root color='red' className='mb-5'>
        <Callout.Text>{error}</Callout.Text>
        </Callout.Root>

        )}
    <form className='space-y-3' 
    onSubmit={handleSubmit(async (data) => {
        try {
            await axios.post('/api/issues', data)
            router.push('/issues')
            
        } catch (error) {
            setError('An unexpected error occured.')
        }
    })}>
      <TextField.Root>
        <TextField.Input placeholder='Issue Title' {...register('title')}/>
      </TextField.Root>
      <ErrorMessage>{errors.title?.message}</ErrorMessage>

        <Controller 
        name='description'
        control={control}
        render={({ field }) =>  <SimpleMDE placeholder='Issue Description' {...field }/>}
        />
      <ErrorMessage>{errors.description?.message}</ErrorMessage>
      <Button>Submit New Issue</Button>
    </form>
    </div>
  )
}

export default NewIssuePage
