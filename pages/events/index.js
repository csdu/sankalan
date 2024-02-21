import Image from 'next/image'

import data from '@/data';
import Link from 'next/link';
import PageLayout from '@/includes/PageLayout';
import EventCard from '@/includes/EventCard';
import Head from 'next/head';

const Events = () => {
  const {
    site,
    contact,
    events
  } = data;

  return (
    <PageLayout>
      <Head>
        <title>Events | {site.title}</title>
        <meta name="description" content={site.description} />
      </Head>
      <h1 className='text-black text-2xl title-page'>Events</h1>
      {
        events.map((item, index) => (
          <div key={index} className='mb-4'>
            <h2 className='text-sankalan-yellow text-2xl font-medium uppercase'>{item.category}</h2>
            <div className='container w-full flex flex-row flex-wrap gap-y-12 lg:justify-between mt-8 mb-12 mx-auto'>
              {item.events.map((item, index) => (
                <EventCard key={index} name={item.name} event={item.slug} />
              ))}
            </div>
          </div>
        ))
      }
      
    </PageLayout>
  );
}

export default Events;
