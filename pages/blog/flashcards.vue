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
         title: 'Flashcard Extension',
         paragraph1: 
         "The Flashcard Extension was a web application created by myself for Hackworks HackINSTEAD hackathon in the summer of 2020. The main functionality of the project was created using Laravel / Vue to allow a user to register and create decks of flashcards for the purpose of studying. These decks could then be used through a custom google chrome extension I created, to allow a user to study using flashcards on any web-page.",
         paragraph2: 
         "The initial inspiration for this idea came after I was watching a Toronto Maple Leafs game on my laptop and realized it was not easy to study and watch the game at the same time. The advantage that this extension provides is that the dropdown appears over only a small portion of the screen. Allowing a user to flip through and answer questions without having to navigate away from their page.",
         paragraph3: 
         "This project ended up winning the People's choice award at Hackworks HackINSTEAD event, as well as placing 2nd Overall after judging. Unfortunately this project is not currently available publically due to the amount of overhead it would take to get it public. If, in the unlikely case, someone would really like this product available publically, I invite you to contact me through my contact page and I can revisit this project.",
         img: '/flashcardextension.png'
      }
   }
}
</script>