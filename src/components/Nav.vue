<template>
  <v-card class="rounded-0">
    <v-navigation-drawer
        permanent
        expand-on-hover
        app
    >
      <v-list >
<!--        <v-list-item class="px-2 " >-->
<!--          <v-list-item-avatar>-->
<!--            <v-img src="https://randomuser.me/api/portraits/women/90.jpg"></v-img>-->
<!--          </v-list-item-avatar>-->
<!--        </v-list-item>-->

        <v-list-item link >
          <v-list-item-content>
            <v-list-item-title class="title " >
              {{ userData.name }}
            </v-list-item-title>
            <v-list-item-subtitle >{{ userData.email }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list
          nav
          dense
      >
        <v-list-item link>
          <v-list-item-icon class="list-icon">
            <v-icon >mdi-home</v-icon>
          </v-list-item-icon>
          <router-link to="/home" class="link" >
            <v-list-item-title  >Home</v-list-item-title>
          </router-link>

        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-heart</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Shared with me</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Starred</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "Nav",
  computed: mapState([
      'userData'
  ])
};
</script>

<style scoped>
.link{
  color: white;
}
.list-icon{
  margin-left: 0 !important;
}
</style>
