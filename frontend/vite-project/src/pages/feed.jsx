import React, { useState, useEffect } from 'react'
import axios from 'axios'
export default function feed() {
   const[posts, setPosts]= useState([])
   useEffect(()=>{
axios.get("http://localhost:5000/posts")
.then((res)=>{
    console.log(res.data)
    setPosts(res.data.posts)
})
   },[])
  return (
    <section className='feed-section'>
<h1>feed</h1>
{
    posts.length>0? (
        posts.map((post)=>(
<div key={post._id} className='post-card'>
<img src={post.image} alt={post.caption} />
<p>{post.caption}</p>
</div>
        ))
    ):(
        <h1>no posts available</h1>
    )
}
    </section>
  )
}
