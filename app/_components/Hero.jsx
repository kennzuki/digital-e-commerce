import { Button } from "@/components/ui/button";
import Image from "next/image";


const Hero = () => {
    return <div className='bg-yellow-400 p-10 lg:px-38'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-24 mx-auto">
            <div className="">
                <h1 className="text-5xl text-white uppercase font-extrabold">Speed up your creative workflow</h1>
                <p className="text-gray-200 mt-3">Join a growing filed of designers and makers from around the world</p>
                <section className="flex gap-4 mt-6 fontbold [&_Button]:hover:scale-105">
                    <Button>Explore</Button>
                    <Button>sell</Button>
                </section>
            </div>
            <div className="flex items-center justify-center">
                <img src='/pexels-hangphe-2661929.jpg' alt="pc" width={350} height={350}/>
            </div>
        </div>
        
  </div>;
};

export default Hero;
