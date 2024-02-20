import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { loadSlim } from "tsparticles-slim"; 
import Head from 'next/head';

import data from '@/data';
import RotatingCircles from '@/includes/RotatingCircles';
import DotParticles from '@/includes/DotParticles';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {
    site,
    contact
  } = data;

  const [days, setDays] = useState(0);
  const [hrs, setHrs] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);

  const particlesInit = useCallback(async engine => {
      await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
      await console.log(container);
  }, []);

  const dd = `${site.month} ${site.day1} ${site.year} ${site.time}`;
  const deadline = new Date(dd).getTime();

  const setCounterValue = (days, hrs, mins, secs) => {
    setDays(days);
    setHrs(hrs);
    setMins(mins);
    setSecs(secs);
  }
  
  useEffect(() => {
    const svg = document.getElementById("circles");
    const groups = svg.getElementsByTagName("g");
    
    const x = setInterval(function() {
      const now = new Date().getTime();
      const t = deadline - now;
      const days = Math.floor(t / (1000 * 60 * 60 * 24));
      const hrs = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((t % (1000 * 60)) / 1000);

      setCounterValue(days, hrs, mins, secs);

      if (t < 0) {
        clearInterval(x);
        setCounterValue(0, 0, 0, 0);
      }
    }, 1000);

  });

  return (
    <main
      className={`${inter.className}`}
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

      <DotParticles particlesInit={particlesInit} particlesLoaded={particlesLoaded} />

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

      <div className="landing-content">
        <div className="left-content">
          <div className="countdown">
            <div className="counter-section">
              <div className="counter-wrap">
                <div className="counter-container">
                  <div className="counter-box">
                    <p className="counter-time days">{days}</p>
                    <p className="counter-tag">days</p>
                  </div>
                  <div className="counter-box">
                    <p className="counter-time hrs">{hrs}</p>
                    <p className="counter-tag">hrs</p>
                  </div>
                  <div className="counter-box">
                    <p className="counter-time mins">{mins}</p>
                    <p className="counter-tag">mins</p>
                  </div>
                  <div className="counter-box">
                    <p className="counter-time secs">{secs}</p>
                    <p className="counter-tag">secs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="middle-content">
          <div className="sankalan-wrap">
            <div className="glitch">Sankalan<br/><span className='mt-0'>{site.year}</span></div>
          </div>

          <motion.div className="rotating-animation" whileHover={{scale: 1.1}}>
            <RotatingCircles />
          </motion.div>
        </div>

        <div className="right-content">
          <div className='date'>coming soon</div>
          <div className="coordinates"><a target="_blank" href={contact.googleLocation}>{ contact.coordinates }</a></div>
          <div className="options">
            <div>
              <a target="_blank">schedule</a>
            </div>
            <div><a >meet the team</a></div>
            <div><Link href={'/faq'} className='hover:text-pink-300'>questions?</Link></div>
          </div>
          <div className="button-last mt-8">
            <Link href={'/register'} className="main-button"><span>register.now()</span></Link>
          </div>
        </div>

      </div>
    </main>
  )
}
