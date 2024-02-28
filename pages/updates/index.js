import Image from 'next/image'

import data from '@/data';
import Link from 'next/link';
import PageLayout from '@/includes/PageLayout';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Spinner } from "@material-tailwind/react";
import { format } from 'date-fns';

const About = () => {
  const {
    site,
  } = data;

  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    fetch('/api/getUpdates')
      .then(response => response.json())
      .then(data => {
        setUpdates(data.reverse());
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [])

  return (
    <PageLayout>
      <Head>
        <title>{`Updates | ${site.title}`}</title>
        <meta name="description" content={site.description} />
        <meta property="og:title" content={'Updates | ' + site.title}/>
        <meta property="og:description" content={site.description} />
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:title" content={'Updates | ' + site.title} />
        <meta name="twitter:description" content={site.description} />
      </Head>
      <h1 className='text-black text-2xl title-page'>Updates</h1>
      <div className='container mx-auto text-white text-left flex flex-col gap-4 mt-10'>
        {
          updates && updates.map((update, index) => (
            <div key={index} className='bg-white p-4 rounded-lg'>
              <p className='text-black'>{update[0]}</p>
              {update[1] && <p className='mt-2 text-sankalan-blue text-sm'>{update[1]}</p>}
              {update[2] && <p className='text-sankalan-dark-blue text-xs'>Posted at {format(update[2], 'hh:mm bb \'on\' MMM dd yyyy')}</p>}
            </div>
          ))
        }
        {
          !updates.length && <div className='flex justify-center'>
            <Spinner color="white" className="h-10 w-10" />
          </div>
        }
      </div>
    </PageLayout>
  );
}
;

export default About; 
