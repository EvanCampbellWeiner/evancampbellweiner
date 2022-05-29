<template>
<header class="bg-primary-blue relative bg-opacity-40 text-white font-eb">
      <section id="header" class="flex flex-row md:justify-left px-4 items-center">
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
        <div id="mobileNav" class="md:hidden flex flex-col items-center justify-right">
          <button @click="show = !show" class="outline-none mobile-menu-button">
            <svg class="w-8 h-9 text-white" x-show="!showMenu" fill="none" stroke-linecap="round"
              stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </section>
      <nav v-show="show" class="md:hidden flex flex-col text-lg tracking-wider">
            <NuxtLink to="/" class="hover:bg-gray-600 px-3 py-6 font-cormorant">Home</NuxtLink>
            <NuxtLink to="/experience" class="hover:bg-gray-600 px-3 py-6 font-cormorant">Experience</NuxtLink>
            <NuxtLink to="/projects" class="hover:bg-gray-600 px-3 py-6">Projects</NuxtLink>
            <NuxtLink to="/contact" class="hover:bg-gray-600 px-3 py-6">Contact</NuxtLink>
         </nav>
    </header>
</template>

<script>
   export default {
      data: function() {
         return {
            show : false
         }
      }
   }

</script>