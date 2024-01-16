import Link from "next/link";
import './../style.css'
import DeleteUser from "@/util/DeleteUser";
export async function getUserList() {
  let user = await fetch("http://localhost:3000/api/users");

  let data = await user.json();

  return data;
}

export default async function User() {
  const data = await getUserList();

  console.log(data);

  console;
  return (
    <div>
      <h1> User List </h1>

      {data.map((item,index) => (
        <div >
        <h1 key={index}>
        <span ><Link href={`/users/${item.id}`}>{item.name}</Link></span>
        <span className="item"><Link href={`/users/${item.id}/update`}>Edit</Link></span> 
       
        <DeleteUser id={item.id}></DeleteUser>
       
      
        </h1>
        

   
        </div>
      
      ))}
    </div>
  );
}
