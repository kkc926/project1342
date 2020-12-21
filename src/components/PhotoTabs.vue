<template>
  <div>
    <div class="q-gutter-y" style="max-width: 800px">
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        indicator-color="pink-4"
        align="justify"
        narrow-indicator
      >
        <q-tab name="outfit" label="코디" />
        <q-tab name="history" label="히스토리" />
        <q-tab name="clothes" label="옷" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel class="panel" name="outfit">
          <outfit-images />
        </q-tab-panel>
        <q-tab-panel class="panel" name="history">
          <outfit-images />
        </q-tab-panel>
        <q-tab-panel class="panel" name="clothes">
          <clothes-outfit-images />
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>
<script>
import ClothesOutfitImages from "src/components/ClothesOutfitImages.vue";
import OutfitImages from "./OutfitImages.vue";

export default {
  name: "PhotoTabs",
  components: {
    ClothesOutfitImages,
    OutfitImages,
  },
  data() {
    return {
      tab: "mails",
    };
  },
};
</script>
<style scoped>
.panel{
  margin: 0px;
  padding: 0px;
}
</style>