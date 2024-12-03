'use client'

import { Button } from '@/components/ui/button';
import Link from "next/link";
import { useState } from "react";

const UserListing = () => {
  const [listing,setListing] =useState([])

  return (
    <div>
          <h2 className='font-bold text-xl flex justify-between items-center'>Listing <Link href={'/add-product'}> <Button className='capitalize'>+Add new product</Button></Link></h2>
          <section className="">
              {listing?.length===0&& <h2>No listing available</h2>}
          </section>
      
    </div>
  );
};

export default UserListing;
