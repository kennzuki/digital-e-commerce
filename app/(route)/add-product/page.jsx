'use client'
import React, { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import ImageUpload from './_components/ImageUpload';
import axios from "axios";
import { useUser } from "@clerk/nextjs";

const AddProduct = () => {
  const categoryOptions = [
    'source kits',
    'UI Kits',
    'icons',
    'Documents',
    'Fonts',
    'Themes',
    'Videos',
    'illustrations',
    'Others',
  ];
  const [formData, setFormData] = useState([]);
  const {user}=useUser()
  useEffect(() => {
    setFormData({
      userEmail:user?.primaryEmailAddress?.emailAddress
    })
  },
    [user]
  )
  const handleChange = (fieldName, fieldValue) => {
      setFormData((prev) => ({ ...prev, [fieldName]: fieldValue }));
      console.log(formData);
      
    };
    const onAddProductBtn =async () => { 
        console.log(formData);
        const formDataObj = new FormData() 
        formDataObj.append('image',formData.image)
        formDataObj.append('file',formData.file)
        formDataObj.append('data', JSON.stringify(formData))
        
        const result = await axios.post('/api/products', formDataObj, {
            headers: {
              'Content-Type':'multipart/form-data'//passing json and file
            }
        })
    }

  return (
    <div className='mt-12 px-32'>
      <h2 className='text-2xl font-bold'>Add New Product</h2>
      <p className=''>Start adding product details to sell your items</p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 py-8'>
        {/* left */}
        <section className='flex flex-col gap-5'>
                  <ImageUpload onImageSelect={(e) => handleChange(e.target.name, e.target.files[0])} />
                  <div>
                  <h4 className=''>Upload file of product to sell</h4>
                  <Input type='file' name='file'onChange={(e)=>handleChange(e.target.name,e.target.files[0])} />
                  </div>
          

          <article className='mb-4'>
            <h4 className='font-bold'>Message to user</h4>
            <Textarea
              name='description'
                          placeholder='write thank you msg to user'
                          onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
          </article>
        </section>
        {/* right */}
        <section className='[&_h4]:font-medium [&_h4]:text-xl'>
          <article className='mb-4'>
            <h4 className=''>Product Title</h4>
            <Input Placeholder='UI Kit in figma' name='title' onChange={(e) => handleChange(e.target.name, e.target.value)}/>
          </article>
          <article className='mb-4'>
            <h4 className=''>Product Title</h4>
            <Input
              type='number'
              Placeholder='9.99'
              name='price'
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
          </article>
          <article className='mb-4'>
            <h4 className='font-bold'>Category</h4>
            <Select
              onValueChange={(value) => handleChange('category', value)}
            >
              <SelectTrigger className=''>
                <SelectValue placeholder='Select Category' />
              </SelectTrigger>
              <SelectContent>
                {categoryOptions.map((category, index) => (
                  <SelectItem
                    className='capitalize'
                    key={index}
                    value={category}
                  >
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </article>
          <article className='mb-4'>
            <h4 className='font-bold'>Description</h4>
            <Textarea
              name='description'
              placeholder='Add product description'
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
          </article>
          <article className='mb-4'>
            <h4 className='font-bold'>About Product(Optional)</h4>
            <Textarea
              name='about'
              placeholder='Add product information'
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
          </article>
          <Button onClick={onAddProductBtn} className='w-full'>Add Product</Button>
        </section>
      </div>
    </div>
  );
};

export default AddProduct;
