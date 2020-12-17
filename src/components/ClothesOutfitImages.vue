<template>
  <div class="q-pa-md">
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

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="top">
            <div class="row q-col-gutter-x-xs q-col-gutter-y-lg">
              <div
                class="col-4"
                v-for="n in 9"
                :key="`none-${n}`"
                style="padding-top: 4px"
              >
                <div class="my-content" v-on:click="topClicked()">
                  <q-card style="border-radius: 0; box-shadow: 0">
                    <q-img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlGq7vIrT5XFclOLmBmgHRf5kP5E5mx-awxg&usqp=CAU"
                    />
                  </q-card>
                </div>
              </div>
            </div>
          </q-tab-panel>

          <q-tab-panel name="bottom">
            <div class="row q-col-gutter-x-xs q-col-gutter-y-lg">
              <div
                class="col-4"
                v-for="n in 9"
                :key="`none-${n}`"
                style="padding-top: 4px"
              >
                <div class="my-content" v-on:click="bottomClicked()">
                  <q-card style="border-radius: 0; box-shadow: 0">
                    <q-img
                      src="https://i0.codibook.net/files/thumb/big/1976060716229/2a6104493bc7ed/1631194670.jpg"
                    />
                  </q-card>
                </div>
              </div>
            </div>
          </q-tab-panel>

          <q-tab-panel name="outer">
            <div class="row q-col-gutter-x-xs q-col-gutter-y-lg">
              <div
                class="col-4"
                v-for="n in 9"
                :key="`none-${n}`"
                style="padding-top: 4px"
              >
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

          <q-tab-panel name="dress">
            <div class="row q-col-gutter-x-xs q-col-gutter-y-lg">
              <div
                class="col-4"
                v-for="n in 9"
                :key="`none-${n}`"
                style="padding-top: 4px"
              >
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
export default {
  name: "ClothesOutfitImages",
  data() {
    return {
      tab: "top",
    };
  },
  methods: {
    topClicked() {
      console.log("ee");
    },
    bottomClicked() {},
    outerClicked() {},
    dessClicked() {
      console.log("ee");
    },
  },
};
</script>