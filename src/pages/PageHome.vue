<template>
  <q-page class="constrain q-pa-md">
    <q-card
      v-for="item in clothes.data"
      :key="`none-${item}`"
      class="card-post q-mb-md"
      flat
      bordered
    >
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-bold">yongin</q-item-label>
          <q-item-label caption>
            {{ email }}
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />
      <q-img :src="item.url" />
      <q-btn v-if="item.liked_users.includes(userName)"
      id="like" flat size="18px" icon="eva-heart" />
      <q-btn v-else id="like" flat size="18px" icon="eva-heart-outline" :clothesid="item.clothes_id" @click="likeClothes($event, item)"/>
      <q-card-section>
        <div>{{ item.color }}</div>
        <!-- <div class="text-caption text-grey">{{ post.date | niceDate }}</div> -->
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { date } from "quasar";
import Axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "PageHome",
  data() {
    return {
      clothes: null,
    };
  },
  mounted () {
    this.getClothes()
  },
  filters: {
    niceDate(value) {
      return date.formatDate(value, "MMMM D h:mmA");
    },
  },
  methods: {
    getClothes() {
      Axios.get(
        "https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/clothes/1"
      ).then((res) => {
        console.log(res);
        this.clothes = res;
      });
      console.log("finished");
    },

    likeClothes(e, item) {
      let id = item.clothes_id
      console.log(id)
      let params = {
        email: this.email
      }
      console.log(params)
      Axios.post(
        `https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/clothes/like/${id}`, params
      ).then((res) => {
        console.log("success")
      });
    }
  },
  computed: {
    ...mapGetters({
      idToken: "account/idToken",
      userName: "account/userName",
      email: "account/email",
      friends: "account/friends",
      uid: "acccount/uid"
    })
  }
};
</script>


<style lang="sass">
.card-post
  .q-img
    min-height: 300px
</style>
