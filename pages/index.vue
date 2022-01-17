<template>
   <div class="text-white font-eb">
       <video id="video" autoplay muted loop class="fixed -z-10 min-w-full min-h-full max-w-none">
         <source src="/backgroundvideoAndroid2.mp4" type="video/mp4">
      </video>
    <Header />
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
            <div class="flex flex-row justify-between items-center space-x-4">
               <button class="hidden lg:block border-gray-500 border-2 px-6 py-2 rounded-md hover:bg-gray-800 hover:text-white">More Info</button>
               <button class="border-gray-500 border-2 px-6 py-2 rounded-md hover:bg-gray-800 hover:text-white">Project List</button>
            </div>
      </section>
      <section id="projects" class="relative bg-primary-blue bg-opacity-80 min-h-screen flex flex-col justify-center items-center">
            <h2 class="text-4xl" >Portfolio</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 justify-around items-stretch m-4 gap-4 w-5/6">
               <div class="border-gray-500 border-2 p-4 rounded-md flex flex-col items-center justify-center">
                  <img src="/NoMoreMeetings.jpg" alt="NoMoreMeetings Homepage" class="w-36" />
                  <h3 class="text-2xl">No More Meetings</h3>
                  <div class="flex flex-row justify-between items-center space-x-4">
                     <button class="hidden lg:block border-yellow-300 border-2 px-6 py-2 rounded-md hover:bg-yellow-300 hover:text-black">Demo (Desktop Only)</button>
                     <button class="border-gray-500 border-2 px-6 py-2 rounded-md hover:bg-blue-800 hover:text-white">Github</button>
                  </div>
               </div>
               <div class="border-gray-500 border-2 p-4 rounded-md flex flex-col items-center justify-center">
                  <img src="/Sequence21.jpg" alt="NoMoreMeetings Homepage" class="w-36" />
                  <h3 class="text-2xl">Sequence 21</h3>
                  <div class="flex flex-row justify-between items-center space-x-4">
                     <button class="border-yellow-300 border-2 px-6 py-2 rounded-md hover:bg-yellow-300 hover:text-black">Live</button>
                     <NuxtLink to="/blog/sequence21" class="border-gray-500 border-2 px-6 py-2 rounded-md hover:bg-blue-800 hover:text-white">Blog</NuxtLink>
                  </div>
               </div>
               <div class="border-gray-500 border-2 p-4 rounded-md flex flex-col items-center justify-center">
                  <img src="/Stluet.jpg" alt="NoMoreMeetings Homepage" class="w-36" />
                  <h3 class="text-2xl">Stluet Furniture</h3>
                  <div class="flex flex-row justify-between items-center space-x-4">
                     <button class="border-gray-500 border-2 px-6 py-2 rounded-md hover:bg-green-800 hover:text-white">Live</button>
                     <button class="border-gray-500 border-2 px-6 py-2 rounded-md hover:bg-blue-800 hover:text-white">Blog</button>
                  </div>
               </div>
               <div class="border-gray-500 border-2 p-4 rounded-md flex flex-col items-center justify-center">
                  <img src="/flashcardextension.png" alt="NoMoreMeetings Homepage" class="w-24" />
                  <h3 class="text-2xl">Flashcards Extension</h3>
                  <div class="flex flex-row justify-between items-center space-x-4">
                     <button class="border-gray-500 border-2 px-6 py-2 rounded-md hover:bg-green-800 hover:text-white">Demo Video</button>
                     <button class="border-gray-500 border-2 px-6 py-2 rounded-md hover:bg-blue-800 hover:text-white">Github</button>
                  </div>
               </div>
               <div class="border-gray-500 border-2 p-4 rounded-md flex flex-col items-center justify-center">
                  <img src="/plasticoceans.jpg" alt="NoMoreMeetings Homepage" class="w-36" />
                  <h3 class="text-2xl">Plastic Oceans</h3>
                  <div class="flex flex-row justify-between items-center space-x-4">
                     <button class="border-gray-500 border-2 px-6 py-2 rounded-md hover:bg-green-800 hover:text-white">Demo</button>
                     <button class="border-gray-500 border-2 px-6 py-2 rounded-md hover:bg-blue-800 hover:text-white">Github</button>
                  </div>
               </div>
               <div class="border-gray-500 border-2 p-4 rounded-md flex flex-col items-center justify-center">
                  <img src="/motivania.jpg" alt="NoMoreMeetings Homepage" class="w-36" />
                  <h3 class="text-2xl">Motivania</h3>
                  <div class="flex flex-row justify-between items-center space-x-4">
                     <button class="border-gray-500 border-2 px-6 py-2 rounded-md hover:bg-green-800 hover:text-white">Demo</button>
                     <button class="border-gray-500 border-2 px-6 py-2 rounded-md hover:bg-blue-800 hover:text-white">Github</button>
                  </div>
               </div>
            </div>
      </section>
      <Footer />
   </div>
</template>

<script>
export default {
}
</script>
