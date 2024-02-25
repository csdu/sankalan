import Image from 'next/image'

import data from '@/data';
import Link from 'next/link';
import PageLayout from '@/includes/PageLayout';
import Head from 'next/head';
import ducsBuilding from "@/public/images/IMG_20220714_201932.jpg";

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
        <meta property="og:title" content={'About | ' + site.title}/>
        <meta property="og:description" content={site.description} />
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:title" content={'About | ' + site.title} />
        <meta name="twitter:description" content={site.description} />
      </Head>
      <h1 className='text-black text-2xl title-page'>About</h1>
      <div className='container mx-auto text-white text-justify flex flex-col gap-4 mt-10 md:px-6'>
        <p>SANKALAN is the illustrious annual fest organized by the Department of Computer Science, University of Delhi. Embarking on its 20th voyage, this two-day extravaganza epitomizes a diverse array of technical marvels and non-technical wonders to discover. It beckons both seasoned experts and newcomers to share in its brilliance. From riveting coding competitions to captivating artistic events, Sankalan offers everyone a platform to showcase their talents and explore the frontiers of technology and art. </p>

        <p>Amidst the joyful festivities, attendees will find themselves enveloped in an aura of creativity and community, forging lasting memories and fostering new connections. Join us as we celebrate two decades of excellence and embark on a journey to shape the future at Sankalan, where dreams transcend into reality and innovation knows no bounds.</p>

        <p>SANKALAN, meaning compilation, embodies the fusion of knowledge, talent, ideas, spirit, and, of course, code! Launched   in 2005, this annual two-day technical fest has evolved into a premier national event. A revered platform for technocrats, SANKALAN serves as the ultimate IT arena where participants from across the country showcase their skills in a diverse range of technical and non-technical events. It's a geek feast of unparalleled proportions.</p>

        <p>
          The Department of Computer Science, University of Delhi is one of the first university departments in India to offer a three-year Master of Computer Applications (MCA) programme and two-year Master of Science (M.Sc.) in CS programme at the post-graduate level. With a strength of more than 50 research scholars, the department continually strives to conduct cutting-edge research in all areas across CS.
        </p>
        
        <p>
          Our MCA programme aims to equip students with the core competence of developing high-quality production-grade software, while also cultivating the skillset to keep abreast with the latest state-of-the-art technologies. M.Sc. in CS, the flagship programme of our Department, aims at inculcating creative thinking. In addition to mastering foundational theoretical concepts and practical skills, the focus of this programme is to prepare students to conduct high-quality research, via a minor and major project in their third and fourth semesters, respectively. Research projects stretch across diverse areas like Algorithms, Parallel Computing, Computer Security, Artificial Intelligence, Computer Networks, as well as interdisciplinary areas like Human-Computer Interaction, applied Machine Learning etc. A decade later, our alumni have gone on to pursue doctoral studies at top universities in India (DU, IISc, IITs, IIITs etc.), US, Belgium and Japan.
        </p>

        <p>
          We, the Delhi University Computer Science Society (DUCSS), are the face of the Department of Computer Science, University of Delhi. Committed to fostering innovation and research aptitude, our focus extends beyond classrooms. 
        </p>

        <Image
          src={ducsBuilding}
          alt="DUCS Building"
          layout='responsive'
          placeholder='blur'
          className='w-full mt-8 border-4 border-white shadow-xl'
        />
      </div>
    </PageLayout>
  );
}
;

export default About; 
