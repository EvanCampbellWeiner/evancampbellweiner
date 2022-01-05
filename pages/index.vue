<template>
   <div class="text-white overflow-hidden font-eb">
       <video id="video" autoplay muted loop class="fixed -z-10 min-w-full min-h-full max-w-none overflow-hidden">
         <source src="/backgroundvideoAndroid2.mp4" type="video/mp4">
      </video>
      <header class="bg-primary-blue relative bg-opacity-40">
         <section id="header" class="flex flex-row md:justify-left px-4 md:items-center">
            <h1 class="text-4xl tracking-widest flex-1 font-cormorant py-4">Evan Campbell-Weiner</h1>
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
                  <svg
                     class="w-8 h-9 text-white"
                     x-show="!showMenu"
                     fill="none"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     stroke-width="2"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
               </button>
            </div>
         </section>
      </header>

      <section id="Bio" class="relative bg-alternate-blue bg-opacity-40 min-h-screen grid grid-cols-1 md:grid-cols-2 items-center justify-items-center auto-cols-max">
            <img src="/EvanHill.jpg" class="w-2/3 border-4 border-white rounded-sm"/>
            <div class="flex flex-col items-center justify-center p-auto m-2 md:mr-14">
               <h2 class="text-2xl sm:text-4xl pb-2">Welcome</h2>
               <div class="text-lg p font-eb">My name is Evan Campbell-Weiner and I am a Software Developer based out of Canada. I am currently
               finishing a Honours Degree in Computer Science (Co-op Option) at Trent University. Currently I have 3 years of experience in 
               Web Development technologies and have spent this time working at iApotheca Healthcare as a Jr. Developer, working as a freelancer
               for Overscore Media, and working on my own personal projects. For more information I would invite you to checkout my experience
               and the various projects I have worked on. </div>
            </div> 
      </section>
      <section id="chart" class="relative bg-primary-blue bg-opacity-40 min-h-screen flex flex-col justify-center items-center">
            <h2 class="text-4xl" >Experience</h2>
            <ExperienceChart />
      </section>
      <section id="projects" class="relative bg-primary-blue bg-opacity-80 min-h-screen flex flex-col justify-center items-center">
            <h2 class="text-4xl" >Portfolio</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 justify-around items-stretch m-4 gap-4 w-5/6">
               <div class="border-gray-500 border-2 p-4 rounded-md flex flex-col items-center justify-center">
                  <img src="/NoMoreMeetings.jpg" alt="NoMoreMeetings Homepage" class="w-36" />
                  <h3 class="text-2xl">No More Meetings</h3>
                  <div class="flex flex-row justify-between items-center space-x-4">
                     <button class="hidden lg:block border-gray-500 border-2 px-6 py-2 rounded-md hover:bg-green-800 hover:text-white">Demo (Desktop Only)</button>
                     <button class="border-gray-500 border-2 px-6 py-2 rounded-md hover:bg-blue-800 hover:text-white">Github</button>
                  </div>
               </div>
               <div class="border-gray-500 border-2 p-4 rounded-md flex flex-col items-center justify-center">
                  <img src="/NoMoreMeetings.jpg" alt="NoMoreMeetings Homepage" class="w-36" />
                  <h3 class="text-2xl">Sequence 21</h3>
                  <div class="flex flex-row justify-between items-center space-x-4">
                     <button class="border-gray-500 border-2 px-6 py-2 rounded-md hover:bg-green-800 hover:text-white">Live</button>
                     <button class="border-gray-500 border-2 px-6 py-2 rounded-md hover:bg-blue-800 hover:text-white">Blog</button>
                  </div>
               </div>
               <div class="border-gray-500 border-2 p-4 rounded-md flex flex-col items-center justify-center">
                  <img src="/NoMoreMeetings.jpg" alt="NoMoreMeetings Homepage" class="w-36" />
                  <h3 class="text-2xl">Stluet Furniture</h3>
                  <div class="flex flex-row justify-between items-center space-x-4">
                     <button class="border-gray-500 border-2 px-6 py-2 rounded-md hover:bg-green-800 hover:text-white">Live</button>
                     <button class="border-gray-500 border-2 px-6 py-2 rounded-md hover:bg-blue-800 hover:text-white">Blog</button>
                  </div>
               </div>
               <div class="border-gray-500 border-2 p-4 rounded-md flex flex-col items-center justify-center">
                  <img src="/NoMoreMeetings.jpg" alt="NoMoreMeetings Homepage" class="w-36" />
                  <h3 class="text-2xl">Flashcards Extension</h3>
                  <div class="flex flex-row justify-between items-center space-x-4">
                     <button class="border-gray-500 border-2 px-6 py-2 rounded-md hover:bg-green-800 hover:text-white">Demo Video</button>
                     <button class="border-gray-500 border-2 px-6 py-2 rounded-md hover:bg-blue-800 hover:text-white">Github</button>
                  </div>
               </div>
               <div class="border-gray-500 border-2 p-4 rounded-md flex flex-col items-center justify-center">
                  <img src="/NoMoreMeetings.jpg" alt="NoMoreMeetings Homepage" class="w-36" />
                  <h3 class="text-2xl">Motivania</h3>
                  <div class="flex flex-row justify-between items-center space-x-4">
                     <button class="border-gray-500 border-2 px-6 py-2 rounded-md hover:bg-green-800 hover:text-white">Demo</button>
                     <button class="border-gray-500 border-2 px-6 py-2 rounded-md hover:bg-blue-800 hover:text-white">Github</button>
                  </div>
               </div>
               <div class="border-gray-500 border-2 p-4 rounded-md flex flex-col items-center justify-center">
                  <img src="/NoMoreMeetings.jpg" alt="NoMoreMeetings Homepage" class="w-36" />
                  <h3 class="text-2xl">BCW Books</h3>
                  <div class="flex flex-row justify-between items-center space-x-4">
                     <button class="border-gray-500 border-2 px-6 py-2 rounded-md hover:bg-green-800 hover:text-white">Demo Video</button>
                     <button class="border-gray-500 border-2 px-6 py-2 rounded-md hover:bg-blue-800 hover:text-white">Github</button>
                  </div>
               </div>
            </div>
      </section>
      <footer class="fixed bg-alternate-blue flex flex-row items-center justify-around p-16">
         <div class="flex flex-col items-center justify-around">
            <h5 class="text-4xl">Connect</h5>
            <ul class="flex flex-row items-center justify-around space-x-4">
               <li><button>Github</button></li>
               <li><button>LinkedIn</button></li>
               <li><button>Twitter</button></li>
               <li><button>Email</button></li>
            </ul>
         </div>
         <h5 class="text-2xl">&copy 2021 Evan Campbell-Weiner</h5>
      </footer>
   </div>
</template>

<script>
export default {
}
</script>
