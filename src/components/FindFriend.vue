<template >
  <div id="app">
    <div>
      <input :value="value" @input="myChange" />
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
  props: {
    value: {},
  },
  data: function () {
    return {
      searchFriend: null,
      pvalue: this.value,
    };
  },
  mounted() {
    this.$emit("searchFriend", this.searchFriend);
  },
  methods: {
    async search(name) {
      console.log("sususu", pvalue);
      this.searchFriend = await Axios.get(
        "https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/search/".concat(
          name
        )
      );
      console.log(">>>>>>>>>>>", this.searchFriend);
    },

    myChange($event) {
      this.$emit("input", $event.target.value);
    },
  },
});
</script>

<style>
@import url(https://cdn.syncfusion.com/ej2/material.css);
</style>
