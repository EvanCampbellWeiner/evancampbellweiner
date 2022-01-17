<template>
  <article>
      <h2>{{ title }}</h2>
      {{img}}
      <p>{{ paragraph }}</p>
  </article>
</template>
<script>
  export default {
     props: {
        title: String,
        img: String,
        paragraph: String,
      },
     }
</script>