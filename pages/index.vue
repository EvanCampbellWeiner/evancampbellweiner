<template>
    <div class="font-eb text-white">
        <video id="video" autoplay muted loop class="fixed -z-10 min-h-full min-w-full max-w-none">
            <source src="/backgroundvideoAndroid.mp4" type="video/mp4" />
        </video>
        <Header />
        <section
            id="Bio"
            class="relative flex min-h-screen flex-col items-center justify-center bg-primary-blue bg-opacity-80"
        >
            <article
                id="imageBio"
                class="max-h-1/3 grid auto-cols-max grid-cols-1 items-center justify-items-center pt-8 md:grid-cols-2"
            >
                <img src="/EvanHill.jpg" class="w-2/3 rounded-sm border-2 border-black" />
                <div class="max-w-auto flex flex-col items-center justify-center p-4">
                    <h2 class="pb-2 text-2xl sm:text-4xl">Welcome</h2>
                    <div class="p font-eb text-lg">
                        My name is Evan Campbell-Weiner and I am a Software Developer based out of Canada. Most recently I 
                        worked for Amazon as a Software Development Engineer. Before that I worked for
                        <a href="https://iapotheca.com" target="_blank" class="text-blue-300">iApotheca Healthcare</a>
                        as a Jr. Full-Stack Developer, and worked as a freelancer for
                        <a href="https://overscore.media" target="_blank" class="text-purple-400">Overscore Media</a>. I have also copleted
                        by BSc Honours in Computer Science from Trent University with a Specialization in Software Engineering and the Co-op Option.
                        For more information I would invite you to checkout my experience and the various projects I have worked on.
                    </div>
                    <article id="projects" class="m-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4">
                        <div class="flex flex-col items-center justify-center rounded-md p-4">
                            <img src="/NoMoreMeetings.jpg" alt="NoMoreMeetings Homepage" class="w-36" />
                            <h3 class="text-2xl sm:text-lg">No More Meetings</h3>
                            <div class="flex flex-row items-center justify-between space-x-4">
                                <a
                                    href="https://gallant-poitras-d4d4d2.netlify.app"
                                    target="_blank"
                                    class="hidden rounded-md border-2 border-yellow-300 px-4 py-2 hover:bg-yellow-300 hover:text-black lg:block"
                                    >Demo</a
                                >
                                <a
                                    href="https://github.com/EvanCampbellWeiner/NoMoreMeetings"
                                    target="_blank"
                                    class="rounded-md border-2 border-gray-500 px-6 py-2 hover:bg-blue-800 hover:text-white"
                                    >Github</a
                                >
                            </div>
                        </div>
                        <div class="flex flex-col items-center justify-center rounded-md p-4">
                            <img src="/Sequence21.jpg" alt="NoMoreMeetings Homepage" class="w-36" />
                            <h3 class="text-2xl">Sequence 21</h3>
                            <div class="flex flex-row items-center justify-between space-x-4">
                                <a
                                    href="https://sequence21.com"
                                    target="_blank"
                                    class="rounded-md border-2 border-yellow-300 px-4 py-2 hover:bg-yellow-300 hover:text-black"
                                    >Website</a
                                >
                                <NuxtLink
                                    to="/blog/sequence21"
                                    class="rounded-md border-2 border-gray-500 px-4 py-2 hover:bg-blue-800 hover:text-white"
                                    >Blog</NuxtLink
                                >
                            </div>
                        </div>
                        <div class="flex flex-col items-center justify-center rounded-md p-4">
                            <img src="/Stluet.jpg" alt="NoMoreMeetings Homepage" class="w-36" />
                            <h3 class="text-2xl">Stluet Furniture</h3>
                            <div class="flex flex-row items-center justify-between space-x-4">
                                <a
                                    href="https://stluet.com"
                                    target="_blank"
                                    class="rounded-md border-2 border-gray-500 px-4 py-2 hover:bg-green-800 hover:text-white"
                                    >Website</a
                                >
                                <NuxtLink
                                    to="/blog/stluet"
                                    class="rounded-md border-2 border-gray-500 px-4 py-2 hover:bg-blue-800 hover:text-white"
                                    >Blog</NuxtLink
                                >
                            </div>
                        </div>
                    </article>
                </div>
            </article>
        </section>
        <section
            id="chart"
            class="relative flex min-h-screen flex-col items-center justify-center bg-primary-blue bg-opacity-40"
        >
            <h2 class="text-4xl">Experience</h2>
            <ExperienceChart />
            <div class="flex flex-row items-center justify-between space-x-4">
                <NuxtLink
                    to="/experience"
                    class="hidden rounded-md border-2 border-gray-500 px-6 py-2 hover:bg-gray-800 hover:text-white lg:block"
                    >Resume</NuxtLink
                >
                <NuxtLink
                    to="/experiencelist"
                    class="rounded-md border-2 border-gray-500 px-6 py-2 hover:bg-gray-800 hover:text-white"
                    >Experience List</NuxtLink
                >
            </div>
        </section>
        <Projects />
        <Footer />
    </div>
</template>

<script>
export default {}
</script>
