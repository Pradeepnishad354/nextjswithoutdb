"use client"
import { useState } from 'react'
import './../style.css'

export default function Page(){

    const [name,setName]=useState("");
    const [age,setAge]=useState("");

    const [email,setEmail]=useState("");


    //
    const  addUser= async ()=>{

  console.log(name,age ,email)
    
   let response=await fetch("http://localhost:3000/api/users",{
    method:"POST",
    body:JSON.stringify({name,age,email})
   });

   response=await response.json();
   console.log(response)

      

    }

    

    return (
        <>
        <div className="container">
        <h1>Add User</h1>
           <div className="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" onChange={(e)=>setName(e.target.value)} required/>
        </div>
        <div className="form-group">
            <label for="age">Age:</label>
            <input type="text" id="age" name="age" onChange={(e)=>setAge(e.target.value)} required/>
        </div>
        <div className="form-group">
            <label for="email">Email:</label>
            <input type="email" id="password" onChange={(e)=>setEmail(e.target.value)} name="email" required/>
        </div>

        <button className='btn' onClick={addUser}>Add</button>
        
        </div>
        </>
    )
}