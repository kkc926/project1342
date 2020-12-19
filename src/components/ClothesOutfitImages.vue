<template>
  <div class="q-pa-md" style="padding: 0">
    <!-- <div>{{ clothes.data.url }}</div> -->
    <div class="q-gutter-y-md" style="max-width: 600px">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="top" label="top" />
          <q-tab name="bottom" label="bottom" />
          <q-tab name="outer" label="outer" />
          <q-tab name="dress" label="dress" />
        </q-tabs>

        <q-separator />

        <!-- top -->
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="top" v-on:click="clothesClicked()">
            <div
              class="row q-col-gutter-x-xs q-col-gutter-y-lg"
              style="margin: 0; padding: 0"
            >
              <div
                class="col-4"
                v-for="item in clothes.data"
                :key="`none-${item}`"
              >
                <div class="my-content">
                  <q-card style="border-radius: 0; box-shadow: 0">
                    <q-img :src="item.url" />
                  </q-card>
                </div>
              </div>
            </div>
          </q-tab-panel>

          <!-- bottom -->
          <q-tab-panel name="top" v-on:click="clothesClicked()">
            <div
              class="row q-col-gutter-x-xs q-col-gutter-y-lg"
              style="margin: 0; padding: 0"
            >
              <div
                class="col-4"
                v-for="item in clothes.data"
                :key="`none-${item}`"
              >
                <div class="my-content">
                  <q-card style="border-radius: 0; box-shadow: 0">
                    <q-img :src="item.url" />
                  </q-card>
                </div>
              </div>
            </div>
          </q-tab-panel>

          <!-- outer -->
          <q-tab-panel name="outer">
            <div
              class="row q-col-gutter-x-xs q-col-gutter-y-lg"
              style="margin: 0; padding: 0"
            >
              <div class="col-4" v-for="n in 9" :key="`none-${n}`">
                <div class="my-content" v-on:click="outerClicked()">
                  <q-card style="border-radius: 0; box-shadow: 0">
                    <q-img
                      src="https://i0.codibook.net/files/thumb/big/1975072941997/1bbfba10c854/1809426185.jpg"
                    />
                  </q-card>
                </div>
              </div>
            </div>
          </q-tab-panel>

          <!-- dress -->
          <q-tab-panel name="dress">
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
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "ClothesOutfitImages",
  data() {
    return {
      tab: "top",
      clothes: null,
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
        "https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/clothes/filter/top",
        reqHeader
      );
      console.log("clothes data >", this.clothes.data);
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