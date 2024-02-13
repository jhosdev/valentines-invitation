'use client'



import { useEffect } from 'react';
import { Envelope } from './components/envelope';
import { Flowers } from './components/flowers';

export default function Home() {
  useEffect(() => {
    document.getElementById("body_container")?.classList.remove("container");
  }, []);

  return (
    <>
      
      <main className="relative w-screen h-screen overflow-hidden flex flex-col justify-center items-center animate-fadeIn bg-black">

        <Flowers styles="" flowerPaddingTop={1000}/>

        <Envelope />
      </main>
    </>
  );
}
