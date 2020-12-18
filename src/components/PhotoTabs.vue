<template>
  <div class="q-pa">
    <div class="q-gutter-y" style="max-width: 800px">
      <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          
          indicator-color="pink-4"
          align="justify"
          narrow-indicator
        >
          <q-tab name="outfit" label="Outfit" />
          <q-tab name="clothes" label="Clothes" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="outfit">
            <clothes-outfit-images />
          </q-tab-panel>

          <q-tab-panel name="clothes">
            <clothes-outfit-images />
          </q-tab-panel>
        </q-tab-panels>
    </div>
  </div>
</template>
<script>
import ClothesOutfitImages from "src/components/ClothesOutfitImages.vue";

export default {
  name: 'PhotoTabs',
  components: {
    ClothesOutfitImages
  },
  data () {
    return {
      tab: 'mails'
    }
  }
}
</script>
