import crypto from "crypto";
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { Select, Option } from "@material-tailwind/react";
import data from '@/data';
import { useRouter } from "next/router";
import Link from "next/link";

const EventRegistrationForm = () => {
 
  const [thanks , setThanks] = useState(false);
  const [error , setError] = useState(false);
  const [alreadyRegistered , setAlreadyRegistered] = useState(false);

  const [stage, setStage] = useState(1);
  const [fullName, setFullName] = useState(localStorage.getItem('fullName') || '');
  const [mobileNumber, setMobileNumber] = useState(localStorage.getItem('mobileNumber') || '');
  const [course, setCourse] = useState(localStorage.getItem('course') || '');
  const [year, setYear] = useState(localStorage.getItem('year') || '');
  const [collegeName, setCollegeName] = useState(localStorage.getItem('collegeName') || '');
  const [university, setUniversity] = useState(localStorage.getItem('university') || '');
  const [event, setEvent] = useState(localStorage.getItem('event') || '');
  const [medium, setMedium] = useState(localStorage.getItem('medium') || '');
  const [referral, setReferral] = useState(localStorage.getItem('referral') || '');
  const [team, setTeam] = useState(localStorage.getItem('team') || '');
  const [teamMembers, setTeamMembers] = useState(localStorage.getItem('teamMembers') || '');

  const {
    site, events
  } = data;

  const { data: session } = useSession();

  const handleNext = () => {
    if (stage === 1) {
      if (!fullName) {
        alert('Please enter your full name');
        return;
      }

      if (!mobileNumber) {
        alert('Please enter your mobile number');
        return;
      }

      if (mobileNumber.length !== 10) {
        alert('Please enter a valid mobile number');
        return;
      }

      if (!/^\d+$/.test(mobileNumber)) {
        alert('Please enter a valid mobile number');
        return;
      }
    }

    if (stage === 2) {
      if (!course) {
        alert('Please enter your course');
        return;
      }

      if (!year) {
        alert('Please enter which year you are studying in');
        return;
      }

      if (!collegeName) {
        alert('Please enter your college name');
        return;
      }

      if (!university) {
        alert('Please enter your university name');
        return;
      }
    }

    if (stage === 3) {
      if (!event) {
        alert('Please select an event');
        return;
      }

      if (event && events.map(e => e.events).flat().find(e => e.slug === event)?.is_team_event && !team) {
        alert('Please enter your team name');
        return;
      }

      if (event && events.map(e => e.events).flat().find(e => e.slug == event)?.is_team_event && !teamMembers) {
        alert('Please enter the names of your team members');
        return;
      }
    }

    if (stage === 4) {
      if (!medium) {
        alert('Please select how you heard about Sankalan');
        return;
      }
    }

    setStage(stage + 1);
  };

  const handlePrevious = () => {
    setStage(stage - 1);
  };

  const genHash = (email) => {
    const sha256Hash = crypto.createHash('sha256');
    const hash = sha256Hash.update(email).digest('hex');
    const uniqueId = hash.substring(0, 6);
    return uniqueId.toUpperCase();
  };

  useEffect(() => {
    if (fullName && mobileNumber && session?.user?.email) {
      setStage(2);
    }

    if (course && year && collegeName && university) {
      setStage(3);
    }
  }, []);

  useEffect(() => {
    if (event) {
      fetch('/api/canRegister', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: genHash(session?.user?.email + '@' + event)
        })
      }).then(res => res.json()).then(data => {
        if (data.message === 'User already registered') {
          setAlreadyRegistered(true);
        } else {
          setAlreadyRegistered(false);
        }
      });
    }
  }, [event]);

  useEffect(() => {
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('mobileNumber', mobileNumber);
    localStorage.setItem('course', course);
    localStorage.setItem('year', year);
    localStorage.setItem('collegeName', collegeName);
    localStorage.setItem('university', university);
    localStorage.setItem('medium', medium);
    localStorage.setItem('team', team);
    localStorage.setItem('teamMembers', teamMembers);
  }, [fullName, mobileNumber, course, year, collegeName, university, medium, referral, team, teamMembers]);

  const handleSubmit = async () => {
    if (!fullName) {
      alert('Please enter your full name');
      setStage(1);
      return;
    }

    if (!mobileNumber) {
      alert('Please enter your mobile number');
      setStage(1);
      return;
    }

    if (!course) {
      alert('Please enter your course');
      setStage(2);
      return;
    }

    if (!year) {
      alert('Please enter which year you are studying in');
      setStage(2);
      return;
    }

    if (!collegeName) {
      alert('Please enter your college name');
      setStage(2);
      return;
    }

    if (!university) {
      alert('Please enter your university name');
      setStage(2);
      return;
    }

    if (!event) {
      alert('Please select an event');
      setStage(3);
      return;
    }

    if (event && events.map(e => e.events).flat().find(e => e.slug == event)?.is_team_event && !team) {
      alert('Please enter your team name');
      setStage(3);
      return;
    }

    if (event && events.map(e => e.events).flat().find(e => e.slug == event)?.is_team_event && !teamMembers) {
      alert('Please enter the names of your team members');
      setStage(3);
      return;
    }

    if (!medium) {
      alert('Please select how you heard about Sankalan');
      setStage(4);
      return;
    }

    const data = await fetch('/api/registerEvent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: session?.user?.email,
        fullName,
        mobileNumber,
        course,
        year,
        collegeName,
        university,
        event: events.map(e => e.events).flat().find(e => e.slug == event)?.name,
        medium,
        referral,
        participantId: genHash(session?.user?.email),
        registrationId: genHash(session?.user?.email + '@' + event),
        team: events.map(e => e.events).flat().find(e => e.slug == event)?.is_team_event ? team : '',
        teamMembers: events.map(e => e.events).flat().find(e => e.slug == event)?.is_team_event ? teamMembers : ''
      })
    });
    
    if (data.ok) {
      setThanks(true);
    } else {
      setError(true);
    }

    localStorage.removeItem('event');
  };

  const router = useRouter();

  if (thanks) {
    return (
      <div className="text-center w-full mx-auto text-white font-[comicbook] mt-10">
        <h2 className="text-xl mb-4">Thank you for registering!</h2>
        <h3 className='text-2xl mb-1 text-sankalan-yellow'>Participant ID: {genHash(session?.user?.email)}</h3>
        <h3 className='text-2xl text-sankalan-yellow'>Registration ID: {genHash(session?.user?.email + '@' + event)}</h3>
        <p className="mt-10"><Link onClick={() => router.reload()} href={'#'} className="text-white bg-pink-600 p-2 uppercase font-medium">Register for more events</Link></p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center w-full mx-auto text-white font-[comicbook] mt-10">
        <h2 className="text-xl">Oops! We messed up <span className="text-sankalan-yellow">(again)</span>. Please let us know!</h2>
      </div>
    );
  }

  return (
    <form className="max-w-md mx-auto text-left text-white font-[comicbook] mt-10" onSubmit={e => e.preventDefault()}>
      <div className="mb-10"> 
        <div className="h-2 bg-white rounded-full">
          <div className={`h-2 bg-sankalan-accent-yellow rounded-none ${stage === 1 ? 'w-0' : stage === 2 ? 'w-1/3' : stage === 3 ? 'w-2/3' : 'w-full'} transition-all duration-300 ease-in-out`}></div>
        </div>
      </div>

      {stage === 1 && (
        <>
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-white">E-mail Address <span className="text-sankalan-yellow">*</span></label>
            <input type="email" id="email" className="shadow-sm bg-transparent border border-white text-white text-sm rounded-none focus:ring-white focus:border-white block w-full p-1.5" value={session?.user?.email} disabled required />
          </div>

          <div className="mb-5">
            <label htmlFor="name" className="block mb-2 text-white">Full Name <span className="text-sankalan-yellow">*</span></label>
            <input type="text" id="name" className="shadow-sm bg-transparent border border-white text-white text-sm rounded-none focus:ring-white focus:border-white block w-full p-1.5" required value={fullName}
            onChange={(e) => setFullName(e.target.value.toUpperCase())} />
          </div>

          <div className="mb-8">
            <label htmlFor="phone" className="block mb-2 text-white">Phone Number <span className="text-sankalan-yellow">*</span></label>
            <div className="flex gap-x-2 justify-center w-full items-center">
            <input type="tel" value={'+91'} className="shadow-sm bg-transparent border border-white text-white text-sm rounded-none focus:ring-white focus:border-white block w-[3em] p-1.5" disabled /> <input type="tel" id="phone" className="shadow-sm bg-transparent border border-white text-white text-sm rounded-none focus:ring-white focus:border-white block w-full p-1.5" required value={mobileNumber} pattern="[0-9]+" minLength="10" maxLength="10"
            onChange={(e) => setMobileNumber(e.target.value)} />
            </div>
          </div>
          <button className='text-white hover:text-black border border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-white rounded-none text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={handleNext}>Next</button>
        </>
      )}

      {stage === 2 && (
        <>
          <div className="mb-5">
            <label htmlFor="course" className="block mb-2 text-white">Course <span className="text-sankalan-yellow">*</span></label>
            <input type="text" id="course" className="shadow-sm bg-transparent border border-white text-white text-sm rounded-none focus:ring-white focus:border-white block w-full p-1.5" required value={course}
            onChange={(e) => setCourse(e.target.value)} />
          </div>

          <div className="mb-5">
            <label htmlFor="year" className="block mb-2 text-white">Year <span className="text-sankalan-yellow">*</span></label>
            <select id="year" className="shadow-sm bg-transparent border border-white text-white text-sm rounded-none focus:ring-white focus:border-white block w-full p-1.5 select" onChange={(e) => setYear(e.target.value)} required value={year}>
              <option value=""></option>
              <option value="1">First Year</option>
              <option value="2">Second Year</option>
              <option value="3">Third Year</option>
              <option value="4">Fourth Year</option>
              <option value="5">Fifth Year</option>
            </select>
          </div>

          <div className="mb-5">
            <label htmlFor="collegeName" className="block mb-2 text-white">College/Institute/Department <span className="text-sankalan-yellow">*</span></label>
            <input type="text" id="collegeName" className="shadow-sm bg-transparent border border-white text-white text-sm rounded-none focus:ring-white focus:border-white block w-full p-1.5" required value={collegeName}
            onChange={(e) => setCollegeName(e.target.value.toUpperCase())} />
          </div>

          <div className="mb-8">
            <label htmlFor="university" className="block mb-2 text-white">University <span className="text-sankalan-yellow">*</span></label>
            <input type="text" id="university" className="shadow-sm bg-transparent border border-white text-white text-sm rounded-none focus:ring-white focus:border-white block w-full p-1.5" required value={university}
            onChange={(e) => setUniversity(e.target.value.toUpperCase())} />
          </div>
          <button className='text-white hover:text-black border border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-white rounded-none text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={handlePrevious}>Previous</button>
          <button className='text-white hover:text-black border border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-white rounded-none text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={handleNext}>Next</button>
        </>
      )}

      {stage === 3 && (
        <>
          <div className="mb-8">
            <label htmlFor="event" className="block mb-2 text-white">Event <span className="text-sankalan-yellow">*</span></label>
            <select id="event" className="select shadow-sm bg-transparent border border-white text-white text-sm rounded-none focus:ring-white focus:border-white block w-full p-1.5" onChange={e => setEvent(e.target.value) } required value={event}>
              <option value="">Select an event</option>
              {
                events.map((eventType, index) => (
                  <optgroup key={index} label={eventType.category}>
                      {
                        eventType.events.map((event, index) => (
                          <option key={index} value={event.slug}>{event.name}</option>
                        ))
                      }
                  </optgroup>
                ))

              }
             
            </select>
          </div>

          {
            alreadyRegistered && (
              <div className="text-white font-[comicbook] mt-[-1em] mb-8">
                <p>You have already registered for this event. For any modifications or cancellation of registration, please <Link href={'/contact'} className="text-sankalan-yellow">contact us</Link>.</p>
              </div>
            )
          }

          {
            event && !alreadyRegistered && (
              <div className="mb-8 mt-[-.5em]">
                <p className="text-sankalan-yellow font-medium">{events.map(e => e.events).flat().find(e => e.slug == event)?.description}</p>
              </div>
            )
          }

          {
            event && !alreadyRegistered && events.map(e => e.events).flat().find(e => e.slug == event)?.is_team_event && (
              <div className="mb-8 mt-[-.8em]">
                <p className="text-white mb-6">
                  Only one member from the team should register.
                </p>

                <div className="mb-5">
                  <label htmlFor="team" className="block mb-2 text-white">Team Name</label>
                  <input type="text" id="team" className="shadow-sm bg-transparent border border-white text-white text-sm rounded-none focus:ring-white focus:border-white block w-full p-1.5" value={team} onChange={(e) => setTeam(e.target.value)} />
                </div>

                <div className="">
                  <label htmlFor="teamMembers" className="block mb-2 text-white">Names of Members <span className="text-sankalan-accent-yellow text-xs">(separated by commas)</span></label>
                  <textarea id="teamMembers" className="shadow-sm bg-transparent border border-white text-white text-sm rounded-none focus:ring-white focus:border-white block w-full p-1.5" value={teamMembers} onChange={(e) => setTeamMembers(e.target.value)} />
                </div>
              </div>
            )
          }

          <button className='text-white hover:text-black border border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-white rounded-none text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={handlePrevious}>Previous</button>
          <button className={`text-white hover:text-black border border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-white rounded-none text-sm px-5 py-2.5 text-center me-2 mb-2 ${alreadyRegistered ? 'hidden' : ''}`} disabled={alreadyRegistered} onClick={handleNext}>Next</button>
        </>
      )}

      {stage === 4 && (
        <>
          <div className="mb-5">
            <label htmlFor="medium" className="block mb-2 text-white">How did you come to know about the event? <span className="text-sankalan-yellow">*</span></label>
            <select id="medium" className="shadow-sm bg-transparent border border-white text-white text-sm rounded-none focus:ring-white focus:border-white block w-full p-1.5 select" onChange={e => setMedium(e.target.value) } required value={medium}>
              <option value=""></option>
              <option value="social-media">Social Media</option>
              <option value="friends">Friends</option>
              <option value="college">College</option>
              <option value="other">Other</option>
            </select>
          </div>
                    
          <div className="mb-5">
            <label htmlFor="referral" className="block mb-2 text-white">Referral Code (optional)</label>
            <input type="text" id="referral" className="shadow-sm bg-transparent border border-white text-white text-sm rounded-none focus:ring-white focus:border-white block w-full p-1.5" value={referral} minLength={6} maxLength={6}
            onChange={(e) => setReferral(e.target.value.toUpperCase())} />
          </div>

          <div className="mb-8 text-sm text-sankalan-yellow">
              By submitting this form, I declare that the information provided by me is true and correct to the best of my knowledge and belief. I understand that my registration is subject to verification by the event organizers and that any false information provided by me will lead to disqualification from the event.
          </div>

          <button className='text-white hover:text-black border border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-white rounded-none text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={handlePrevious}>Previous</button>
          <button className='text-black hover:text-black border bg-white border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-white rounded-none text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={handleSubmit}>Submit</button>
        </>
      )}
    </form>
  );
};

export default EventRegistrationForm;
