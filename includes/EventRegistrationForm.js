import React, { useState } from 'react';
import data from '@/data';
import { useSession } from 'next-auth/react';
import crypto from "crypto";

const EventRegistrationForm = () => {
  const [thanks , setThanks] = useState(false);
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

  const {
    site, events
  } = data;

  const { data: session } = useSession();

  const handleNext = () => {
    setStage(stage + 1);
  };

  const handlePrevious = () => {
    setStage(stage - 1);
  };

  const genHash = (email) => {
    const md5Hash = crypto.createHash('md5');
    const hash = md5Hash.update(email).digest('hex');
    const participantId = hash.substring(0, 6);
    return participantId.toUpperCase();
  };

  const handleSubmit = async () => {
    // validate data 
    if (!fullName || !mobileNumber || !course || !year || !collegeName || !university || !event) {
      alert('Please fill all the fields');
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
        event,
        medium,
        referral,
        participantId: genHash(session?.user?.email),
        registrationId: genHash(session?.user?.email + '@' + event)
      })
    });
    
    if (data.ok) {
      alert('Registration successful');
    }

    setThanks(true);
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
  return (
    <form class="max-w-md mx-auto text-left text-white font-[monospace] mt-10" onSubmit={e => e.preventDefault()}>
      {stage === 1 && (
        <>
          <div class="mb-5">
            <label for="email" class="block mb-2 text-white">E-mail Address</label>
            <input type="email" id="email" class="shadow-sm bg-transparent border border-white text-white text-sm rounded-none focus:ring-white focus:border-white block w-full p-1.5" value={session?.user?.email} disabled required />
          </div>

          <div class="mb-5">
            <label for="name" class="block mb-2 text-white">Full Name</label>
            <input type="text" id="name" class="shadow-sm bg-transparent border border-white text-white text-sm rounded-none focus:ring-white focus:border-white block w-full p-1.5" required value={fullName}
            onChange={(e) => setFullName(e.target.value)} />
          </div>

          <div class="mb-5">
            <label for="phone" class="block mb-2 text-white">Phone Number</label>
            <input type="text" id="phone" class="shadow-sm bg-transparent border border-white text-white text-sm rounded-none focus:ring-white focus:border-white block w-full p-1.5" required value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)} />
          </div>
          <button className='text-white hover:text-black border border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-white rounded-none text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={handleNext}>Next</button>
        </>
      )}

      {stage === 2 && (
        <>
          <div class="mb-5">
            <label for="course" class="block mb-2 text-white">Course</label>
            <input type="text" id="course" class="shadow-sm bg-transparent border border-white text-white text-sm rounded-none focus:ring-white focus:border-white block w-full p-1.5" required value={course}
            onChange={(e) => setCourse(e.target.value)} />
          </div>

          <div class="mb-5">
            <label for="year" class="block mb-2 text-white">Year</label>
            <input type="text" id="year" class="shadow-sm bg-transparent border border-white text-white text-sm rounded-none focus:ring-white focus:border-white block w-full p-1.5" required value={year}
            onChange={(e) => setYear(e.target.value)} />
          </div>

          <div class="mb-5">
            <label for="collegeName" class="block mb-2 text-white">College / Institute / Department</label>
            <input type="text" id="collegeName" class="shadow-sm bg-transparent border border-white text-white text-sm rounded-none focus:ring-white focus:border-white block w-full p-1.5" required value={collegeName}
            onChange={(e) => setCollegeName(e.target.value)} />
          </div>

          <div class="mb-5">
            <label for="university" class="block mb-2 text-white">University</label>
            <input type="text" id="university" class="shadow-sm bg-transparent border border-white text-white text-sm rounded-none focus:ring-white focus:border-white block w-full p-1.5" required value={university}
            onChange={(e) => setUniversity(e.target.value)} />
          </div>
          <button className='text-white hover:text-black border border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-white rounded-none text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={handlePrevious}>Previous</button>
          <button className='text-white hover:text-black border border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-white rounded-none text-sm px-5 py-2.5 text-center me-2 mb-2' onClick={handleNext}>Next</button>
        </>
      )}

      {stage === 3 && (
        <>
          {/* <div class="mb-5">
            <label for="course" class="block mb-2 text-white">Course</label>
            <input type="text" id="course" class="shadow-sm bg-transparent border border-white text-white text-sm rounded-none focus:ring-white focus:border-white block w-full p-1.5" required value={course}
            onChange={(e) => setCourse(e.target.value)} />
          </div> */}

          {
            // select event to register for, use radio buttons
          }

          <div class="mb-5">
            <label for="event" class="block mb-2 text-white">Event</label>
            <select id="event" class="shadow-sm bg-transparent border border-white text-white text-sm rounded-none focus:ring-white focus:border-white block w-full p-1.5" onChange={e => setEvent(e.target.value) } required>
              <option value="">Select an event</option>
              {
                events.map((event, index) => (
                  <option key={index} value={event.id}>{event.name}</option>
                ))
              }
            </select>
          </div>

          <div class="mb-5">
            <label for="medium" class="block mb-2 text-white">How did you come to know about the event?</label>
            <select id="medium" class="shadow-sm bg-transparent border border-white text-white text-sm rounded-none focus:ring-white focus:border-white block w-full p-1.5" onChange={e => setMedium(e.target.value) } required>
              <option value="">Select an option</option>
              <option value="social-media">Social Media</option>
              <option value="friends">Friends</option>
              <option value="college">College</option>
              <option value="other">Other</option>
            </select>
          </div>
                    
          <div class="mb-5">
            <label for="referral" class="block mb-2 text-white">Referral Code (optional)</label>
            <input type="text" id="referral" class="shadow-sm bg-transparent border border-white text-white text-sm rounded-none focus:ring-white focus:border-white block w-full p-1.5" value={referral}
            onChange={(e) => setReferral(e.target.value)} />
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
