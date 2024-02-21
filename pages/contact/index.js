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
        <title>Contact Us | {site.title}</title>
        <meta name="description" content={site.description} />
      </Head>
      <h1 className='text-black text-2xl title-page'>Contact Us</h1>
      <div className='container mx-auto text-white text-left flex flex-col gap-4 mt-10'>
        <p>
          For any queries, please contact us at <a href={`mailto:${contact.email}`} className="text-sankalan-yellow">{contact.email}</a> or text us on <a href={`https://wa.me/91${contact.phone2}`} className="text-sankalan-yellow phone">+91{contact.phone2}</a> or <a href={`https://wa.me/91${contact.phone}`} className="text-sankalan-yellow phone">+91{contact.phone}</a>.
        </p>

        <p>
          We are located at <a href={contact.googleLocation} className="text-sankalan-yellow">{contact.address}</a>.
        </p>

        <p>
          You can also follow us on social media for updates and announcements.
        </p>

        <ul className="list-disc ml-4">
          <li>
            Instagram: <a href={contact.instagram.link} target="_blank" className="text-sankalan-yellow">{contact.instagram.name}</a>
          </li>
          <li>
            Facebook: <a href={contact.facebook.link} target="_blank" className="text-sankalan-yellow">{contact.facebook.name}</a>
          </li>
          <li>
            LinkedIn: <a href={contact.linkedin.link} target="_blank" className="text-sankalan-yellow">{contact.linkedin.name}</a>
          </li>
        </ul>
      </div>
    </PageLayout>
  );
}

export default Contact;
