'use client';

import data from '@/data';
import React from 'react';
import PageLayout from '@/includes/PageLayout';
import Head from 'next/head';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Image from 'next/image';
import Link from 'next/link';

const EventDetailPage = () => {
  const router = useRouter();
  const eventSlug = router.query.slug;
  const event = data.events.map(e => e.events).flat().find((event) => event.slug === eventSlug);

  const {
    site,
    contact
  } = data;

  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <PageLayout>
      {event && (
        <>
            <Head>
              <title>{event.name} | {site.title}</title>
              <meta name="description" content={site.description} />
            </Head>
            <div className='container text-center mx-auto'>
              <h1 className='text-black text-2xl title-page'>{event.name}</h1>
              <p className='text-gray-400 mt-1'>{format(event.date + ' ' + event.time + 'Z+05:30', "LLLL Do, yyyy (EEEE) 'from' hh:mm b")}</p>
              <div className='container flex flex-col gap-4 gap-y-12 justify-between my-4 mx-auto text-start'>
                <div className='col-span-2'>
                  {event.description_paragraphs.map((paragraph, index) => (
                    <p key={index} className='text-white mb-4'>{paragraph}</p>
                  ))}
                </div>

                <div className='text-center mt-[-1.5em]'>
                  <Link href={`/register?event=${event.slug}`} target='_blank' className='bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>REGISTER NOW FOR {event?.name.toUpperCase()}</Link>
                </div>

                <Image 
                  src={event.image} alt={event.name} 
                  width={1024} height={1024} className='lg:w-1/2 mx-auto h-auto'
                  blurDataURL={`/_next/image?url=${event.image}&w=16&q=75`}
                  placeholder='blur'
                />

                <div>
                  <Accordion open={open === 1}>
                    <AccordionHeader className='text-white hover:text-sankalan-yellow font-[comicbook]' onClick={() => handleOpen(1)}>Rules</AccordionHeader>
                    <AccordionBody className='text-white font-[comicbook]'>
                      {event.rules.map((paragraph, index) => (
                        <p key={index} className='text-white mb-1'>{paragraph}</p>
                      ))}
                    </AccordionBody>
                  </Accordion>
                  <Accordion open={open === 2}>
                    <AccordionHeader className='text-white hover:text-sankalan-yellow font-[comicbook]' onClick={() => handleOpen(2)}>
                      Event Details
                    </AccordionHeader>
                    <AccordionBody className='text-white font-[comicbook]'>
                      <p className='text-white mb-1'><span className='font-medium'>Date:</span> {format(event.date + ' ' + event.time + 'Z+05:30', "LLLL Do, yyyy (EEEE)")}</p>
                      <p className='text-white mb-1'><span className='font-medium'>Time:</span> {format(event.date + ' ' + event.time + 'Z+05:30', "hh:mm b")}</p>
                      <p className='text-white mb-1'><span className='font-medium'>Location:</span> {event.location}</p>
                    </AccordionBody>
                  </Accordion>
                  <Accordion open={open === 3}>
                    <AccordionHeader className='text-white hover:text-sankalan-yellow font-[comicbook]' onClick={() => handleOpen(3)}>
                      Contact Details
                    </AccordionHeader>
                    <AccordionBody className='text-white lg:flex lg:gap-10 font-[comicbook]'>
                      {
                        event.organizers.map((organizer, index) => (
                          <div key={index} className='mb-4'>
                            <p className='text-white mb-1'><span className='font-medium'>{organizer.name}</span></p>
                            <p className='text-white mb-1'><a href={'mailto:' + organizer.email}>{organizer.email}</a></p>
                            {organizer.phone && <p className='text-white mb-1'><a href={'https://wa.me/91' + organizer.phone}>+91-{organizer.phone}</a></p>}
                          </div>
                        ))
                      }
                    </AccordionBody>
                  </Accordion>
                </div>
              </div>
            </div>
          </>
        )}
    </PageLayout>
  );
};

export default EventDetailPage;
