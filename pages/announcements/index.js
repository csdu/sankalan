import Image from 'next/image'

import data from '@/data';
import Link from 'next/link';
import PageLayout from '@/includes/PageLayout';
import Head from 'next/head';
import { useEffect, useState } from 'react';

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
      <div className='container mx-auto text-white text-justify flex flex-col gap-4 mt-10'>
        {
          updates && updates.map((update, index) => (
            <div key={index} className='bg-purple-800 p-4 rounded-lg'>
              <p>{update}</p>
            </div>
          ))
        }
      </div>
    </PageLayout>
  );
}
;

export default About; 
