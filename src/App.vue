<template>
  <v-app  >
    <Nav v-if="$route.path !== '/'"/>
    <AppBar v-if="$route.path !== '/'"/>

    <!-- Sizes your content based upon application components -->
    <v-main >
      <!-- Provides the application the proper gutter -->
      <v-container fluid class="main-container ">
        <!-- If using vue-router -->
        <transition name="fade">
          <router-view></router-view>
        </transition>

      </v-container>
    </v-main>
  </v-app>

</template>

<style>
body{
  font-family: 'Fira Sans Condensed', sans-serif;
}
.main-container{
  height: calc(100vh - 65px);
  padding: 50px !important;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

</style>
<script>

import Nav from "@/components/Nav";
import AppBar from "@/components/AppBar";
export default {
  components: {AppBar, Nav},
  created() {
    if (!localStorage.userData){
      this.$router.push('/')
    }else {
      const user = JSON.parse(localStorage.getItem('userData'))
      const userData = {
        email: user.email,
        name: user.name,
        id:user.id
      }
      this.$store.dispatch("setUserData", userData )
    }
  }
  //components: {Nav}
}
</script>
