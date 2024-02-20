import Image from 'next/image'
import React from 'react';
import Link from 'next/link';
import PageLayout from '@/includes/PageLayout';
import Head from 'next/head';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import data from '@/data';

const FAQ = () => {
  const {
    site,
    faq
  } = data;

  const [open, setOpen] = React.useState(1);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <PageLayout>
      <Head>
        <title>FAQ | {site.title}</title>
        <meta name="description" content={site.description} />
      </Head>
      <h1 className='text-white text-2xl title-page'>FAQ</h1>
      <div>
        {
          faq && faq.map((faq, index) => {
            return (
              <Accordion key={index} open={open === index + 1}>
                <AccordionHeader className='text-white hover:text-yellow-300 font-[spacemono]' onClick={() => handleOpen(index + 1)}>
                  <h2>{faq.question}</h2>
                </AccordionHeader>
                <AccordionBody className='text-white text-justify font-[monospace]'>
                  <p>{faq.answer}</p>
                </AccordionBody>
              </Accordion>
            )
            })
          }
      </div>
    </PageLayout>
  );
};

export default FAQ;
