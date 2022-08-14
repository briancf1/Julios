<template>
<div>
  <div class="relative flex items-center justify-center h-screen overflow-hidden">
    <video 
      autoplay 
      loop 
      muted 
      class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
    >
      <source src="../assets/sky.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <h1 class="relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">Julio's</h1>
  </div>
</div>
  
</template>

<script lang="ts">

export default {
    name: "IndexPage"
}
</script>