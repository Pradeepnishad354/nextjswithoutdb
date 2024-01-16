"use client"
export default function DeleteUser(props) {
  console.log(props.id);

  let id=props.id

  const deleteUser= async (id)=>{

  let result=  await fetch(`http://localhost:3000/api/users/${id}`,{
        method:"DELETE"
    });

  result=  await result.json();

  if(result.success){
    alert("user deleted")
  }else{
    alert("inetrnal error")
  }


  }

  return (
    <>
      <button className="test" onClick={()=>deleteUser()}>Delete</button>
    </>
  );
}
