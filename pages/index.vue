<template>
   <div class="text-white font-eb">
       <video id="video" autoplay muted loop class="fixed -z-10 min-w-full min-h-full max-w-none">
         <source src="/backgroundvideoAndroid.mp4" type="video/mp4">
      </video>
    <Header />
   <section id="Bio" class="relative bg-primary-blue bg-opacity-80 min-h-screen flex flex-col items-center justify-center">
         <article id="imageBio" class="max-h-1/3 pt-8 grid grid-cols-1 md:grid-cols-2 items-center justify-items-center auto-cols-max">
            <img src="/EvanShirt.jpg" class="w-2/3 border-2 border-black rounded-sm"/>
            <div class="flex flex-col items-center justify-center max-w-auto">
                <h2 class="text-2xl sm:text-4xl pb-2">Welcome</h2>
                <div class="text-lg p font-eb">My name is Evan Campbell-Weiner and I am a Software Developer based out of Canada. I am currently
                finishing a Honours Degree in Computer Science (Co-op Option) at Trent University. Currently I have 3 years of experience in 
                Web Development technologies and have spent this time working at <a href="https://iapotheca.com" target="_blank" class="text-blue-300">iApotheca Healthcare</a> as a Jr. Developer, working as a freelancer
                for <a href="https://overscore.media" target="_blank" class="text-purple-400">Overscore Media</a>, and working on my own personal projects. For more information I would invite you to checkout my experience
                and the various projects I have worked on. </div>
                <article id="projects" class="grid grid-cols-1 md:grid-cols-3 md:gap-6 m-2">
                    <div class="border-black border-2 p-4 rounded-md flex flex-col items-center justify-center">
                        <img src="/NoMoreMeetings.jpg" alt="NoMoreMeetings Homepage" class="w-36" />
                        <h3 class="text-2xl">No More Meetings</h3>
                        <div class="flex flex-row justify-between items-center space-x-4">
                            <a href="https://gallant-poitras-d4d4d2.netlify.app" class="hidden lg:block border-yellow-300 border-2 px-6 py-2 rounded-md hover:bg-yellow-300 hover:text-black">Demo</a>
                            <a href="https://github.com/EvanCampbellWeiner/NoMoreMeetings" target="_blank" class="border-gray-500 border-2 px-6 py-2 rounded-md hover:bg-blue-800 hover:text-white">Github</a>
                        </div>
                    </div>
                    <div class="border-black border-2 p-4 rounded-md flex flex-col items-center justify-center">
                        <img src="/Sequence21.jpg" alt="NoMoreMeetings Homepage" class="w-36" />
                        <h3 class="text-2xl">Sequence 21</h3>
                        <div class="flex flex-row justify-between items-center space-x-4">
                            <a href="https://sequence21.com" target="_blank" class="border-yellow-300 border-2 px-6 py-2 rounded-md hover:bg-yellow-300 hover:text-black">Website</a>
                            <a href="https://overscore.media/services/examples/sequence21/" class="border-gray-500 border-2 px-6 py-2 rounded-md hover:bg-blue-800 hover:text-white">Blog</a>
                        </div>
                    </div>
                    <div class="border-black border-2 p-4 rounded-md flex flex-col items-center justify-center">
                        <img src="/Stluet.jpg" alt="NoMoreMeetings Homepage" class="w-36" />
                        <h3 class="text-2xl">Stluet Furniture</h3>
                        <div class="flex flex-row justify-between items-center space-x-4">
                            <a href="https://stluet.com" target="_blank" class="border-gray-500 border-2 px-6 py-2 rounded-md hover:bg-green-800 hover:text-white">Website</a>
                            <a href="https://overscore.media/services/examples/stluet/" class="border-gray-500 border-2 px-6 py-2 rounded-md hover:bg-blue-800 hover:text-white">Blog</a>
                        </div>
                    </div>
                </article>
            </div>
        </article>
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
