<template>
   <div>
      <video id="video" autoplay muted loop class="fixed -z-10 min-w-full min-h-full max-w-none">
         <source src="/backgroundvideoAndroid2.mp4" type="video/mp4">
      </video>
      <Header />
      <Blog :title="title" :paragraph1="paragraph1" :paragraph2="paragraph2" :paragraph3="paragraph3" :img="img" />
      <Footer />
   </div>
</template>
<script>
export default {
   data:  function() {
      return {
         title: 'Sequence 21',
         paragraph1: 
         "Sequence21 is a company dedicated to providing services for workers in the film industry regardless of whether they are make-up artists, actors, directors, cameramen or even marketers. They also have an online portfolio-sharing platform, called The Scene, meant to give people in the film industry a platform to document their work across all of their projects. As a freelancer for Overscore Media, I got the opportunity to create Sequence21's entire website and TheScene Platform from scratch with three other amazing developers. ",
         paragraph2: 
         "My role in creating Sequence21 and TheScene was primarily as the sole backend developer in a team of 4. Together, the four of us used the TALL stack (Tailwind, Alpine, Laravel, Livewire) to create a fully functioning web-app with stripe integration, admin management tools, and a connected portfolio-sharing web-app. In the end, my experience with Laravel and Livewire ended up being essential to help integrate and create components for the front-end that would allow image upload and validation, portfolio creation, dynamic content rendering, and plenty more. ",
         paragraph3: 
         "This project ended up being a massive and fantastic project that was created between July 2021 and December 2022. It could not have been completed without our great team of developers at Overscore Media including Myles Lee, Josh Rose, and Matthew Piercey.",
         img: '/Sequence21.jpg'
      }
   }
}
</script>