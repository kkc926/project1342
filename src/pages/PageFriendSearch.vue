<template >
  <div>
    <find-friend />
    <q-item-label header>친구</q-item-label>
    <q-item v-on:childRendered="childRendered">
      <q-btn v-on:click="childRendered()">yes</q-btn>
      <!-- <q-item-section avatar>
        <q-avatar color="primary" text-color="white">
          {{ searchFriend.data.name.slice(0, 1) }}
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ searchFriend.data.name }}</q-item-label>
        <q-item-label caption lines="1">{{
          searchFriend.data.email
        }}</q-item-label>
      </q-item-section> -->
    </q-item>
  </div>
</template>



<script>
import FindFriend from "src/components/FindFriend.vue";

export default {
  components: { FindFriend },
  data: function () {
    return {};
  },
  methods: {
    childRendered(param) {
      console.log("params: ", param);
    },
  },
};
</script>
d
<style>
@import url(https://cdn.syncfusion.com/ej2/material.css);
</style>
