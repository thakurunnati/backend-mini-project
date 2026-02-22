import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function createPost() {
    const navigate= useNavigate()
    const handleSubmit= async(e)=>{
e.preventDefault()
const formData= new FormData(e.target)
axios.post("http://localhost:5000/create_p", formData)
.then((res)=>{
navigate("/feed")
})

    }

  return (
 <section className='create-post-section'>
<h1 >create post</h1>
<form onSubmit={handleSubmit}>
    <input type="file" name='image' accept='image/*'/>
    <input type="text" name='caption' placeholder='enter caption' required/>
    <button type='submit'>Submit</button>
</form>
 </section>
  )
}
