import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';
import { Store } from 'lucide-react';
import Link from "next/link";

const Header = () => {
  return (
    <nav className='bg-green-700 p-12 flex place-items-center justify-around shadow-xl shadow-black'>
      <h1 className='underline font-extrabold text-2xl uppercase hover:scale-125'>
        Kenki store
      </h1>
      <ul className='flex gap-2 font-bold'>
        <li className=''>Home</li>
        <li className=''>Store</li>
        <li className=''>Explore</li>
      </ul>
      <section className='flex gap-6 place-items-center'>
        <Store size={30} />
        
        <Link href={'/dashboard'}>
        <Button className='bg-red-500 hover:scale-125 duration-75 ease-in-out shadow-xl shadow-black'>
          start selling
        </Button>
        </Link>
        <UserButton  />
      </section>
    </nav>
  );
};

export default Header;
