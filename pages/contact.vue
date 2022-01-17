<template>
  <div class="text-white font-eb">
    <video id="video" autoplay muted loop class="fixed -z-10 min-w-full min-h-full max-w-none">
      <source src="/backgroundvideoAndroid2.mp4" type="video/mp4">
    </video>
    <header class="bg-primary-blue relative bg-opacity-40">
      <section id="header" class="flex flex-row md:justify-left px-4 md:items-center">
        <h1 class="text-4xl tracking-widest flex-1 font-cormorant py-4"><NuxtLink to="/">Evan Campbell-Weiner</NuxtLink></h1>
        <!-- Desktop-->
        <nav class="hidden md:flex md:flex-row text-lg tracking-wider">
          <NuxtLink to="/" class="hover:bg-gray-600 px-3 py-6 font-cormorant">Home</NuxtLink>
          <NuxtLink to="/experience" class="hover:bg-gray-600 px-3 py-6 font-cormorant">Experience</NuxtLink>
          <NuxtLink to="/projects" class="hover:bg-gray-600 px-3 py-6">Projects</NuxtLink>
          <NuxtLink to="/contact" class="hover:bg-gray-600 px-3 py-6">Contact</NuxtLink>
        </nav>

        <!-- Mobile Nav -->
        <!-- Mobile menu button -->
        <div id="mobileNav" class="md:hidden flex items-center justify-right">
          <button class="outline-none mobile-menu-button">
            <svg class="w-8 h-9 text-white" x-show="!showMenu" fill="none" stroke-linecap="round"
              stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </section>
    </header>
    <section id="contact" class="relative bg-primary-blue bg-opacity-80 min-h-screen flex flex-col justify-center items-center">
      <div class=" flex flex-col justify-center items-center border-1 border-gray-300  m-8 p-4">
        <h2 class="text-3xl">Connect</h2>
        <ul
          class="text-xl p-4 mt-4 flex flex-row space-x-8 justify-betweentext-gray-300">
          <li class="border-2 border-white border-solid hover:bg-white hover:text-gray-500"><a href="https://github.com/evancampbellweiner" target="_blank" class="p-4">Github</a></li>
          <li class="border-2 border-white border-solid hover:bg-white hover:text-gray-500"><a href="https://www.linkedin.com/in/evancampbellweiner/" target="_blank" class="p-4">LinkedIn</a></li>
        </ul>
      </div>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeZNBVCkFSZTmSBPdGg3LHOK75toDoyxf1hEZ8-k4K2P3SjOw/viewform?embedded=true" width="640" height="677" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </section>
    <footer class="relative bg-alternate-blue bg-opacity-90 flex flex-row items-center justify-around p-16">
      <div class="flex flex-col items-center justify-around">
        <h5 class="text-4xl">Connect</h5>
        <ul class="flex flex-row items-center justify-around space-x-4">
          <li><a href="https://github.com/evancampbellweiner" target="_blank">Github</a></li>
          <li><a href="https://www.linkedin.com/in/evancampbellweiner/" target="_blank">LinkedIn</a></li>
          <li>
            <NuxtLink to="/contact">Contact</NuxtLink>
          </li>
        </ul>
      </div>
      <h5 class="text-2xl">&copy 2021 Evan Campbell-Weiner</h5>
    </footer>
  </div>
</template>

<script>
  export default {}

</script>