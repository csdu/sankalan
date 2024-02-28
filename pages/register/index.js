import PageLayout from "@/includes/PageLayout";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@material-tailwind/react";

import data from "@/data";
import Head from "next/head";
import EventRegistrationForm from "@/includes/EventRegistrationForm";
import { useRouter } from "next/router";

export default function Component() {
  const {
    site, contact
  } = data;

  const { data: session } = useSession();
  const router = useRouter();

  if (router.query.event) {
    localStorage.setItem('event', router.query.event);
  }

  return (
    <PageLayout>
      <Head>
        <title>{`Registration | ${site.title}`}</title>
        <meta name="description" content={site.description} />
        <meta property="og:title" content={'Registration | ' + site.title}/>
        <meta property="og:description" content={site.description} />
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:title" content={'Registration | ' + site.title} />
        <meta name="twitter:description" content={site.description} />
      </Head>
      <h1 className="title-page">Registration</h1>
      <p className="text-white mt-12">
        Event Registrations have not started yet.
      </p>

      <p className="text-white">
        Please check back later.
      </p>

    </PageLayout>
  )
}

// if (session) {
//   return (
//     <>
//       Signed in as {session.user.email} <br />
//       <button onClick={() => signOut({redirect: false})}>Sign out</button>
//     </>
//   )
// }
// return (
//   <>
//     Not signed in <br />
//     <button onClick={() => signIn('google')}>Sign in</button>
//   </>
// )
