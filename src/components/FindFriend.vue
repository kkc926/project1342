<template >
  <div id="app">
    <div style="margin: 10% 25%">
      <br />
      <ejs-autocomplete
        :dataSource="dataItem"
        :fields="dataFields"
        v-model="message"
        placeholder="친구를 찾아보세요"
        popupWidth="250px"
        popupHeight="400px"
      >
      </ejs-autocomplete>
      <q-btn
        unelevated
        color="primary"
        label="검색"
        v-on:click="search(`${message}`)"
      />
    </div>
  </div>
</template>



<script>
import Vue from "vue";
import { AutoCompletePlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(AutoCompletePlugin);
import { DataManager, WebApiAdaptor } from "@aws-amplify/ui-components";

import Axios from "axios";

export default Vue.extend({
  name: "FindFriend",
  data: function () {
    return {
      searchFriend: null,
    };
  },
  mounted() {
    this.$emit("searchFriend", this.searchFriend);
  },
  methods: {
    async search(name) {
      console.log("sususu", name);
      this.searchFriend = await Axios.get(
        "https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/search/".concat(
          name
        )
      );
      console.log(">>>>>>>>>>>", this.searchFriend);
    },
  },
});
</script>

<style>
@import url(https://cdn.syncfusion.com/ej2/material.css);
</style>
