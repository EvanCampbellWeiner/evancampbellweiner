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
            Web Development technologies and have spent this time working at <a href="https://iapotheca.com" target="_blank" class="text-blue-300">iApotheca Healthcare</a> as a Jr. Developer, working as a freelancer
            for <a href="https://overscore.media" target="_blank" class="text-purple-400">Overscore Media</a>, and working on my own personal projects. For more information I would invite you to checkout my experience
            and the various projects I have worked on. </div>
         </div> 
   </section>
   <section id="chart" class="relative bg-primary-blue bg-opacity-40 min-h-screen flex flex-col justify-center items-center">
         <h2 class="text-4xl" >Experience</h2>
         <ExperienceChart />
         <div class="flex flex-row justify-between items-center space-x-4">
            <NuxtLink to="/experience" class="hidden lg:block border-gray-500 border-2 px-6 py-2 rounded-md hover:bg-gray-800 hover:text-white">Resume</NuxtLink>
            <NuxtLink to="/experiencelist" class="border-gray-500 border-2 px-6 py-2 rounded-md hover:bg-gray-800 hover:text-white">Experience List</NuxtLink>
         </div>
   </section>
   <Projects />
   <Footer />
   </div>
</template>

<script>
export default {
}
</script>
