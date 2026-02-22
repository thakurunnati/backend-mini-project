import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import CreatePost from './pages/createPost'
import Feed from './pages/feed'
export default function App() {
  return (
    <BrowserRouter>
   <Routes>
    <Route path='/create-post' element={<CreatePost/>}/>
    <Route path='/feed' element={<Feed/>}/>
     
   </Routes>
    </BrowserRouter>
  )
}
