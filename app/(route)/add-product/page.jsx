import React from 'react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from "@/components/ui/button";
import ImageUpload from "./_components/ImageUpload";

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
  return (
    <div className='mt-12 px-32'>
      <h2 className='text-2xl font-bold'>Add New Product</h2>
      <p className=''>Start adding product details to sell your items</p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 py-8'>
              {/* left */}
              <section className='flex flex-col gap-5'>
                  <ImageUpload />
                  <h4 className="">Upload file of product to sell</h4>
                  <Input type="file" name='file' />
                  
                  <article className='mb-4'>
                  <h4 className="font-bold">Message to user</h4>
            <Textarea
              name='description'
              placeholder='write thank you msg to user'
            />
          </article>

              </section>
              {/* right */}
        <section className='[&_h4]:font-medium [&_h4]:text-xl'>
          <article className='mb-4'>
            <h4 className=''>Product Title</h4>
            <Input Placeholder='UI Kit in figma' name='title' />
          </article>
          <article className='mb-4'>
            <h4 className=''>Product Title</h4>
            <Input type='number' Placeholder='9.99' name='price' />
          </article>
                  <article className='mb-4'>
                      <h4 className="font-bold">Category</h4>
            <Select>
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
                  <h4 className="font-bold">Description</h4>
            <Textarea
              name='description'
              placeholder='Add product description'
            />
          </article>
                  <article className='mb-4'>
                  <h4 className="font-bold">About Product(Optional)</h4>
            <Textarea name='about' placeholder='Add product information' />
                  </article>
                  <Button className='w-full'>Add Product</Button>
        </section>
      </div>
    </div>
  );
};

export default AddProduct;
