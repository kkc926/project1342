<template >
<div id="app">
  <div style="margin:10% 25%;">
    <br>
    <ejs-autocomplete :dataSource='dataItem' :fields='dataFields'
    placeholder="Select a game" popupWidth="250px"
    popupHeight="400px">
    </ejs-autocomplete>
  </div>
</div>

</template>





<script>
import Vue from "vue";
import { AutoCompletePlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(AutoCompletePlugin);
import { DataManager, WebApiAdaptor } from '@aws-amplify/ui-components';

export default Vue.extend({
  data: function(){
    return{
      dataItem:
      [
        {Id:'Game1',Game: 'Football'},
        {Id:'Game2',Game: 'Basketball'},
        {Id:'Game3',Game: 'Volleyball'},
        {Id:'Game4',Game: 'Baseball'},
        {Id:'Game5',Game: 'Badminton'},
      ],
      dataFields:{value: 'Game'}
      
    };
  }
});
</script>

<style>
@import url(https://cdn.syncfusion.com/ej2/material.css);

</style>
