import Image from 'next/image'

import data from '@/data';
import Link from 'next/link';
import PageLayout from '@/includes/PageLayout';
import Head from 'next/head';
import ProfileCard from '@/includes/ProfileCard';


export default function Events() {
  const {
    site,
    contact
  } = data;

  const team = [
    {
      name: 'John Doe',
      position: 'President',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
    }, 
    {
      name: 'John Doe',
      position: 'Vice-President',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
    }, 
    {
      name: 'John Doe',
      position: 'Secretary',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
    }, 
    {
      name: 'John Doe',
      position: 'Treasurer',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
    }, 
    {
      name: 'John Doe',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
    }, 

    {
      name: 'John Doe',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
    },
    {
      name: 'John Doe',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
    }, 

    {
      name: 'John Doe',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
    }, 
  ]

  return (
    <PageLayout>
      <Head>
        <title>Team | {site.title}</title>
        <meta name="description" content={site.description} />
      </Head>
      <h1 className='text-white text-2xl mb-8 title-page'>Team</h1>
      <div className='container grid grid-cols-4 gap-4 gap-y-12 justify-between my-16 mx-auto'>
        {team.map((item, index) => (
          <ProfileCard key={index} data={item} className="" />
        ))}
      </div>
    </PageLayout>
  );
}
