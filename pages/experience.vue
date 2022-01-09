<template>
  <div class="text-white font-eb">
    <video id="video" autoplay muted loop class="fixed -z-10 min-w-full min-h-full max-w-none">
      <source src="/backgroundvideoAndroid2.mp4" type="video/mp4">
    </video>
    <header class="bg-primary-blue relative bg-opacity-40">
      <section id="header" class="flex flex-row md:justify-left px-4 md:items-center">
        <h1 class="text-4xl tracking-widest flex-1 font-cormorant py-4"><NuxtLink to="/index">Evan Campbell-Weiner</NuxtLink></h1>
        <!-- Desktop-->
        <nav class="hidden md:flex md:flex-row text-lg tracking-wider">
          <NuxtLink to="/experience" class="hover:bg-gray-600 px-3 py-6 font-cormorant">Experience</NuxtLink>
          <NuxtLink to="/projects" class="hover:bg-gray-600 px-3 py-6">Projects</NuxtLink>
          <NuxtLink to="/biography" class="hover:bg-gray-600 px-3 py-6">Biography</NuxtLink>
          <NuxtLink to="/contact" class="hover:bg-gray-600 px-3 py-6">Contact</NuxtLink>

        </nav>

        <!-- Mobile Nav -->
        <!-- Mobile menu button -->
        <div id="mobileNav" class="md:hidden flex items-center justify-right">
          <button class="outline-none mobile-menu-button">
            <svg class="w-8 h-9 text-white" x-show="!showMenu" fill="none" stroke-linecap="round"
              stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </section>
    </header>
    <section id="resume" class="relative bg-primary-blue bg-opacity-95 min-h-screen flex flex-col">
      <div class=" flex flex-col justify-center items-center border-1 border-gray-300  m-8 p-4">
        <h2 class="text-3xl">Summary of Qualifications</h2>
        <ul
          class="text-xl p-4 mt-4 flex flex-col items-center justify-center border-2 border-white border-solid text-gray-300">
          <li>2.5 years of Web Development Experience</li>
          <li>Experience working on over 20 Web Applications</li>
          <li>1+ year experience as a junior developer at iApotheca Healthcare</li>
          <li>1+ year experience freelancing for Overscore Media</li>
          <li>BSc Honours in Computer Science (Co-op Option) at Trent University</li>
        </ul>
      </div>
      <div class="flex flex-col justify-center items-center border-1 border-white m-6 p-2 text-xl space-y-4">
        <h2 class="text-3xl text-center">Work Experience</h2>
        <div class="flex flex-col justify-around p-8">
          <div class="flex flex-row justify-between space-x-16 items-end">
            <h3 class="text-2xl">Junior Developer</h3>
            <p class="text-right text-md text-gray-300">May 2021 - Present <br />
              September 2019 - December 2019</p>
          </div>
          <p class="text-md text-gray-300">iApotheca Healthcare</p>

          <ul class="text-md  pt-2 list-disc flex flex-col text-gray-300">
            <li>Experience using Laravel / Livewire to update existing applications.</li>
            <li>Used Github PR's for feature focused development</li>
            <li>PHPUnit for Unit and Feature testing</li>
            <li>Created an API using Postman</li>
            <li>Used Code with Me / Pair as needed</li>
          </ul>
        </div>
        <div class="flex flex-col justify-around">
          <div class="flex flex-row justify-between space-x-8 items-end">
            <h3 class="text-2xl">Backend Developer</h3>
            <p class="text-right text-md text-gray-300">May 2021 - Present </p>
          </div>
          <p class="text-md text-gray-300">Overscore Media</p>

          <ul class="text-md  pt-2 list-disc flex flex-col text-gray-300">
            <li>Experience using Laravel / Livewire to update existing applications.</li>
            <li>Used Github PR's for feature focused development</li>
            <li>PHPUnit for Unit and Feature testing</li>
            <li>Created an API using Postman</li>
            <li>Used Code with Me / Pair as needed</li>
          </ul>
        </div>
        <div class="flex flex-col justify-around">
          <div class="flex flex-row justify-between space-x-8 items-end">
            <h3 class="text-2xl">IT Systems Analyst</h3>
            <p class="text-right text-md text-gray-300">January 2021 - May 2021 </p>
          </div>
          <p class="text-md text-gray-300">Trent University</p>

          <ul class="text-md  pt-2 list-disc flex flex-col text-gray-300">
            <li>Experience using Laravel / Livewire to update existing applications.</li>
            <li>Used Github PR's for feature focused development</li>
            <li>PHPUnit for Unit and Feature testing</li>
            <li>Created an API using Postman</li>
            <li>Used Code with Me / Pair as needed</li>
          </ul>
        </div>
      </div>
      <!-- Education -->
      <div class="flex flex-col justify-center items-center border-1 border-white p-4">
        <h2 class="text-3xl">Education</h2>
        <ul class="text-md text-gray-300">
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
        <div class="flex flex-col justify-around p-4">
          <div class="flex flex-row justify-between space-x-16 items-end">
            <h3 class="text-2xl">Front-End Developer</h3>
            <p class="text-right text-md text-gray-300">October 2020 - January 2021</p>
          </div>
          <p class="text-md text-gray-300">Capital One - Digital for Good</p>
        </div>
        <div class="flex flex-col justify-around p-2">
          <div class="flex flex-row justify-between space-x-16 items-end">
            <h3 class="text-2xl">Chair / Member</h3>
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
    <footer class="relative bg-alternate-blue bg-opacity-90 flex flex-row items-center justify-around p-16">
      <div class="flex flex-col items-center justify-around">
        <h5 class="text-4xl">Connect</h5>
        <ul class="flex flex-row items-center justify-around space-x-4">
          <li><a href="https://github.com/evancampbellweiner" target="_blank">Github</a></li>
          <li><a href="https://www.linkedin.com/in/evancampbellweiner/" target="_blank">LinkedIn</a></li>
          <li>
            <NuxtLink to="/contact">Contact</NuxtLink>
          </li>
        </ul>
      </div>
      <h5 class="text-2xl">&copy 2021 Evan Campbell-Weiner</h5>
    </footer>
  </div>
</template>

<script>
  export default {}

</script>
