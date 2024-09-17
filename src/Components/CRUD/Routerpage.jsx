import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Get from './Get'
export default function Routerpage() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Get />} />
            {/* <Route path='/post' element={<Post />} /> */}
        </Routes>
        </BrowserRouter>
    </div>
  )
}
