<template>
 <section id="projects" class="relative bg-primary-blue bg-opacity-80 min-h-screen flex flex-col justify-center items-center">
            <h2 class="text-4xl" >Portfolio</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 justify-around items-stretch m-4 gap-4 w-5/6">
               <div class="border-gray-500 border-2 p-4 rounded-md flex flex-col items-center justify-center">
                  <img src="/NoMoreMeetings.jpg" alt="NoMoreMeetings Homepage" class="w-36" />
                  <h3 class="text-2xl">No More Meetings</h3>
                  <div class="flex flex-row justify-between items-center space-x-4">
                     <a href="https://gallant-poitras-d4d4d2.netlify.app" class="hidden lg:block border-yellow-300 border-2 px-6 py-2 rounded-md hover:bg-yellow-300 hover:text-black">Demo Site</a>
                     <a href="https://github.com/EvanCampbellWeiner/NoMoreMeetings" target="_blank" class="border-gray-500 border-2 px-6 py-2 rounded-md hover:bg-blue-800 hover:text-white">Github</a>
                  </div>
               </div>
               <div class="border-gray-500 border-2 p-4 rounded-md flex flex-col items-center justify-center">
                  <img src="/Sequence21.jpg" alt="NoMoreMeetings Homepage" class="w-36" />
                  <h3 class="text-2xl">Sequence 21</h3>
                  <div class="flex flex-row justify-between items-center space-x-4">
                     <NuxtLink to="/blog/sequence21" class="border-gray-500 border-2 px-6 py-2 rounded-md hover:bg-blue-800 hover:text-white">Blog</NuxtLink>
                  </div>
               </div>
               <div class="border-gray-500 border-2 p-4 rounded-md flex flex-col items-center justify-center">
                  <img src="/Stluet.jpg" alt="NoMoreMeetings Homepage" class="w-36" />
                  <h3 class="text-2xl">Stluet Furniture</h3>
                  <div class="flex flex-row justify-between items-center space-x-4">
                     <a href="https://stluet.com" target="_blank" class="border-gray-500 border-2 px-6 py-2 rounded-md hover:bg-green-800 hover:text-white">Website</a>
                     <NuxtLink to="/blog/stluet" class="border-gray-500 border-2 px-6 py-2 rounded-md hover:bg-blue-800 hover:text-white">Blog</NuxtLink>
                  </div>
               </div>
               <div class="border-gray-500 border-2 p-4 rounded-md flex flex-col items-center justify-center">
                  <img src="/flashcardextension.png" alt="NoMoreMeetings Homepage" class="w-24" />
                  <h3 class="text-2xl">Flashcards Extension</h3>
                  <div class="flex flex-row justify-between items-center space-x-4">
                     <NuxtLink  to="blog/Flashcards" class="border-gray-500 border-2 px-6 py-2 rounded-md hover:bg-green-800 hover:text-white">Blog</NuxtLink>
                     <a href="https://github.com/EvanCampbellWeiner/flashcards" target="_blank" class="border-gray-500 border-2 px-6 py-2 rounded-md hover:bg-blue-800 hover:text-white">Github</a>
                  </div>
               </div>
               <div class="border-gray-500 border-2 p-4 rounded-md flex flex-col items-center justify-center">
                  <img src="/plasticoceans.jpg" alt="NoMoreMeetings Homepage" class="w-36" />
                  <h3 class="text-2xl">Plastic Oceans</h3>
                  <div class="flex flex-row justify-between items-center space-x-4">
                     <NuxtLink to="blog/plasticoceans" class="border-gray-500 border-2 px-6 py-2 rounded-md hover:bg-green-800 hover:text-white">Blog</NuxtLink>
                     <a href="https://github.com/nedselzer7/plastic-oceans" target="_blank" class="border-gray-500 border-2 px-6 py-2 rounded-md hover:bg-blue-800 hover:text-white">Github</a>
                  </div>
               </div>
               <div class="border-gray-500 border-2 p-4 rounded-md flex flex-col items-center justify-center">
                  <img src="/motivania.jpg" alt="JETA Battle Scene" class="w-36" />
                  <h3 class="text-2xl">JETA Dungeon Game</h3>
                  <div class="flex flex-row justify-between items-center space-x-4">
                     <a href="https://github.com/EvanCampbellWeiner/JETADungeonGame" target="_blank" class="border-gray-500 border-2 px-6 py-2 rounded-md hover:bg-blue-800 hover:text-white">Github</a>
                  </div>
               </div>
            </div>
      </section>
</template>