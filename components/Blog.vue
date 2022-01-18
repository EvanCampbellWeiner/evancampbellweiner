<template>
  <article class="relative text-white bg-primary-blue bg-opacity-80 flex flex-col justify-around items-center min-h-screen space-x-8">
      <div class="flex flex-row items-center justify-between">
         <h2 class="text-4xl">{{ title }}</h2>
         <img :src="img" class="w-1/2 rounded-md"/>
      </div>
      <p class="w-1/2">{{ paragraph1 }}</p> 
      <p class="w-1/2">{{ paragraph2 }}</p>
      <p class="w-1/2">{{ paragraph3 }}</p>
  </article>
</template>
<script>
  export default {
     props: {
        title: String,
        img: String,
        paragraph1: String,
        paragraph2: String,
        paragraph3: String,
      },
     }
</script>