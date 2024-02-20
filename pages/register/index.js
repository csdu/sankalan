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
        <title>Event Registration | {site.title}</title>
        <meta name="description" content={site.description} />
      </Head>
      <h1 className="title-page">Event Registration</h1>
      <p className="text-white">
        {
          session ? (
              <span>You are signed in as {session.user.email}. Not you? <button className="text-pink-300" onClick={() => signOut({redirect: false})}>Sign Out</button></span>
            ) : (
         <Button
          size="md"
          variant="filled"
          color="white"
          className="flex items-center gap-3 font-[spacemono] mx-auto"
          onClick={() => signIn('google')}
        >
          <img src="https://docs.material-tailwind.com/icons/google.svg" alt="metamask" className="h-4 w-4" />
          Continue with Google
        </Button>
      )
        }
      </p>

      {
        session && (
          <div className="min-h-full">
            <EventRegistrationForm />
          </div>
        )
      }
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
