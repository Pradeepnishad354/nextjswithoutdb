import { user } from "@/util/db";
import { NextResponse } from "next/server";


export async function GET(request, content) {
 // const data = user;

 // console.log(content.params.id);

  const userData = user.filter((item) => item.id == content.params.id);
  return NextResponse.json(userData.length==0?{result:"No Data  Found",success:false}:{result:userData[0],success:true}, { status: 200 });
}



// update user 
export async function PUT(request,content){

    let payLoad= await request.json()
 
    console.log(payLoad)
 
    console.log(content.params.id)
 payLoad.id=content.params.id
if(!payLoad.name||!payLoad.age||!payLoad.email||!payLoad.id){

    return NextResponse.json({result:"data is  not valid",success:false})
}


    return NextResponse.json({result:payLoad,success:true},{status:200})
 
 
 
 }

 //delete user


 export async function DELETE(request,content){


   let id= content.params.id;

   if(id){
    return NextResponse.json({result:'user deleted',success:true},{status:200})
   }else{
    return NextResponse.json({result:'Internal error ',success:false},{status:500})

   }
 }

