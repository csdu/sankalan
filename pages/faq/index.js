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

  return (
    <PageLayout>
      <Head>
        <title>FAQ | {site.title}</title>
        <meta name="description" content={site.description} />
      </Head>
      <h1 className='text-white text-2xl title-page'>FAQ</h1>
      <div className="mx-auto">
        {
          faq && faq.map((faq, index) => {
            return (
              <Accordion key={index} open={true}>
                <AccordionHeader className='text-white hover:text-pink-300 font-[spacemono]'>
                  <h2>{faq.question}</h2>
                </AccordionHeader>
                <AccordionBody className='text-white text-justify font-[monospace] faq'>
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
