<template>
 <div class="q-px-lg q-pb-md">
    <q-timeline color="secondary">
      <q-timeline-entry>
        <template v-slot:title>
          Event Title
        </template>
        <template v-slot:subtitle>
          February 22, 1986
        </template>

        <div>
          <q-card style="border-radius: 0; box-shadow: 0; margin: 0; padding: 0;">
              <q-img
                src="https://i0.codibook.net/files/thumb/big/1975072941997/1bbfba10c854/1809426185.jpg"
              />
            </q-card>
        </div>
      </q-timeline-entry>

      <q-timeline-entry icon="delete">
        <template v-slot:title>
          Event Title
        </template>
        <template v-slot:subtitle>
          February 21, 1986
        </template>

        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </q-timeline-entry>
    </q-timeline>
 </div>
</template>

<script>
import Axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "OutfitHistory",
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
.q-gutter-y-md,
.q-gutter-md {
  margin-top: 0;
}
</style>