<template>
  <div class="text-white font-eb">
    <video id="video" autoplay muted loop class="fixed -z-10 min-w-full min-h-full max-w-none">
      <source src="/backgroundvideoAndroid2.mp4" type="video/mp4">
    </video>
    <Header />
    <section id="game" class="bg-gray-500 relative bg-opacity-40 text-white font-eb h-auto flex flex-col items-center justify-center">
        <h2 class="text-4xl pt-4">Double or Nothing</h2>
        <ul class="flex flex-row items-start flex-wrap-reverse">
            <li v-for="item in number" class="text-black bg-white w-auto h-auto rounded-md text-center p-2 m-2">
                <img :src="image" class="w-32 h-auto"/>
                {{item}}
            </li>
        </ul>
        <div class="flex flex-row p-2">
            <div class="flex flex-col bg-white rounded-md border-black border-2 items-center">
                <h3 class="text-3xl text-black p-2">Best Attempt</h3>
                <img :src="bestImage" class="w-32 h-auto" />
                <p class="text-2xl text-black">{{bestNumber}}</p>
            </div>
            <p class="text-black border-2 bg-white bg-blue w-auto h-10 rounded-md text-center p-2 m-2">Attempt: {{attempts}}</p>
            <button class="bg-white text-black rounded-md border-2 border-black m-2 p-2 hover:bg-black hover:text-white" @click="randomDouble()">Double Or Nothing</button>     
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
          number: 1,
          image: "",
          attempts: 0,
          bestImage:"",
          bestNumber:0,
      }
   },
    mounted: async function() {
        this.image = await this.$axios.$get("https://zoo-animal-api.herokuapp.com/animals/rand").then(function(res) {
            let image = res.image_link;
            return image;
        });
    },
   methods: {
       randomDouble() {
           let factor = Math.floor(Math.random()*2);
           this.number = this.number * ((factor == 0) ? 2 : 0);
           if(this.number == 0) {
               this.newImage();
               this.number = 1;
               this.attempts++;
           }
           if(this.number > this.bestNumber) {
               this.bestNumber = this.number;
               this.bestImage = this.image;
           }
       },
       async newImage() {
            this.image = await this.$axios.$get("https://zoo-animal-api.herokuapp.com/animals/rand").then(function(res) {
            let image = res.image_link;
            return image;
        });
       }
   }
}
</script>2