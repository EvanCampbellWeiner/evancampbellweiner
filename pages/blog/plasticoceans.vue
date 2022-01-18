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
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan nisi non lobortis ultrices. Nam massa massa, ultrices ut sagittis vitae, convallis sit amet lacus. Suspendisse molestie facilisis massa vel tempor. Fusce sit amet suscipit mi. Mauris eget pellentesque velit, vitae consectetur nisi. Duis diam risus, gravida sed diam et, vestibulum tempor nisl. Donec eleifend elit ac tortor vehicula, et blandit metus eleifend. Nam sit amet augue vitae purus luctus efficitur. Fusce quis pulvinar lacus. Mauris facilisis odio quis quam pulvinar various",
         paragraph2: 
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan nisi non lobortis ultrices. Nam massa massa, ultrices ut sagittis vitae, convallis sit amet lacus. Suspendisse molestie facilisis massa vel tempor. Fusce sit amet suscipit mi. Mauris eget pellentesque velit, vitae consectetur nisi. Duis diam risus, gravida sed diam et, vestibulum tempor nisl. Donec eleifend elit ac tortor vehicula, et blandit metus eleifend. Nam sit amet augue vitae purus luctus efficitur. Fusce quis pulvinar lacus. Mauris facilisis odio quis quam pulvinar various",
         paragraph3: 
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan nisi non lobortis ultrices. Nam massa massa, ultrices ut sagittis vitae, convallis sit amet lacus. Suspendisse molestie facilisis massa vel tempor. Fusce sit amet suscipit mi. Mauris eget pellentesque velit, vitae consectetur nisi. Duis diam risus, gravida sed diam et, vestibulum tempor nisl. Donec eleifend elit ac tortor vehicula, et blandit metus eleifend. Nam sit amet augue vitae purus luctus efficitur. Fusce quis pulvinar lacus. Mauris facilisis odio quis quam pulvinar various",
         img: '/Sequence21.jpg'
      }
   }
}
</script>