import { user } from "@/util/db";
import { NextResponse } from "next/server";

// get 
export async function GET(){
   const data=  user
    return NextResponse.json(data,{status:200})
}



// post 
export async function POST(request){
    
  let payLoad=await  request.json()
  console.log(payLoad)

if(!payLoad.name||!payLoad.age||!payLoad.email){

    return NextResponse.json({result:'require field not found',success:false},{status:400})
}

     return NextResponse.json({result:'new user created'},{status:201})
 }

//put


export async function PUT(request,content){

   let payLoad= await request.json()

   console.log(payLoad)

   console.log(content.params.id)

   return NextResponse.json({result:payLoad,success:true},{status:200})



}