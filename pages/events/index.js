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
      <h1 className='text-white text-2xl title-page'>Events</h1>
      <div className='container grid grid-cols-2 gap-4 gap-y-12 justify-between my-12 mx-auto'>
        {events.map((item, index) => (
          <EventCard key={index} name={item.name} event={item.slug} />
        ))}
      </div>
    </PageLayout>
  );
}

export default Events;
