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
         title: 'Stluet Furniture',
         paragraph1: 
         "Stluet Furniture is a furniture store that came to Overscore Media looking for web developers to help them create an online presence. From May 2021 - August 2022, a team of three developers including myself created this website to help fill the customer needs. The project ended up using Laravel / InertiaJS and had a number of customization tools including an administrator back-end with custom web forms to add new products, colour customizations, view orders, and other management tools.",
         paragraph2: 
         "My role in this project was primarily as a backend developer which meant most of the behind-the-scenes work was completed by myself. This includes portions of the project like database management, stripe integration, website redirects, web-form submissions, and any other major e-commerce logic that was connected to the project. However, due to the limited number of developers, a good portion of my time was also spent working with Inertia in the Front-end to help connect the two sides of the project and help get the project to completion. ",
         paragraph3: 
         "In the end the project ended up being a great opportunity to learn and support local businesses. I would like to say a great thank you to Josh Rose and Matthew Piercey from Overscore Media who were the other co-contributors to this project.",
         img: '/Stluet.jpg'
      }
   }
}
</script>