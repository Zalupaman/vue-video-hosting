<template>
  <div>
    <video-player :options="videoOptions"/>
  </div>
</template>

<script>
import VideoPlayer from "@/components/VideoPlayer.vue";

export default {

  name: "VideoExample",
  components: {
    VideoPlayer
  },
  data() {
    return {
      videoOptions: {
        autoplay: false,
        controls: true,
        sources: [
          {
            src:
                '',
            type: "video/mp4",
            fluid:true
          }
        ]
      },
      props:{
        video:String
      }
    };
  }
};
</script>
