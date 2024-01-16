"use client";
import { useEffect, useState } from "react";
import "./../../../style.css";

export default function Page({ params }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  // const data=  await getUserList()
  //   let userdata= data[props.params.id-1]
  //     console.log(userdata)
  //     console.log(props.params.id)

  let id = params.id;
  console.log(id);


  useEffect(() => {
    userDetails();
  }, []);


  const userDetails = async () => {
    let data = await fetch(`http://localhost:3000/api/users/${id}`);

    data = await data.json();
    console.log("response", data);
    setName(data.result.name);
    setAge(data.result.age);
    setEmail(data.result.email);
  };



  const updateData = async () => {
    let result = await fetch(`http://localhost:3000/api/users/${id}`, {
      method: "PUT",
      body: JSON.stringify({ name, age, email }),
    });

    result = await result.json();
    console.log(result);

    if(result.success){
        alert("user information updated ")
    }else{
        alert("please try with valid input ")
    }
  };



  return (
    <>
      <div className="container">
        <h1>Update User</h1>
        <div className="form-group">
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label for="age">Age:</label>
          <input
            type="text"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            id="password"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            required
          />
        </div>

        <button className="btn" onClick={updateData}>Update</button>
      </div>
    </>
  );
}
