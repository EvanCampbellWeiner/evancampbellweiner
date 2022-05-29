<template>
  <div class="text-white font-eb">
    <video id="video" autoplay muted loop class="fixed -z-10 min-w-full min-h-full max-w-none">
      <source src="/backgroundvideoAndroid2.mp4" type="video/mp4">
    </video>
    <Header />
    <Section id="game">
        <image :src="./game/Scooter.svg" />
    </Section>
    <Footer />
  </div>
</template>

<script>
import ExperienceComponent from '../components/ExperienceComponent.vue'
  export default {
    components: { ExperienceComponent },

    data:  function() {
      return {
      }
   }
}
</script>