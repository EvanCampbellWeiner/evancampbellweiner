<template>
   <div class="text-white font-eb">
      <video id="video" autoplay muted loop class="fixed -z-10 min-w-full min-h-full max-w-none">
         <source src="/backgroundvideoAndroid2.mp4" type="video/mp4">
      </video>
      <Header />
      <section id="experiencelist" class="relative bg-alternate-blue bg-opacity-80 min-h-screen flex flex-col justify-center items-center pt-16 font-eb">
         <h1 class="text-4xl">Full List of Projects and Courses</h1>
         <ExperienceChart />
         <article id="list" v-if="display" class="py-16">
         <div class="flex flex-row space-x-4  items-start pb-8">
              <h2 class="text-xl">Language:</h2>
               <select v-model="display" class="min-w-1/2 bg-primary-blue text-xl">
                  <option v-for="language in languages" :value="language" >
                     {{language.name}}
                  </option>
               </select>
         </div>
         <div class="grid grid-cols-2 items-start gap-4 justify-center">
            <h2 class="text-xl">Projects</h2>
            <h2 class="text-xl">Courses</h2>
               <ul class="flex flex-col justify-start items-start text-white list-disc p-2">
               <li v-for="project in display.projects" :key="project">
                  {{ project }} 
               </li>
            </ul>
            <ul class="flex flex-col text-white list-disc p-2">
               <li v-for="course in display.courses" :key="course">
                  {{ course }} 
               </li>
            </ul>
         </div>
         </article>
      </section>
      <Footer />
   </div>
</template>
<script>
   export default {
      data:  function() {
         return {
            display: {
            },
            languages: [
               {
                  name: 'HTML/CSS',
                  projects: [
                     'Stluet Furniture', 'Econoroute', 'iApotheca Narcotic Reconciliation System', 'iApotheca Portal', 'Sequence21', 'Flashcards Extension',
                     'Yogatronic Sequencer', 'Punch Clock System', 'Laravel-Quick-Start', 'CRM System', 'evancampbellweiner.com', 'plastic oceans calculator', 
                     'overscore.media', 'NoMoreMeetings', 'CMC Art Website',
                  ],
                  courses: [
                     'COIS3420 - Web Applications Development', 'COIS2830 - Multimedia and Design'
                  ],
                  show: false
               },
               {
                  name: 'Laravel',
                  projects: [
                     'Stluet Furniture', 'Econoroute', 'iApotheca Narcotic Reconciliation System', 'iApotheca Portal', 'Sequence21', 'Flashcards Extension',
                     'Yogatronic Sequencer', 'Punch Clock System', 'Laravel-Quick-Start', 'CRM System'
                  ],
                  courses: [
                     'Laravel 5 from Scratch - Laracasts'
                  ],
                  show: false
               },
               {
                  name: 'Vue JS',
                  projects: [
                     'Stluet Furniture', 'Pinecone Party', 'Punch Clock System', 'evancampbellweiner.com', 'Flashcards Extension', 
                     'overscore.media', 'CRM System', 'Laravel-Quick-Start'
                  ],
                  show: false
               },
               {
                  name: 'Javascript',
                  projects: [
                     'Econoroute', 'Plastic Oceans', 'Narc Rec', 'Punch Clock System', 'Sequence21', 'Stluet Furniture',
                     'Pinecone Party', 'NoMoreMeetings', 'CMC Art Website', 'evancampbellweiner.com', 
                  ],
                  courses: [
                     'COIS3420 - Web Application Development', 
                  ],
                  show: false
               },
               {
                  name: 'C#',
                  projects: [
                      'Automatic Sestina Maker'
                  ],
                  courses: [
                     'COIS1020 - Intro to Programming', 'COIS2020 - Data Structures and Algorithms', 'COIS3020 - Data Structures and Algorithms 2', 'COIS3040 - Software Architecture and Design', 
                  ],
                  show: false
               },
               {
                  name: 'C++ / C',
                  projects: [
                     
                  ],
                  courses: [     
                     'COIS3380 - Systems Programming in C', 'COIS3320 - Operating Systems', 'COIS4350 - High Performance Computing',   
                  ],
                  
                  show: false
               },
               {
                  name: 'Python',
                  projects: [
                     'Flutter / Python Pill Counter'
                  ],
                  courses: [
                     'COIS3400 - Databases', 'COIS4400 - Data Mining', 'COIS4100 - Programming Languages'
                  ],
                  show: false
               },
               {
                  name: 'Java',
                  projects: [
                     'Amazon Java Cloud Application',
                     'Dungeon Crawler JavaFX Game'
                  ],
                  courses: [
                     'COIS2240 - Software Architecture and Design',
                  ],
                  show: false
               },
            ]
         }
      },
      mounted: function() {
         this.display = this.languages[0]
      },
      methods: {
         seeProjects : function(type) {
           this.display = type;
         }
      },
   }
</script>