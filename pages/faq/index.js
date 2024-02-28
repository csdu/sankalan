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
        <title>{`FAQ | ${site.title}`}</title>
        <meta name="description" content={site.description} />
        <meta property="og:title" content={'FAQ | ' + site.title}/>
        <meta property="og:description" content={site.description} />
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:title" content={'FAQ | ' + site.title} />
        <meta name="twitter:description" content={site.description} />
      </Head>
      <h1 className='text-black text-2xl title-page'>FAQ</h1>
      <div className="mx-auto">
        {
          faq && faq.map((faq, index) => {
            return (
              <Accordion key={index} open={open === index + 1}>
                <AccordionHeader className='text-white hover:text-sankalan-yellow  font-[comicbook] font-bold' onClick={() => handleOpen(index + 1)}>
                  <h2>{faq.question}</h2>
                </AccordionHeader>
                <AccordionBody className='text-white text-justify font-[comicbook] faq'>
                  <p dangerouslySetInnerHTML={{
                    __html: faq.answer
                  }}></p>
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
