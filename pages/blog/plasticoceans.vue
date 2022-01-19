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
         title: 'Plastic Oceans Calculator',
         paragraph1: 
         "The Plastic Oceans Calculator was an HTML/CSS/JS program created for Plastic Oceans Canada built to calculate a persons environmental impact based on their weekly habits. The project was originally created at Capital One's Digital for Good Hackathon where I was recruited to provide front-end support for the project. The team ended up consisting of two other project managers, a backend developer, and a designer. ",
         paragraph2: 
         "My portion of the project was mostly just implementing the designs and using jQuery to interact with the python logic created by the backend developer. This included creating a dynamic survey form with the ability to export results based on the users information. Unfortunately, the final integration into wordpress ended up being a massive battle due to the disassociation with the backend.",
         paragraph3: 
         "Looking back on this project, I really believe I learned a lot about project management. Before the project I was fairly inexperienced and did not have a lot of trust in my skills. But after being the sole frontend developer, I learned the importance of taking ownership of your skills. If I did this project again I would have taken more of a leadership role so that the outcome was a success.",
         img: '/plasticoceans.jpg',
      }
   }
}
</script>