import Footer from './Footer';
import NavbarDefault from './Navbar';
import { Inter } from 'next/font/google'
import PointerTrail from './PointerTrail';
import { useEffect, useState, useCallback } from 'react';
import { loadAll } from "@tsparticles/all"; 
import { loadParallaxMover } from '@tsparticles/move-parallax';
import { initParticlesEngine } from "@tsparticles/react";


export default function PageLayout({ children }) {
  const particlesLoaded = useCallback(async container => {
      await console.log(container);
  }, []);

  return (
    <div className={`font-[comicbook] bg-[url(/images/4789832.jpg)]
            bg-cover bg-center bg-fixed bg-no-repeat min-h-screen`}>
      <div className='backdrop-brightness-[.66] min-h-screen min-w-screen p-5'>
      <NavbarDefault />
      <main className='max-w-screen-2xl mx-auto py-5'>{children}</main>
      <Footer />
      </div>
      <PointerTrail particlesLoaded={particlesLoaded} />
    </div>
  )
}
