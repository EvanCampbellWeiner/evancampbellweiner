<template>
  <div class="text-white font-sans">
    <video id="video" autoplay muted loop class="fixed -z-10 min-w-full min-h-full max-w-none">
      <source src="/backgroundvideoAndroid2.mp4" type="video/mp4">
    </video>
    <Header />
    <section id="resume" class="relative bg-primary-blue bg-opacity-70 min-h-screen flex flex-col">
      <div class="flex flex-col justify-center items-center p-4">
        <h2 class="text-3xl">Summary of Qualifications</h2>
        <ul
          class="text-lg p-6 mt-4 flex flex-col items-start justify-start border-2 border-white border-solid rounded-md list-disc text-gray-300">
          <li>3 Years of Web Application Development using HTML / CSS</li>
          <li>Experience working on over 20 Web Applications</li>
          <li>1+ year experience as a junior developer at iApotheca Healthcare</li>
          <li>1+ year experience freelancing for Overscore Media</li>
          <li>BSc Honours in Computer Science (Co-op Option) at Trent University</li>
        </ul>
      </div>
      <div class="flex flex-col justify-center items-center border-1 border-white m-6 p-2 text-xl space-y-4">
        <h2 class="text-3xl text-center">Work Experience</h2>
        <!-- iApotheca -->
        <div class="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <experience-component :info="iapotheca"/>
            <experience-component :info="overscore"/>
            <experience-component :info="trentit"/>
        </div>
      </div>
      <!-- Education -->
      <div class="flex flex-col justify-center items-center border-1 border-white p-4">
        <h2 class="text-3xl">Education</h2>
        <div class="lg:max-w-1/2">
            <experience-component :info="trentEducation" />
        </div>
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
        <div class="grid md:grid-cols-2 gap-8">
            <experience-component :info="capitalOne" />
            <experience-component :info="pyc" />
        </div>
      </div>
      <!-- Awards -->
      <div class="flex flex-col justify-center items-center border-1 border-white p-4">
        <h2 class="text-3xl">Awards</h2>
        <ul class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <li><experience-component :info="soonjin"/></li>
            <li><experience-component :info="hackworks"/></li>
            <li><experience-component :info="volunteeroftheyear"/></li>

        </ul>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import ExperienceComponent from '../components/ExperienceComponent.vue'
  export default {
    components: { ExperienceComponent },

    data:  function() {
      return {
        iapotheca: {
            'jobtitle': "Junior Developer",
            descriptions: [
                'Experience using Laravel / Livewire (TALL Stack) to update existing applications.',
                'Created feature, unit, and integration tests for new / existing features',
                'Built a REST API to support delivery creation'
            ],
            
            'dateStarted' : 'May 2021',
            'dateEnded' : 'Present',
            'company' : 'iApotheca Healthcare'
        },
        overscore: {
            'jobtitle': 'Backend Developer',
            descriptions: [
                'Worked in a team of 3 using Laravel / Inertia JS to create an online store for Stluet Furniture',
                'Worked in a team using the TALL stack to create Sequence21',
                'Acted as a backend developer to help create database, program structure, stripe integration, and more',
            ],
            'dateStarted': 'May 2021',
            'dateEnded': 'Present',
            'company' : 'Overscore Media'
        },
        trentit: {
            'jobtitle': 'IT Systems Analyst',
            descriptions: [
                'Created data driven reports in Request Tracker to support business decisions',
                'Developed user guides and help articles for an ITSM system',
                'Researched ITSM systems and ITIL guidelines'
            ],
            'dateStarted' : 'January 2021',
            'dateEnded' : 'May 2021',
            'company' : 'Trent University'

        },
        trentEducation: {
            'jobtitle': 'BSc Honours in Computer Science',
            descriptions: [
                'Graduating June 2022',
                'Co-op Option',
                'Specialization in Software Engineering'
            ],
            'dateStarted': 'September 2018',
            'dateEnded': 'June 2022',
            'company' : 'Trent University'
        },
        capitalOne: {
            'jobtitle': 'Front-End Developer',
            descriptions: [
                'Created the front-end for an environmental impact quiz',
                'Wrote code to connect with a background API to calculate results'
            ],
            'dateStarted': 'October 2020',
            'dateEnded' : 'January 2021',
            'company' : 'Capital One - Hack for Good'
        },
        pyc: {
            'jobtitle':'Chair / Vice-Chair / Member',
            descriptions: [
                'Facilitated and ran monthly meetings with other members of the council',
                'Planned National Youth Week and Global Youth Day events in Peterborough',
                'Represented the council at various city advisory meetings',
            ],
            'dateStarted': 'May 2014',
            'dateEnded': 'May 2018',
            'company' : 'Peterborough Youth Council',
        },
        soonjin: {
            'jobtitle':'Soonjin Jung Computer Science Prize',
            descriptions: [
                'Awarded to the CS student with the highest GPA in third year',
            ],
            'dateStarted': '2020',
            'dateEnded' : '2021',
            'company' : 'Trent University'
        },
        hackworks: {
            'jobtitle': '2nd Place and Peoples Choice Winner',
            descriptions: [
                'Awarded for my Flashcards Extension Application',
            ],
            'dateStarted': 'August 2020',
            'company': 'Hackworks HackINSTEAD',
        },
        volunteeroftheyear: {
            'jobtitle': 'Youth Volunteer of the Year (2017)',
            descriptions: [
                'Awarded for my volunteer work with the PTBO Youth Council'
            ],
            'dateStarted': '2017',
            'dateEnded': '2018',
            'company': 'City of Peterborough'
        }

      }
   }
}
</script>