<template>
  <div class="q-pa-md" style="padding: 0">
    <div class="q-gutter-y-md" style="max-width: 600px">
      <div
        class="row q-col-gutter-x-xs q-col-gutter-y-lg"
        style="margin: 0; padding: 0"
      >
        <div class="col-4" v-for="n in 9" :key="`none-${n}`">
          <div class="my-content" v-on:click="dessClicked()">
            <q-card style="border-radius: 0; box-shadow: 0">
              <q-img
                src="https://i0.codibook.net/files/thumb/big/1975072941997/1bbfba10c854/1809426185.jpg"
              />
            </q-card>
          </div>
        </div>

        <!-- <div class="col-4" v-for="item in clothes.data" :key="`none-${item}`">
          <div class="my-content">
            <q-card style="border-radius: 0; box-shadow: 0">
              <q-img :src="item.url" />
            </q-card>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "OutfitImages",
  data() {
    return {
      tab: "top",
      clothes: null,
      clothesList: { type: Array, default: () => [] },
    };
  },
  computed: {
    ...mapGetters({
      idToken: "account/idToken",
    }),
  },
  mounted() {
    this.clothesClicked();
  },
  methods: {
    async clothesClicked() {
      let reqHeader = {
        headers: {
          "Content-Type": "application/json",
          Authorization: await this.idToken,
        },
      };
      this.clothes = await Axios.get(
        "https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/clothes",
        reqHeader
      );
      console.log(this.clothes.data);
    },
    topClicked() {},
    bottomClicked() {},
    outerClicked() {},
    dessClicked() {
      console.log("ee");
    },
  },
};
</script>
<style scoped>
.q-gutter-y-ms,
.q-gutter-ms {
  margin-top: 0;
}
</style>