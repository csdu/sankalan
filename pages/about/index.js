import Image from 'next/image'

import data from '@/data';
import Link from 'next/link';
import PageLayout from '@/includes/PageLayout';
import Head from 'next/head';

const About = () => {
  const {
    site,
    contact
  } = data;

  return (
    <PageLayout>
      <Head>
        <title>About | {site.title}</title>
        <meta name="description" content={site.description} />
      </Head>
      <h1 className='text-black text-2xl title-page'>About</h1>
      <div className='container mx-auto text-white text-left flex flex-col gap-4 mt-10'>
        <p>Sankalan is the illustrious annual fest organized by the Department of Computer Science, University of Delhi. Embarking on its 20th voyage, this two-day extravaganza epitomizes a diverse array of technical marvels and non-technical wonders to discover. It beckons both seasoned experts and newcomers to share in its brilliance. From riveting coding competitions to captivating artistic events, Sankalan offers everyone a platform to showcase their talents and explore the frontiers of technology and art. </p>

        <p>Amidst the joyful festivities, attendees will find themselves enveloped in an aura of creativity and community, forging lasting memories and fostering new connections. Join us as we celebrate two decades of excellence and embark on a journey to shape the future at Sankalan, where dreams transcend into reality and innovation knows no bounds.</p>
      </div>
    </PageLayout>
  );
}
;

export default About; 
