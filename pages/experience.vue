<template>
  <div class="text-white font-eb">
    <video id="video" autoplay muted loop class="fixed -z-10 min-w-full min-h-full max-w-none">
      <source src="/backgroundvideoAndroid2.mp4" type="video/mp4">
    </video>
    <Header />
    <section id="resume" class="relative bg-primary-blue bg-opacity-70 min-h-screen flex flex-col">
      <div class=" flex flex-col justify-center items-center border-1 border-gray-300  m-8 p-4">
        <h2 class="text-3xl">Summary of Qualifications</h2>
        <ul
          class="text-xl p-4 mt-4 flex flex-col items-center justify-center border-2 border-white border-solid text-gray-300">
          <li>3 Years of Web Application Development using HTML / CSS</li>
          <li>Experience working on over 20 Web Applications</li>
          <li>1+ year experience as a junior developer at iApotheca Healthcare</li>
          <li>1+ year experience freelancing for Overscore Media</li>
          <li>BSc Honours in Computer Science (Co-op Option) at Trent University</li>
        </ul>
      </div>
      <div class="flex flex-col justify-center items-center border-1 border-white m-6 p-2 text-xl space-y-4">
        <h2 class="text-3xl text-center">Work Experience</h2>
        <div class="flex flex-col justify-around md:w-1/3">
          <div class="flex flex-row justify-between space-x-16 items-end">
            <h3 class="text-2xl">Junior Developer</h3>
            <p class="text-right text-md text-gray-300">May 2021 - Present <br />
              September 2019 - December 2019</p>
          </div>
          <p class="text-md text-gray-300">iApotheca Healthcare</p>

          <ul class="text-md  pt-2 list-disc flex flex-col text-gray-300">
            <li>Experience using Laravel / Livewire (TALL Stack) to update existing applications.</li>
            <li>Used Github PR's for feature focused development</li>
            <li>Created feature, unit, and integration tests for new / existing features</li>
            <li>Provided code reviews to help ensure multi-platform delivery and cross-browser support</li>
          </ul>
        </div>
        <div class="flex flex-col justify-around md:w-1/3">
          <div class="flex flex-row justify-between space-x-8 items-end">
            <h3 class="text-2xl">Backend Developer</h3>
            <p class="text-right text-md text-gray-300">May 2021 - Present </p>
          </div>
          <p class="text-md text-gray-300">Overscore Media</p>

          <ul class="text-md  pt-2 list-disc flex flex-col text-gray-300">
            <li>Worked in a team of 3 using Laravel / Inertia JS to create an online store for Stluet Furniture</li>
            <li>Worked in a team using the TALL stack to create Sequence21</li>
            <li>Acted as a backend developer to help create database, program structure, stripe integration, and more</li>
            <li>Provided excellent presentation skills when working with the client and team members</li> 
          </ul>
        </div>
        <div class="flex flex-col justify-around md:w-1/3">
          <div class="flex flex-row justify-between space-x-8 items-end">
            <h3 class="text-2xl">IT Systems Analyst</h3>
            <p class="text-right text-md text-gray-300">January 2021 - May 2021 </p>
          </div>
          <p class="text-md text-gray-300">Trent University</p>

          <ul class="text-md  pt-2 list-disc flex flex-col text-gray-300">
            <li>Created data driven reports in Request Tracker to support business decisions</li>
            <li>Provided tech support for Students, Faculty, and Alumni</li>
            <li>Developed user guides and help articles for an ITSM system</li>
            <li>Researched ITSM systems and ITIL guidelines</li>
          </ul>
        </div>
      </div>
      <!-- Education -->
      <div class="flex flex-col justify-center items-center border-1 border-white p-4">
        <h2 class="text-3xl">Education</h2>
        <ul class="text-xl text-gray-300">
          <li>BSc Honours in Computer Science (Co-op Option) at Trent University</li>
          <li class="text-center">Graduating June 2022</li>
        </ul>
      </div>
      <!-- Relevant Courses -->
      <div class="flex flex-col justify-center items-center border-1 border-white p-4">
        <h2 class="text-3xl">Relevant Courses</h2>
        <ul class="text-md text-gray-300 flex flex-row flex-wrap items-center justify-around space-x-2 w-1/2">
          <li class="px-2 py-1 bg-white text-gray-600 rounded-lg mt-1">Data Mining</li>
          <li class="px-2 py-1 bg-white text-gray-600 rounded-lg mt-1">Web Application Development</li>
          <li class="px-2 py-1 bg-white text-gray-600 rounded-lg mt-1">High Performance Computing</li>
          <li class="px-2 py-1 bg-white text-gray-600 rounded-lg mt-1">Data Visualization</li>
          <li class="px-2 py-1 bg-white text-gray-600 rounded-lg mt-1">Databases</li>
          <li class="px-2 py-1 bg-white text-gray-600 rounded-lg mt-1">Data Structures and Algorithms</li>
          <li class="px-2 py-1 bg-white text-gray-600 rounded-lg mt-1">Systems Programming</li>
          <li class="px-2 py-1 bg-white text-gray-600 rounded-lg mt-1">Fundamentals of Project Management</li>
          <li class="px-2 py-1 bg-white text-gray-600 rounded-lg mt-1">Software Engineering Project</li>

        </ul>
      </div>
      <div
        class=" row-span-2 flex flex-col justify-center items-center border-1 border-white m-6 p-2 text-xl space-y-4">
        <h2 class="text-3xl text-center">Volunteer Experience</h2>
        <div class="flex flex-col justify-around p-2">
          <div class="flex flex-row justify-between space-x-16 items-end">
            <h3 class="text-2xl">Front-End Developer</h3>
            <p class="text-right text-md text-gray-300">October 2020 - January 2021</p>
          </div>
          <p class="text-md text-gray-300">Capital One - Digital for Good</p>
        </div>
        <div class="flex flex-col justify-around p-2">
          <div class="flex flex-row justify-between space-x-16 items-end">
            <h3 class="text-2xl">Chair/Vice-Chair/Member</h3>
            <p class="text-right text-md text-gray-300">May 2014 - May 2018</p>
          </div>
          <p class="text-md text-gray-300">Peterborough Youth Council</p>
        </div>
      </div>
      <!-- Awards -->
      <div class="flex flex-col justify-center items-center border-1 border-white p-4">
        <h2 class="text-3xl">Awards</h2>
        <ul class="text-xl text-gray-300 list-disc ">
          <li>Soonjin Jung Computer Science Prize (2021-2022)<br /><span class="text-sm ml-4">Trent University</span>
          </li>
          <li>2nd Place and People's Choice Winner (2020) <br /><span class="text-sm ml-4">Hackworks HackINSTEAD</span>
          </li>
          <li>Peterborough Youth Volunteer of the Year (2017) <br /><span class="text-sm ml-4">City of
              Peterborough</span></li>
        </ul>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
  export default {}

</script>
