import Image from 'next/image';

import data from '@/data';
import Link from 'next/link';
import PageLayout from '@/includes/PageLayout';
import Head from 'next/head';

const Terms = () => {
  const {
    site,
    contact
  } = data;

  return (
    <PageLayout>
      <Head>
        <title>Terms | {site.title}</title>
        <meta name="description" content={site.description} />
      </Head>
      <h1 className='text-white text-2xl title-page'>Terms</h1>
      <div className='container mx-auto text-white text-justify flex flex-col gap-4 mt-10'>
        <p>These terms and conditions outline the rules and regulations for the Sankalan web portal. <br />
          By accessing this website, we assume you accept these terms and conditions. Do not continue to Sankalan if you do not agree to take all of the terms and conditions stated on this page.</p>
        <h2 id="privacy-policy" className='text-pink-300 font-[spacemono] font-medium text-2xl'>Privacy Policy</h2>
        <p>This page informs website visitors about our policies regarding the collection, use, and disclosure of Personal Information if anyone decided to use our Service.</p>
        <p>If you choose to use our Service, then you agree to the collection and use of information with this policy. We use this personal information to provide and improve our services. We will not use or share your information with anyone except as described in this Privacy Policy.</p>
        <p>The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible below unless otherwise defined in this Privacy Policy.</p>
        <h3 id="information-collection-and-use" className='text-pink-300 font-[spacemono] font-medium'>INFORMATION COLLECTION AND USE</h3>
        <p>For a better experience, we may require some of your personal information, including but not limited to your name, phone number, email, and organization you work with. We will only use the collected data to contact or identify you.</p>
        <h3 id="log-data" className='text-pink-300 font-[spacemono] font-medium'>LOG DATA</h3>
        <p>We want to inform you that whenever you visit our Service, we collect information that your browser sends to us, which is called Log Data. This log data may include information such as your computer’s I.P. address, browser version. Also, we record the pages that you visit on or website, the time and date of your visit, the time spent on those pages, and other statistics.</p>
        <p>We make use of Google Analytics to monitor the behavior of our site users.</p>
        <p>At our server, we make use of Amazon Cloudwatch service to track requests from users.</p>
        <p>So, our privacy policy extends to the privacy policy of these services also.</p>
        <h3 id="cookies" className='text-pink-300 font-[spacemono] font-medium'>COOKIES</h3>
        <p>Our website uses cookies as a unique anonymous identifier to improve our Service. You have the option to either accept or refuse these cookies. If you choose to refuse our cookies, you may not be able to use some portions of our Service.</p>
        <h3 id="service-providers" className='text-pink-300 font-[spacemono] font-medium'>SERVICE PROVIDERS</h3>
        <p>We may employ third-party companies and individuals due to the following reasons:</p>
        <ul className='list-disc ml-4'>
          <li>To facilitate our Service;</li>
          <li>To provide the Service on our behalf;</li>
          <li>To perform Service-related services; or</li>
          <li>To assist us in analyzing how our Service.</li>
        </ul>
        <p>We want to inform our Service users that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.</p>
        <h3 id="security" className='text-pink-300 font-[spacemono] font-medium'>SECURITY</h3>
        <p>We value your trust in providing us your Personal Information. Thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p>
        <h3 id="links-to-other-sites" className='text-pink-300 font-[spacemono] font-medium'>LINKS TO OTHER SITES</h3>
        <p>Our Service may contain links to other sites. If you click on a third-party link, you will get directed to that site. Note that we do not operate these external sites. Therefore, we strongly advise you to review the Privacy Policy of these websites, more helpful hints. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>
        <h3 id="changes-to-this-privacy-policy" className='text-pink-300 font-[spacemono] font-medium'>CHANGES TO THIS PRIVACY POLICY</h3>
        <p>We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they get posted on this page.</p>
        <h3 id="contact-us" className='text-pink-300 font-[spacemono] font-medium'>CONTACT US</h3>
        <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to <a href="/contact/">contact us</a>.</p>
        <h2 id="terms" className='text-pink-300 font-[spacemono] font-medium text-2xl'>Terms</h2>
        <h3 id="terms-of-use-for-website" className='text-pink-300 font-[spacemono] font-medium'>TERMS OF USE FOR WEBSITE</h3>
        <p>You agree to the following terms when you use our website (*.ducs.in):</p>
        <ul className='list-disc ml-6'>
          <li>You agree to the privacy policy above.</li>
          <li>We try our best to keep your private information safe with us. But we are not responsible for any potential theft of your information, whether by our mistake or by some mistake of yours. We will try our best to support you.</li>
          <li>Your name and content you create with us can be used for promotional purposes on other media.</li>
          <li>We will store the following information about you when you register through our &quot;Sankalan Dashboard&quot; with your Google Account: displayName, email id, Google user id, Google+ information like organisation you work with, your mobile number. Temporarily, some more information is available to us, but we do not make use of that information.</li>
          <li>You must not to misuse the contact and personal details provided to you for your convenience at various pages on this website.</li>
          <li>You must not exploit the website&#39;s weaknesses (if you find any) to cause harm to the website, or the organisation of this website or other users using this website.</li>
          <li>You are free to go through the source code of our website which is available at:<br /><a href="https://github.com/csdu/sankalan">https://github.com/csdu/sankalan</a><br /><a href="https://github.com/csdu/sankalan-portal">https://github.com/csdu/sankalan-portal</a></li>
            <li>If you find any issues with the website, feel free to report it on Github or contact us.</li>
          </ul>
            <h3 id="terms-of-service-for-sankalan" className='text-pink-300 font-[spacemono] font-medium'>TERMS OF SERVICE FOR SANKALAN</h3>
            <p>By registering for Sankalan through our website or service provided at registration desk, you agree to the following terms:</p>
            <ul className='list-disc ml-6'>
              <li>You must not misuse any technology available to you to cause damage to Sankalan (its website, its organisation and the other people participating in the event).</li>
              <li>You must follow the guidelines provided to you during the event.</li>
              <li>You must agree to the rules and conditions provided for each event in which you participate.</li>
              <li>You will respect the organisers and other participants at the event.</li>
              <li>General guidelines for a good public behaviour are also valid here.</li>
              <li>If caught violating the terms of service, you are eligible for immediate disqaulification from the event and a potential ban for future events. We may also report your violations to the organisation you work with. Strict action will be taken against strict violations.</li>
            </ul>
            <h2 id="non-discrimination-policy" className='text-pink-300 font-[spacemono] font-medium'>Non-discrimination Policy</h2>
            <p>Sankalan prohibits discrimination, harassment, and bullying against any person for any reason—for example, because of age, ancestry, color, disability or handicap, national origin, race, religion, gender, sexual or affectional orientation, gender identity, appearance, matriculation, political affiliation, marital status, veteran status, or any other characteristic protected by law.</p>
            <h2 id="event-conduct-and-safety" className='text-pink-300 font-[spacemono] font-medium'>Event Conduct and Safety</h2>
            <p>Sankalan is committed to providing a safe, productive, and welcoming environment to all participants, including staff and vendors, at Sankalan-related events. Sankalan has no tolerance for discrimination, harassment, or bullying in any form at Sankalan-related events. Participants are expected to adhere to these principles and respect the rights of others.</p>
            <h3 id="what-to-do-if-you-witness-or-are-subjected-to-unacceptable-behavior-" className='text-pink-300 font-[spacemono] font-medium'>What To Do If You Witness or are Subjected to Unacceptable Behavior:</h3>
            <p>Participants should report any behavior inconsistent with these principles to onsite event staff. Event staff will be happy to help participants contact venue security or local law enforcement, provide escorts, or otherwise assist those experiencing harassment to feel safe for the duration of the event. We value your attendance.</p>
          </div>
        </PageLayout>
    );
};

export default Terms;
