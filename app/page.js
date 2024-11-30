
import Hero from "./_components/Hero";
import ProductList from "./_components/ProductList";

export default function Home() {
  return (
    <div className="p-12">
      <Hero />
      
      <div className="p-10 md:px-36 lg:px-48">
        <ProductList/>
      </div>
    </div>
  )
}