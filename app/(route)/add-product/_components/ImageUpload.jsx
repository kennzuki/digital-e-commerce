'use client'

import { MountainIcon } from "lucide-react";
import Image from 'next/image';
import React, { useState } from 'react';

const ImageUpload = () => {
const[image,setImage] = useState()
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const render = new FileReader()
        render.onloadend = (e) => {
            setImage(e.target.result)
        }
        render.readAsDataURL(file)
}

  return (
      <div>
          <h2 className="">Upload Product image</h2>
      <input type='file' name='image' id='imageUpload' className="hidden" onChange={handleFileChange} />
      <label htmlFor='ImageUpload'>
              <div className='p-10 flex justify-center items-center cursor-pointer border-dashed border-black bg-slate-200 border-2'>
                  {image?<Image src={image} width={300} height={300} alt="image" className="object-contain h-[200px]"/>: <MountainIcon className="opacity-35" size={40}/>}
       
        </div>
      </label>
    </div>
  );
};

export default ImageUpload;
