'use client'

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import ProductCardItem from "./ProductCardItem";
import Products from '../_mockData/Products'

const ProductList = () => {
    const [productList, SetProductList] = useState([])
    useEffect(() => {
        SetProductList(products)
    },[])
  return (
      <div>
          <h2 className="flex justify-between place-items-center font-bold text-xl">Featured <span className=""><Button className='bg-yellow-500 text-black font-bold'>View All</Button></span></h2>
          <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              { productList.map((product, index) => (
                  
                  <ProductCardItem product={product} key={index} />
              ))}</section>
    </div>
  )
}

export default ProductList