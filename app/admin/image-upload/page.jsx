"use client"

import React, { useState } from 'react'

const imageUpload = () => {
const [file,setFile] = useState()
    const onSubmit=async(e)=>{
        e.preventDefault()
        if(!file){
            return;
        }

        try {
            const data = new FormData()
            data.set('file',file)
            
            const res = await fetch('/api/image-upload',{
                method: 'POST',
                body: data
            })

            if(!res.ok) throw new Error(await res.text())

        } catch (error) {
            console.log(error);
        }
    }

 
  return (
   <div>
    <form onSubmit={onSubmit}>
        <input type="file"
        accept='file'
        onChange={(e)=>setFile(e.target.files?.[0])}
        />
        <input type="submit" value={"Upload"} />
    </form>
   </div>
  )
}

export default imageUpload