import Image from 'next/image'

import data from '@/data';
import Link from 'next/link';
import PageLayout from '@/includes/PageLayout';
import Head from 'next/head';
import ProfileCard from '@/includes/ProfileCard';


export default function Events() {
  const {
    site,
    teams
  } = data;

  return (
    <PageLayout>
      <Head>
        <title>Team | {site.title}</title>
        <meta name="description" content={site.description} />
      </Head>
      <h1 className='text-black text-2xl mb-8 title-page'>Team</h1>
      <div className='container flex flex-wrap lg:gap-x-12 gap-y-12 lg:justify-center items-center my-16 mx-auto'>
        {teams.map((item, index) => (
          <ProfileCard key={index} data={item} />
        ))}
      </div>
    </PageLayout>
  );
}
