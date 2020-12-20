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
          <q-tab name="top" label="상의" />
          <q-tab name="bottom" label="하의" />
          <q-tab name="outer" label="아우터" />
          <q-tab name="dress" label="원피스" />
        </q-tabs>

        <q-separator />

        <!-- top -->
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="top">
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
          <q-tab-panel name="bottom">
            <div
              class="row q-col-gutter-x-xs q-col-gutter-y-lg"
              style="margin: 0; padding: 0"
            >
              <div class="col-4" v-for="n in 1" :key="`none-${n}`">
                <div class="my-content" v-on:click="outerClicked()">
                  <q-card style="border-radius: 0; box-shadow: 0">
                    <q-img
                      src="https://simage-kr.uniqlo.com/goods/31/13/40/60/428685_COL_COL67_1000.jpg"
                    />
                  </q-card>
                </div>
              </div>
              <!-- <div
                class="col-4"
                v-for="item in clothes.data"
                :key="`none-${item}`"
              >
                <div class="my-content">
                  <q-card style="border-radius: 0; box-shadow: 0">
                    <q-img :src="item.url" />
                  </q-card>
                </div>
              </div> -->
            </div>
          </q-tab-panel>

          <!-- outer -->
          <q-tab-panel name="outer">
            <div
              class="row q-col-gutter-x-xs q-col-gutter-y-lg"
              style="margin: 0; padding: 0"
            >
              <div class="col-4" v-for="n in 1" :key="`none-${n}`">
                <div class="my-content" v-on:click="outerClicked()">
                  <q-card style="border-radius: 0; box-shadow: 0">
                    <q-img
                      src="https://m.darbydean.com/web/product/big/2018-01/180129-c-07.jpg"
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
              <div class="col-4" v-for="n in 1" :key="`none-${n}`">
                <div class="my-content" v-on:click="dessClicked()">
                  <q-card style="border-radius: 0; box-shadow: 0">
                    <q-img
                      src="https://img.lfmall.co.kr/file/product/prd/BO11/2010/640/BO11XX00675_00.jpg"
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