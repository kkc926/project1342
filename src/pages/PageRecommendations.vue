<template>
  <q-page class="constrain q-pa-md">
      <div class="q-pa-md">
        <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="grey"
        navigation
        arrows
        height="300px"
        class="bg-secondary text-grey shadow-1 rounded-borders"
        >
        <template v-slot:navigation-icon="{ active, btnProps, onClick }">
            <q-btn v-if="active" size="lg" icon="home" color="yellow" flat round dense @click="onClick" />
            <q-btn v-else size="sm" :icon="btnProps.icon" color="white" flat round dense @click="onClick" />
        </template>

        <q-carousel-slide name="style" class="column no-wrap flex-center">
            <h4>추천 색 조합</h4>
            <div class="col-8">
                <i class="fas fa-circle"></i>
                <i class="fas fa-circle"></i>
                <i class="fas fa-circle"></i>
            </div>
            <div class="q-mt-md text-center">
                Hello
            </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
            <q-icon name="live_tv" size="56px" />
            <div class="q-mt-md text-center">
                diff
            </div>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
            <q-icon name="layers" size="56px" />
            <div class="q-mt-md text-center">
                hello
            </div>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
            <q-icon name="terrain" size="56px" />
            <div class="q-mt-md text-center">
                diff
            </div>
        </q-carousel-slide>
        </q-carousel>
    </div>
      <q-card
        v-for="item in recoms.data"
                :key="`none-${item}`"
        class="card-post q-mb-md"
        flat bordered
        >
        <q-item>
            <q-img :src="item.url" />
        </q-item>
        <q-separator />
        <q-item>
            <q-btn id="like" flat size="18px" icon="eva-heart" />
            <div caption>{{item.likes}}명이 좋아했습니다</div>
        </q-item>
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
        slide: 'style',
        recoms: null,
    };
  },
  filters: {
    niceDate(value) {
      return date.formatDate(value, "MMMM D h:mmA");
    },
  },
  methods: {
      clothesRecoms() {
          Axios.get(
              "https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/recommendations",
              ).then((res) => {
            console.log(res);
            this.recoms = res;
            });
        }
    },
  mounted() {
      this.clothesRecoms();
  }
};
</script>


<style lang="sass">
.card-post
  .q-img
    min-height: 300px
</style>
