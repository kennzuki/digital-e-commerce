import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { NextResponse } from 'next/server';
import { storage } from '@/configs/firebaseConfig';
export async function POST(req) {
  //get formData
  const formData = await req.formData();
  const image = formData.get('image');
  const file = formData.get('file');
  const data = JSON.parse(formData.get('data'));
  console.log(image, file, data);

  //save product image to firebase storage
  const imageName = Date.now() + '.png';
  const storageRef = ref(storage, 'file/' + imageName);
  await uploadBytes(storageRef, image).then((snapshot) => {
    console.log('image uploaded');
  });
  const imageUrl = await getDownloadURL(storageRef); //get image url to put to database
  console.log(imageUrl);

    //save product file/document
    const fileName = Date.now().toString()
    const storageFileRef = ref(storage, 'file/' + fileName);
    await uploadBytes(storageRef, file).then((snapshot) => {
        console.log('file uploaded');
    });
    const fileUrl = await getDownloadURL(storageFileRef); //get image url to put to database
  console.log(fileUrl);
  //save formData along with URL into database

  return NextResponse.json({});
}
