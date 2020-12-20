<template >
  <div id="app">
    <div style="margin: 10% 25%">
      <br />
      <!-- <ejs-autocomplete
        :dataSource="dataItem"
        :fields="dataFields"
        placeholder="친구를 찾아보세요"
        popupWidth="250px"
        popupHeight="400px"
      >
      </ejs-autocomplete -->
      <input v-model="message" placeholder="친구를 찾아보세요" />
      <q-btn
        unelevated
        color="primary"
        label="검색"
        v-on:click="search(`${message}`)"
      />
      <!-- 친구 목록 -->
      <q-item-label header>친구</q-item-label>
      <q-item v-if="searchFriend.data.name != null">
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            {{ searchFriend.data.name.slice(0, 1) }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ searchFriend.data.name }}</q-item-label>
          <q-item-label caption lines="1">{{
            searchFriend.data.email
          }}</q-item-label>
        </q-item-section>
      </q-item>
    </div>
  </div>
</template>



<script>
import Vue from "vue";
import { AutoCompletePlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(AutoCompletePlugin);
import { DataManager, WebApiAdaptor } from "@aws-amplify/ui-components";

import Axios from "axios";
import { mapGetters } from "vuex";

export default Vue.extend({
  data: function () {
    return {
      searchFriend: null,
      message: "mj",
    };
  },
  computed: {
    ...mapGetters({
      idToken: "account/idToken",
    }),
  },
  methods: {
    async search(name) {
      this.searchFriend = await Axios.get(
        "https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/search/".concat(
          name
        )
      );
      console.log("name >>>", this.searchFriend);
    },
  },
});
</script>

<style>
@import url(https://cdn.syncfusion.com/ej2/material.css);
</style>
