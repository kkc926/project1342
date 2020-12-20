<template >
  <div>
    <find-friend v-model="name" />
    <div>
      <q-btn @click="ssearch">검색</q-btn>
    </div>
    <div v-if="searched_user != null">
      <q-item-label header>친구</q-item-label>
      <q-item>
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            {{ searched_user.data[0]["name"].slice(0, 1) }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ searched_user.data[0]["name"] }}</q-item-label>
          <q-item-label caption lines="1">{{
            searched_user.data[0]["email"]
          }}</q-item-label>
        </q-item-section>
      </q-item>
    </div>
  </div>
</template>



<script>
import FindFriend from "src/components/FindFriend.vue";
import Axios from "axios";
export default {
  components: { FindFriend },
  data: function () {
    return {
      name: null,
      searched_user: null,
    };
  },
  methods: {
    async ssearch() {
      console.log("들어옴");
      this.searched_user = await Axios.get(
        "https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/search/".concat(
          this.name
        )
      );
      console.log(this.searched_user);
    },
  },
};
</script>

<style>
@import url(https://cdn.syncfusion.com/ej2/material.css);
</style>
