import crypto from "crypto";
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { Select, Option } from "@material-tailwind/react";
import data from '@/data';
import { useRouter } from "next/router";

const EventRegistrationForm = () => {
  const [thanks , setThanks] = useState(false);
  const [error , setError] = useState(false);
  const [stage, setStage] = useState(1);
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [course, setCourse] = useState('');
  const [year, setYear] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [university, setUniversity] = useState('');
  const [event, setEvent] = useState('');
  const [medium, setMedium] = useState('');
  const [referral, setReferral] = useState('');
  const [team, setTeam] = useState('');
  const [teamMembers, setTeamMembers] = useState('');

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

      if (event && events.find(e => e.slug == event)?.is_team_event && !team) {
        alert('Please enter your team name');
        return;
      }

      if (event && events.find(e => e.slug == event)?.is_team_event && !teamMembers) {
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
    const sha1Hash = crypto.createHash('sha1');
    const hash = sha1Hash.update(email).digest('hex');
    const uniqueId = hash.substring(0, 6);
    return uniqueId.toUpperCase();
  };

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

    if (event && events.find(e => e.slug == event)?.is_team_event && !team) {
      alert('Please enter your team name');
      setStage(3);
      return;
    }

    if (event && events.find(e => e.slug == event)?.is_team_event && !teamMembers) {
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
        event: events.find(e => e.slug == event)?.name,
        medium,
        referral,
        participantId: genHash(session?.user?.email),
        registrationId: genHash(session?.user?.email + '@' + event),
        team,
        teamMembers
      })
    });
    
    if (data.ok) {
      setThanks(true);
    } else {
      setError(true);
    }
  
  };

  if (thanks) {
    return (
      <div class="text-center w-full mx-auto text-white font-[monospace] mt-10">
        <h2 class="text-xl mb-4">Thank you for registering!</h2>
        <h3 className='text-2xl mb-1 text-pink-300'>Participant ID: {genHash(session?.user?.email)}</h3>
        <h3 className='text-2xl text-pink-300'>Registration ID: {genHash(session?.user?.email + '@' + event)}</h3>
      </div>
    );
  }

  if (error) {
    return (
      <div class="text-center w-full mx-auto text-white font-[monospace] mt-10">
        <h2 class="text-xl">Oops! We messed up <span className="text-pink-300">(again)</span>. Please let us know!</h2>
      </div>
    );
  }

  return (
    <form class="max-w-md mx-auto text-left text-white font-[monospace] mt-10" onSubmit={e => e.preventDefault()}>
      <div class="mb-10"> 
        <div class="h-2 bg-white rounded-full">
          <div class={`h-2 bg-pink-300 rounded-none ${stage === 1 ? 'w-0' : stage === 2 ? 'w-1/3' : stage === 3 ? 'w-2/3' : 'w-full'} transition-all duration-300 ease-in-out`}></div>
        </div>
      </div>

      {stage === 1 && (
        <>
          <div class="mb-5">
            <label for="email" class="block mb-2 text-white">E-mail Address <span className="text-pink-300">*</span></label>
            <input type="email" id="email" class="shadow-sm bg-transparent border border-white text-white text-sm rounded-none focus:ring-white focus:border-white block w-full p-1.5" value={session?.user?.email} disabled required />
          </div>

          <div class="mb-5">
            <label for="name" class="block mb-2 text-white">Full Name <span className="text-pink-300">*</span></label>
            <input type="text" id="name" class="shadow-sm bg-transparent border border-white text-white text-sm rounded-none focus:ring-white focus:border-white block w-full p-1.5" required value={fullName}
            onChange={(e) => setFullName(e.target.value.toUpperCase())} />
          </div>

          <div class="mb-8">
            <label for="phone" class="block mb-2 text-white">Phone Number <span className="text-pink-300">*</span></label>
            <div className="flex gap-x-2 justify-center w-full items-center">
            <input type="tel" value={'+91'} class="shadow-sm bg-transparent border border-white text-white text-sm rounded-none focus:ring-white focus:border-white block w-[3em] p-1.5" disabled /> <input type="tel" id="phone" class="shadow-sm bg-transparent border border-white text-white text-sm rounded-none focus:ring-white focus:border-white block w-full p-1.5" required value={mobileNumber} pattern="[0-9]+" minlength="10" maxlength="10"
            onChange={(e) => setMobileNumber(e.target.value)} />
            </div>
          </div>
          <button className='text-white hover:text-black border border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-white rounded-none text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={handleNext}>Next</button>
        </>
      )}

      {stage === 2 && (
        <>
          <div class="mb-5">
            <label for="course" class="block mb-2 text-white">Course <span className="text-pink-300">*</span></label>
            <input type="text" id="course" class="shadow-sm bg-transparent border border-white text-white text-sm rounded-none focus:ring-white focus:border-white block w-full p-1.5" required value={course}
            onChange={(e) => setCourse(e.target.value)} />
          </div>

          <div class="mb-5">
            <label for="year" class="block mb-2 text-white">Year <span className="text-pink-300">*</span></label>
            <select id="year" class="shadow-sm bg-transparent border border-white text-white text-sm rounded-none focus:ring-white focus:border-white block w-full p-1.5 select" onChange={(e) => setYear(e.target.value)} required value={year}>
              <option value=""></option>
              <option value="1">First Year</option>
              <option value="2">Second Year</option>
              <option value="3">Third Year</option>
              <option value="4">Fourth Year</option>
              <option value="5">Fifth Year</option>
            </select>
          </div>

          <div class="mb-5">
            <label for="collegeName" class="block mb-2 text-white">College/Institute/Department <span className="text-pink-300">*</span></label>
            <input type="text" id="collegeName" class="shadow-sm bg-transparent border border-white text-white text-sm rounded-none focus:ring-white focus:border-white block w-full p-1.5" required value={collegeName}
            onChange={(e) => setCollegeName(e.target.value.toUpperCase())} />
          </div>

          <div class="mb-8">
            <label for="university" class="block mb-2 text-white">University <span className="text-pink-300">*</span></label>
            <input type="text" id="university" class="shadow-sm bg-transparent border border-white text-white text-sm rounded-none focus:ring-white focus:border-white block w-full p-1.5" required value={university}
            onChange={(e) => setUniversity(e.target.value.toUpperCase())} />
          </div>
          <button className='text-white hover:text-black border border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-white rounded-none text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={handlePrevious}>Previous</button>
          <button className='text-white hover:text-black border border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-white rounded-none text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={handleNext}>Next</button>
        </>
      )}

      {stage === 3 && (
        <>
          <div class="mb-8">
            <label for="event" class="block mb-2 text-white">Event <span className="text-pink-300">*</span></label>
            <select id="event" class="select shadow-sm bg-transparent border border-white text-white text-sm rounded-none focus:ring-white focus:border-white block w-full p-1.5" onChange={e => setEvent(e.target.value) } required value={event}>
              <option value="">Select an event</option>
              {
                events.map((event, index) => (
                  <option key={index} value={event.slug}>{event.name}</option>
                ))
              }
            </select>
          </div>

          {
            event && (
              <div class="mb-8 mt-[-.5em]">
                <p class="text-pink-300 font-medium">{events.find(e => e.slug == event)?.description}</p>
              </div>
            )
          }

          {
            event && events.find(e => e.slug == event)?.is_team_event && (
              <div className="mb-8 mt-[-.8em]">
                <p class="text-white mb-6">
                  Only one member from the team should register.
                </p>

                <div className="mb-5">
                  <label for="team" className="block mb-2 text-white">Team Name</label>
                  <input type="text" id="team" className="shadow-sm bg-transparent border border-white text-white text-sm rounded-none focus:ring-white focus:border-white block w-full p-1.5" value={team} onChange={(e) => setTeam(e.target.value)} />
                </div>

                <div className="">
                  <label for="teamMembers" className="block mb-2 text-white">Names of Members <span className="text-pink-300 text-xs">(separated by commas)</span></label>
                  <textarea id="teamMembers" className="shadow-sm bg-transparent border border-white text-white text-sm rounded-none focus:ring-white focus:border-white block w-full p-1.5" value={teamMembers} onChange={(e) => setTeamMembers(e.target.value)} />
                </div>
              </div>
            )
          }

          <button className='text-white hover:text-black border border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-white rounded-none text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={handlePrevious}>Previous</button>
          <button className='text-white hover:text-black border border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-white rounded-none text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={handleNext}>Next</button>
        </>
      )}

      {stage === 4 && (
        <>
          <div class="mb-5">
            <label for="medium" class="block mb-2 text-white">How did you come to know about the event? <span className="text-pink-300">*</span></label>
            <select id="medium" class="shadow-sm bg-transparent border border-white text-white text-sm rounded-none focus:ring-white focus:border-white block w-full p-1.5 select" onChange={e => setMedium(e.target.value) } required value={medium}>
              <option value=""></option>
              <option value="social-media">Social Media</option>
              <option value="friends">Friends</option>
              <option value="college">College</option>
              <option value="other">Other</option>
            </select>
          </div>
                    
          <div class="mb-5">
            <label for="referral" class="block mb-2 text-white">Referral Code (optional)</label>
            <input type="text" id="referral" class="shadow-sm bg-transparent border border-white text-white text-sm rounded-none focus:ring-white focus:border-white block w-full p-1.5" value={referral} minLength={6} maxLength={6}
            onChange={(e) => setReferral(e.target.value.toUpperCase())} />
          </div>

          <div class="mb-8 text-sm text-pink-300">
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



//       <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//       <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
//   </div>
//   <div class="relative z-0 w-full mb-5 group">
//       <input type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//       <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
//   </div>
//   <div class="relative z-0 w-full mb-5 group">
//       <input type="password" name="repeat_password" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//       <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
//   </div>
//   <div class="grid md:grid-cols-2 md:gap-6">
//     <div class="relative z-0 w-full mb-5 group">
//         <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//         <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
//     </div>
//     <div class="relative z-0 w-full mb-5 group">
//         <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//         <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
//     </div>
//   </div>
//   <div class="grid md:grid-cols-2 md:gap-6">
//     <div class="relative z-0 w-full mb-5 group">
//         <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//         <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
//     </div>
//     <div class="relative z-0 w-full mb-5 group">
//         <input type="text" name="floating_company" id="floating_company" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//         <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
//     </div>
//   </div>
//   <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
// </form>
