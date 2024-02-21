import Image from 'next/image'
import Link from 'next/link';
import Head from 'next/head';

import PageLayout from '@/includes/PageLayout';

import data from '@/data';
import { Card, CardHeader, Tooltip } from '@material-tailwind/react';

const Sponsors = () => {
  const {
    site,
    sponsors
  } = data;

  return (
    <PageLayout>
      <Head>
        <title>Sponsors | {site.title}</title>
        <meta name="description" content={site.description} />
      </Head>
      <h1 className='text-black text-2xl title-page'>Sponsors</h1>
        <h2 className=' lg:text-2xl font-medium uppercase mb-8 title-event-page'>Past Sponsors</h2>
        {Object.entries(sponsors).map(([type, sponsorType], index) => (
          <div className='m-8' key={index}>
            <h2 className='text-sankalan-green lg:text-2xl font-medium uppercase mb-8'>{sponsorType.title}</h2>
            <div className='flex flex-wrap gap-4 lg:gap-y-12 mt-2 mb-6 mx-auto'>
              {sponsorType.sponsors.map((sponsor, index) => (
                <Tooltip key={index} placement='bottom' content={sponsor.name}>              
                  <Card
                    shadow={true}
                    className="relative grid h-[10rem] w-full max-w-[10rem] items-center justify-center overflow-hidden text-center mx-auto cursor-pointer transition-transform transform hover:scale-105 duration-300 ease-in-out"
                  >
                    <CardHeader
                      floated={false}
                      shadow={true}
                      color="transparent"
                      className={`absolute inset-0 m-0 h-full w-full rounded bg-white bg-cover bg-cente flex items-center justify-center overflow-hidden text-center mx-auto cursor-pointer transition-transform transform hover:scale-105 duration-300 ease-in-out`}
                    >
                      <Image
                        src={'/images/sponsors/' + sponsor.image}
                        alt={sponsor.name}
                        className='w-full h-full p-6'
                        layout="responsive"
                        width={128}
                        height={128}
                      />
                    </CardHeader>
                  </Card>
                </Tooltip>                  
              ))}
            </div>
          </div>
        ))}
    </PageLayout>
  );
};

export default Sponsors;
