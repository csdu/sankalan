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
        <title>{`Team | ${site.title}`}</title>
        <meta name="description" content={site.description} />
        <meta property="og:title" content={'Team | ' + site.title}/>
        <meta property="og:description" content={site.description} />
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:title" content={'Team | ' + site.title} />
        <meta name="twitter:description" content={site.description} />
      </Head>
      <h1 className='text-black text-2xl mb-8 title-page'>Team</h1>

      {
        teams.map((team, index) => (
          <div key={index} className='container mx-auto mb-12'>
            <h2 className=' lg:text-2xl font-medium uppercase mb-8 title-event-page' dangerouslySetInnerHTML={{
              __html: team.category
            }}></h2>
            <div className='container flex flex-wrap lg:gap-x-8 gap-y-12 lg:justify-center items-center my-16 mx-auto'>
              {team.members?.map((item, index) => (
                <ProfileCard key={index} data={item} />
              ))}
            </div>
          </div>
        ))
      }        
      
    </PageLayout>
  );
}
