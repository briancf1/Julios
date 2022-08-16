<template>
<div>
  <OverlayMenu @isOverlayActive="isOverlayActive"></OverlayMenu>
  <div class="container">
		<img v-if="!isActive" src="../assets/Logo.svg" alt="Julio's Mexican Street Food">
	</div>
  <div class="main-content">
    <video id="video" autoplay loop muted poster="/poster.png">
      <source :src="videoSource" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>
  
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OverlayMenu from '../components/OverlayMenu.vue';

export default defineComponent({
  name: "IndexPage",
  components: { OverlayMenu },
  data() {
    return {
      isActive: false,
      windowWidth: 0,
    }
  },
  computed: {
    videoSource(): string{
      let imgUrl
      if (this.windowWidth > 820) {
        imgUrl = new URL('/LoopDesktop.mp4', import.meta.url)
      } else if(this.windowWidth > 390) {
        imgUrl = new URL('/LoopTablet.mp4',import.meta.url)
      } else {
        imgUrl = new URL('/LoopMobile.mp4',import.meta.url)
      }

      this.reload()
      return imgUrl.toString()
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },
  beforeDestroy() { 
    window.removeEventListener('resize', this.onResize); 
  },
  methods: {
    isOverlayActive(isActive: boolean) {
      this.isActive = isActive;
    },
    onResize() {
      this.windowWidth = window.innerWidth
    },
    reload() {
      const video = document.getElementById('video') as HTMLVideoElement
      if (video != null) {
        video.load()
      }
    }
  }
})
</script>

<style>
.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 30;
}

video {
  position: absolute;
  object-fit: cover;
  z-index: -30;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>