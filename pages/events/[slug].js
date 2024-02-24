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

const EventDetailPage = ({ _eventSlug }) => {
  const router = useRouter();

  const event = data.events.map(e => e.events).flat().find((event) => event.slug === _eventSlug);

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
              <title >{event.name.replace(/<\/?[^>]+(>|$)/g, "")} | {site.title}</title>
              <meta name="description" content={site.description} />
              <meta property="og:title" content={event.name.replace(/<\/?[^>]+(>|$)/g, "") + ' | ' + site.title}/>
              <meta property="og:description" content={site.description} />
              <meta name="twitter:card" content="summary"/>
              <meta name="twitter:title" content={event.name.replace(/<\/?[^>]+(>|$)/g, "") + ' | ' + site.title} />
              <meta name="twitter:description" content={site.description} />
            </Head>
            <div className='container text-center mx-auto'>
              <h1 className='text-black text-2xl inline-block title-event-page' dangerouslySetInnerHTML={{
                __html: event.name
              }}></h1>
               <p className='text-sankalan-accent-yellow mt-[-.5em] text-lg'>{event.description}</p>
              <div className='container flex flex-col gap-4 gap-y-12 justify-between my-4 mx-auto text-start'></div>
              <div className='container flex flex-col gap-4 gap-y-12 justify-between my-4 mx-auto text-start'>
                <div className='col-span-2'>
                  {event.description_paragraphs.map((paragraph, index) => (
                    <p key={index} className='text-white mb-4'
                      dangerouslySetInnerHTML={{
                        __html: paragraph
                      }}
                    ></p>
                  ))}
                </div>

                {event.externalRegistrationUrl ? (
                    <div className='text-center mt-[-.5em] mb-4 hover:scale-110 transition'>
                      <Link href={event.externalRegistrationUrl} target='_blank' className='shadow-xl uppercase border-white border-4 transition hover:scale-110 text-white from-sankalan-accent-green to-sankalan-accent-blue bg-gradient-to-r text-xl
                      hover:bg-white font-bold p-2 lg:px-4 focus:outline-none focus:shadow-outline duration-300 ease-in-out'>APPLY ON {event.externalRegistrationProvider}</Link>
                    </div>
                  ) : (
                    <div className='text-center mt-[-.5em] hover:scale-110 transition'>
                      <Link href={`/register?event=${event.slug}`} target='_blank' className='shadow-xl uppercase border-white border-4 transition hover:scale-110 text-white from-sankalan-accent-green to-sankalan-accent-blue bg-gradient-to-r text-xl
                      hover:bg-white font-bold p-2 lg:px-4 focus:outline-none focus:shadow-outline duration-300 ease-in-out'>REGISTER NOW <span className='hidden lg:inline-block'> FOR {event?.name.replace(/<\/?[^>]+(>|$)/g, "").toUpperCase()}</span></Link>
                    </div>
                  )}
                
                {event.image !== 'TBA' && (<Image 
                  src={event.image} alt={event.name} 
                  width={1024} height={1024} className='lg:w-1/2 mx-auto h-auto'
                  blurDataURL={`/_next/image?url=${event.image}&w=16&q=75`}
                  placeholder='blur'
                />)}

                <div>
                  <Accordion open={open === 1}>
                    <AccordionHeader className='text-white hover:text-sankalan-yellow font-[comicbook]' onClick={() => handleOpen(1)}>Rules</AccordionHeader>
                    <AccordionBody className='text-white font-[comicbook]'>
                      {event.rules.map((paragraph, index) => (
                        <p key={index} className='text-white mb-1'
                          dangerouslySetInnerHTML={{
                            __html: paragraph
                          }}
                        ></p>
                      ))}
                    </AccordionBody>
                  </Accordion>
                  <Accordion open={open === 2}>
                    <AccordionHeader className='text-white hover:text-sankalan-yellow font-[comicbook]' onClick={() => handleOpen(2)}>
                      Event Details
                    </AccordionHeader>
                    <AccordionBody className='text-white font-[comicbook]'>
                      <p className='text-white mb-1'><span className='font-medium'>Date:</span> {format(event.date + ' ' + event.time + 'Z+05:30', "LLLL do, yyyy")}
                       {event.date2 ? ' - ' + format(event.date2 + ' ' + event.time2 + 'Z+05:30', "LLLL do, yyyy") : ''}
                       &nbsp;(Tentative)</p>
                      <p className='text-white mb-1'><span className='font-medium'>Time:</span> {format(event.date + ' ' + event.time + 'Z+05:30', "hh:mm b")} 
                       {event.date2 ? ' - ' + format(event.date2 + ' ' + event.time2 + 'Z+05:30', "hh:mm b") : ''}
                       &nbsp;(Tentative)</p>
                      <p className='text-white mb-1'><span className='font-medium'>Location:</span> {event.location + ' (Tentative)' || "TBA"}</p>
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
                            {organizer.email && organizer.email !== 'TBA' && <p className='text-sankalan-yellow mb-1'><a href={'mailto:' + organizer.email}>{organizer.email}</a></p>}
                            {organizer.phone && organizer.phone !== 'TBA' && <p className='text-white mb-1'><a href={'https://wa.me/91' + organizer.phone}>+91-{organizer.phone}</a></p>}
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

export async function getStaticPaths() {
  const events = data.events.map(e => e.events).flat();
  const paths = events.map((event) => ({
    params: { slug: event.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      _eventSlug: params.slug,
    },
  };
}
