<template>
  <div>

    <VideoExample :video="video" />
    <!--  SINGLE FILE -->
    <form  @submit.prevent="sendFile" action="http://localhost:4000/api/video/upload" enctype="multipart/form-data" method="POST" name="fileSend">
      <v-file-input
          show-size
          counter
          multiple
          label="File input"
          name="video"
      ></v-file-input>
      <input type="submit" value="Upload a file"/>
    </form>
    asd
  </div>
</template>

<script>
import VideoExample from "@/components/VideoExample";
import axios from "axios";
import {mapState} from "vuex";
export default {
  name: "Home",
  components: {VideoExample},
  data(){
    return{
      video: 'http://localhost:4000/api/video/video'
    }
  },
  methods:{
    sendFile(){
      const form = document.forms.namedItem('fileSend')
      const formData = new FormData(form)
      formData.append('userData', JSON.stringify(this.userData))
      console.log(this.userData)
      axios.post('http://localhost:4000/api/video/upload', formData).then(()=> console.log(formData))
    }
  },
  computed: mapState([
    'userData'
  ])
};
</script>

<style scoped></style>
