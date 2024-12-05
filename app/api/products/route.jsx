import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { NextResponse } from 'next/server';
import { storage } from '@/configs/firebaseConfig';
import { productsTable } from '@/configs/schema';
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
  const fileName = Date.now().toString();
  const storageFileRef = ref(storage, 'file/' + fileName);
  await uploadBytes(storageRef, file).then((snapshot) => {
    console.log('file uploaded');
  });
  const fileUrl = await getDownloadURL(storageFileRef); //get image url to put to database
  console.log(fileUrl);
  //save formData along with URL into database
  const result = await db
    .insert(productsTable)
    .values({
      title: data?.title,
      category: data?.category,
      description: data?.description,
      price: data?.price,
      imageUrl: imageUrl,
      fileUrl: fileUrl,
      about: data?.about,
      message: data?.message,
      createdAt: data?.userEmail,
    })
    .returning(productsTable);

  return NextResponse.json(result);
}

export async function GET() {
  // get all products from database
  const { searchParams } = new URL(req.url);
  const email = searchParams.get('email');

  const result = await db
    .select()
    .from(productsTable)
    .where(eq(productsTable.createdBy, email)).order(desc(productsTable.id)); //producttable matches with user email and arrange in descending order

  return NextResponse.json(result);
}
