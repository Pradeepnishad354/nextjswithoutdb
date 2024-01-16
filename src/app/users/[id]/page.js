async function getUser(id){
    let data= await fetch(`http://localhost:3000/api/users/${id}`)
  data=await   data.json()
    return data.result;
}






// import { getUserList } from "../page"
export default async function Page({params}){

    const  data=await getUser(params.id)
    console.log(data)


// console.log(props.params.id)

// let currentId=props.params.id

//  const userData= await getUserList()
//  const data=userData[currentId-1]
//  console.log(data)

    return(
        <div>
        <h1>User Details</h1>
       <h2>Name: {data.name}</h2> 
        <h2>Age: {data.age}</h2>
        <h2>Email: {data.email}</h2>
        </div>
    )
}