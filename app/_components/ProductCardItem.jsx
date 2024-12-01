'use client'

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
Button

const ProductCardItem = ({product}) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <Image src={product?.image} width={300} height={300} alt="product image"/>
          <CardTitle>{product.name}</CardTitle>
          <CardDescription>{product.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>{product.price}</p>
          <p>Product Quantity: 10</p>
        </CardContent>
        <CardFooter className='md:flex justify-between mt-2'>
          <p className="">{product.user.name}</p>
          <Button className='mt-2'>Add to Cart</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default ProductCardItem