<template>
  <div class="text-white font-eb">
    <video id="video" autoplay muted loop class="fixed -z-10 min-w-full min-h-full max-w-none">
      <source src="/backgroundvideoAndroid2.mp4" type="video/mp4">
    </video>
    <Header />
    <section id="contact" class="relative bg-primary-blue bg-opacity-80 min-h-screen flex flex-col justify-center items-center">
      <div class=" flex flex-col justify-center items-center border-1 border-gray-300  m-8 p-4">
        <h2 class="text-3xl">Connect</h2>
        <ul class="text-xl p-4 mt-4 flex flex-row space-x-8 justify-betweentext-gray-300">
          <li class="border-2 border-white border-solid rounded-md py-2 px-8 hover:bg-white hover:text-gray-500"><a href="https://github.com/evancampbellweiner" target="_blank" class="p-4">Github</a></li>
          <li class="border-2 border-white border-solid rounded-md py-2 px-8 hover:bg-white hover:text-gray-500"><a href="https://www.linkedin.com/in/evancampbellweiner/" target="_blank" class="p-4">LinkedIn</a></li>
        </ul>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
  export default {}

</script>