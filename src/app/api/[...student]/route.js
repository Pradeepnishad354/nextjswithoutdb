import { NextResponse } from "next/server";

export async function GET( request,content){

  const studentDeatils=  content.params.student;
  console.log("student ",studentDeatils)
  
    return NextResponse.json({result:studentDeatils},{status:200})
}