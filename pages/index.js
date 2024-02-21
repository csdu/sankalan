import Image from 'next/image'
import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all"; 
import { loadParallaxMover } from '@tsparticles/move-parallax';
import data from '@/data';
import DotParticles from '@/includes/DotParticles';
import Link from 'next/link';
import Countdown from '@/includes/Countdown';


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
        src="/images/lines-1.svg"
        fill
        priority={true}
        quality={100}
        objectFit='cover'
      />

      <DotParticles particlesInit={true} particlesLoaded={particlesLoaded} />

      <div className="corner-nav-item top-left red">
        <Link href={'/about'}>about</Link>
      </div>
      <div className="corner-nav-item top-right blue">
        <Link href={'/events'}>events</Link>
      </div>
      <div className="corner-nav-item bottom-left orange">
        <Link href={'/sponsors'}>sponsors</Link>
      </div>
      <div className="corner-nav-item bottom-right green">
        <Link href={'/terms'}>Privacy Policy</Link>
      </div>

      <div className="landing-content lg:w-3/4 mx-auto lg:gap-x-20">
        <div className="left-content lg:w-1/4">
          <Countdown />
        </div>

        <div className="middle-content lg:w-1/2">
          <div className="sankalan-wrap mx-auto mt-[-1.66em] lg:mt-[-.5em]">
            <div className="glitch">
              Sankalan <span className='mt-[-9em]'>{site.year}</span>
            </div>
            <Link href={'/register'} className="inline-block lg:hidden main-button-homepage main-button mt-8"><span>register.now()</span></Link>
          </div>
        </div>

        <div className="right-content lg:w-1/4 mx-10">
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

          <Link href={'/register'} className="hidden lg:inline-block main-button-homepage main-button"><span>register.now()</span></Link>
        </div>

      </div>
    </main>
  )
}
