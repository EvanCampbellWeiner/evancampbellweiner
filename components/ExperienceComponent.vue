<template>
  <article class="relative text-white border border-white p-4 rounded-md w-full font-sans">
      <div class="flex flex-row items-center justify-between border-b border-gray-500">
         <header class="flex flex-col items-start justify-center">
         <h2 class="text-lg lg:text-md">{{info.jobtitle}}</h2>
         <p class="text-gray-300  text-md lg:text-sm">{{info.company}}</p>
         </header>
         <p class="text-md lg:text-sm text-gray-300 justify-self-end self-end">{{info.dateStarted}} <span v-if="info.dateEnded">- {{info.dateEnded}}</span></p>
      </div>
      <ul class="list-disc pl-4">
        <li class="text-md lg:text-sm" v-for="description in info.descriptions">{{description}}</li>
      </ul>
  </article>
</template>
<script>
  export default {
     props: {
         info: {
             jobtitle: String,
            company: String,
            descriptions: Array,
            endDate: String,
         }
        

      },
     }
</script>