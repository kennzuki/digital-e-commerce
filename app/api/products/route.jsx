import { NextResponse } from "next/server";

export async function POST(req) {

    //get formData
    const formData = await req.formData();
    const image=formData.get('image');
    const file=formData.get('file');
    const data = JSON.parse(formData.get('data'));
    console.log(image,file,data);
    
    //save product image to firebase storage
    //save product file/document
    //save formData along with URL into database


    return NextResponse.json({})
}