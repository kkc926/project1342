<template>
  <div class="q-pa-xs" style="margin: 0; padding: 0">
    <!-- <div>완성된 코디</div> -->
    <q-field rounded filled style="margin: 5% 3% 0 3%">
      <div
        class="self-center full-width no-outline"
        tabindex="0"
        style="color: black; text-align: center"
      >
        완성된 코디
      </div>
    </q-field>
    <div class="row q-col" style="margin: 0 3% 3% 3%; padding: 0">
      <div
        class="col-6"
        v-for="n in 4"
        :key="`none-${n}`"
        style="margin:0, padding: 0;"
      >
        <q-card style="border-radius: 0; box-shadow: 0; margin: 0; padding: 0">
          <q-img
            src="https://assets.styleship.com/fila/data/productimages/a/4/FE2RSB5101X_YEW.jpg"
          />
        </q-card>
      </div>
    </div>
    <q-btn
      color="grey"
      icon-right="send"
      label="친구에게 보내기"
      style="width: 94%; margin: 0 3% 0 3%"
    />
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.top {
  width: 50%;
  margin-top: 15%;
  margin-left: 15%;

  border-radius: 4px;
}
</style>