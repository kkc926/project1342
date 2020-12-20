<template>
  <q-page class="constrain q-pa-sx">
      <div class="q-pa-xs">
        <q-carousel
        v-model="slide"
        swipeable
        animated
        navigation
        height="600px"
        
        flat
        class="bg-grey-1"
        >
        <template v-slot:navigation-icon="{ active, btnProps, onClick }">
            <q-btn v-if="active" size="sm" :icon="btnProps.icon" color="pink-5" flat round dense @click="onClick" />
            <q-btn v-else size="sm" :icon="btnProps.icon" color="white" flat round dense @click="onClick" />
        </template>

        <q-carousel-slide name="1st" class="column no-wrap flex-center">
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
        </q-carousel-slide>
        <q-carousel-slide name="2nd" class="column no-wrap flex-center">
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
        </q-carousel-slide>
        <q-carousel-slide name="3rd" class="column no-wrap flex-center">
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
        </q-carousel-slide>
        <q-carousel-slide name="4th" class="column no-wrap flex-center">
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
        </q-carousel-slide>
        <q-carousel-slide name="5th" class="column no-wrap flex-center">
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
        </q-carousel-slide>
        </q-carousel>
    </div>

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
    min-height: 320px
    min-width:  320px
</style>
