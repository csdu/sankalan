import Image from 'next/image'

import data from '@/data';
import Link from 'next/link';
import PageLayout from '@/includes/PageLayout';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Spinner } from "@material-tailwind/react";

const About = () => {
  const {
    site,
  } = data;

  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    fetch('/api/getUpdates')
      .then(response => response.json())
      .then(data => {
        setUpdates(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [])

  return (
    <PageLayout>
      <Head>
        <title>Announcements | {site.title}</title>
        <meta name="description" content={site.description} />
      </Head>
      <h1 className='text-white text-2xl title-page'>Announcements</h1>
      <div className='container mx-auto text-white text-left flex flex-col gap-4 mt-10'>
        {
          updates && updates.map((update, index) => (
            <div key={index} className='bg-purple-800 p-4 rounded-lg'>
              <p>{update[0]}</p>
              <p className='mt-2 text-pink-100 text-sm'>{update[1]}</p>
            </div>
          ))
        }
        {
          !updates.length && <div className='flex justify-center'>
            <Spinner color="pink" className="h-10 w-10" />
          </div>
        }
      </div>
    </PageLayout>
  );
}
;

export default About; 
