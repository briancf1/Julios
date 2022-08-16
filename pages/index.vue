<template>
<div>
  <OverlayMenu @isOverlayActive="isOverlayActive"></OverlayMenu>
  <div class="container">
		<img v-if="!isActive" src="../assets/LogoWhite.svg" alt="Julio's Mexican Street Food">
	</div>
  <div class="main-content">
    <video id="video" autoplay poster="/poster.png" loop muted playsinline>
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
  head: {
    title: 'Julio\'s',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
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
    this.onResize();
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

img{
  max-width: 800px;
  width: 35%;
  position: relative;
}

@media (max-width: 1080px) {
	img{
    width: 50%;
  }
}

@media (max-width: 650px) {
	img{
    width: 60%;
  }
}

@media (max-width: 450px) {
	img{
    width: 75%;
  }
}

</style>