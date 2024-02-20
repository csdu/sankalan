import PageLayout from "@/includes/PageLayout";
import Head from "next/head";

import data from "@/data";

const Contact = () => {
  const {
    site, contact,
  } = data;

  return (
    <PageLayout>
      <Head>
        <title>Contacy Us | {site.title}</title>
        <meta name="description" content={site.description} />
      </Head>
      <h1 className='text-white text-2xl title-page'>Contact Us</h1>
      <div className='container mx-auto text-white text-left flex flex-col gap-4 mt-10'>
        <p>
          For any queries, please contact us at <a href={`mailto:${contact.email}`} className="text-pink-300">{contact.email.replaceAll('@', '[at]').replaceAll('.', '[dot]')}</a> or text us on <a href={`https://wa.me/91${contact.phone}`} className="text-pink-300 phone">{contact.phone}</a>.
        </p>

        <p>
          We are located at <a href={contact.googleLocation} className="text-pink-300">{contact.address}</a>.
        </p>

        <p>
          You can also follow us on social media for updates and announcements.
        </p>

        <ul className="list-disc ml-4">
          <li>
            Instagram: <a href={contact.instagram.link} target="_blank" className="text-pink-300">{contact.instagram.name}</a>
          </li>
          <li>
            Facebook: <a href={contact.facebook.link} target="_blank" className="text-pink-300">{contact.facebook.name}</a>
          </li>
          <li>
            LinkedIn: <a href={contact.linkedin.link} target="_blank" className="text-pink-300">{contact.linkedin.name}</a>
          </li>
        </ul>
      </div>
    </PageLayout>
  );
}

export default Contact;