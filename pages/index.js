import Image from 'next/image'
import { useEffect, useState, useCallback } from 'react';
import Head from 'next/head';
import data from '@/data';
import DotParticles from '@/includes/DotParticles';
import Link from 'next/link';
import Countdown from '@/includes/Countdown';
import background from '@/public/images/4845746.jpg';
import logo from '@/public/images/sankalan2024logo.png';

export default function Home() {
  const {
    site,
    contact
  } = data;

  const particlesLoaded = useCallback(async container => {
      await console.log(container);
  }, []);

  return (
    <main
      className={`font-[comicbook] w-full`}
    >
      <Head>
        <title>{site.title}</title>
        <meta name="description" content={site.description} />
      </Head>
      <Image 
        alt='lines' 
        id="lines" 
        src={background}
        fill
        priority={true}
        objectFit='cover'
      />

      <DotParticles particlesInit={true} particlesLoaded={particlesLoaded} />

      <div className="corner-nav-item top-left red">
        <Link href={'/about'} className='p-2 bg-white shadow-ls border-[.25rem] border-black hover:text-white hover:bg-sankalan-red transition hover:scale-110 duration-300 ease-in-out'>about</Link>
      </div>

      <div className="corner-nav-item top-center red">
        <Link href={'/sponsors'} className='p-2 bg-white shadow-ls border-[.25rem] border-black hover:text-white hover:bg-black transition hover:scale-110 duration-300 ease-in-out'>sponsors</Link>
      </div>

      <div className="corner-nav-item top-right blue">
        <Link href={'/events'} className='p-2 bg-white shadow-ls border-[.25rem] border-black hover:text-white hover:bg-sankalan-blue transition hover:scale-110 duration-300 ease-in-out'>events</Link>
      </div>
      
      <div className="corner-nav-item bottom-left orange">
        <Link href={'/team'} className='p-2 bg-white shadow-ls border-[.25rem] border-black hover:text-white hover:bg-sankalan-accent-yellow transition hover:scale-110 duration-300 ease-in-out'>team@ducs</Link>
      </div>

      <div className="corner-nav-item bottom-center red">
        <Link onClick={() => alert('To be Announced')} href={'#'} className='p-2 bg-white shadow-ls border-[.25rem] border-black hover:text-white hover:bg-black transition hover:scale-110 duration-300 ease-in-out'>schedule</Link>
      </div>

      <div className="corner-nav-item bottom-right">
        <Link href={'/faq'} className='p-2 bg-white shadow-ls border-[.25rem] border-black hover:text-white hover:bg-sankalan-green transition hover:scale-110 duration-300 ease-in-out'>questions?</Link>
      </div>

      <Link href={'/terms'} className='hidden'>team</Link>

      <div className="landing-content lg:w-3/4 mx-auto lg:gap-x-20">
        {/* <div className="lg:absolute z-10">
          <div className='date'>
           
          </div>
          <div className="coordinates"><Link target="_blank" href={contact.googleLocation}>{ contact.coordinates }</Link></div>
        </div> */}

        <div className="middle-content lg:w-1/2">
          <div className="mx-auto">
              <Image 
                src={logo}
                alt={site.title}
                width={500}
                height={500}
                priority={true}
                className='w-2/3 lg:w-auto mx-auto cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out'
              />
              <a className="inline-block bg-gradient-to-r from-sankalan-dark-yellow to-sankalan-accent-red
               p-2 p-y-0 text-black hover:bg-sankalan-accent-yellow text-white mt-6
              hover:scale-110 transition-transform transition-colors duration-300 ease-in-out border-4 border-white font-[spacemono] text-xl font-bold
              lg:text-2xl lg:p-3 tracking-narrower
              ">
                <span 
                  style={
                    {
                      top: '-1px',
                      position: 'relative'
                    }
                  }
                  className=''
                >
                  COMING SOON<br />
                  <Countdown />
                </span>
              </a>
          </div>
        </div>

        {/* <div className="right-content lg:w-1/4 mx-10">
          <div className='date'>
            <p>{site.month} {site.day1} - {site.day2}</p>
          </div>
          <div className="coordinates"><Link target="_blank" href={contact.googleLocation}>{ contact.coordinates }</Link></div>
          <div className="options mb-5">
            <div>
              <a target="_blank">schedule</a>
            </div>
            <div><Link href={'/team'} >meet the team</Link></div>
            <div><Link href={'/faq'} className='hover:text-sankalan-yellow'>questions?</Link></div>
          </div>

          <Link href={'/register'} className="hidden lg:inline-block bg-gradient-to-r from-sankalan-dark-yellow to-sankalan-accent-red
               p-2 p-y-0 text-black hover:bg-sankalan-accent-yellow text-white uppercase w-full
              hover:scale-110 transition-transform transition-colors duration-300 ease-in-out border-4 border-white font-[spacemono] text-xl font-bold
              ">
                <span 
                  style={
                    {
                      top: '-1px',
                      position: 'relative'
                    }
                  }
                >register now</span>
          </Link>
        </div> */}

      </div>
    </main>
  )
}
