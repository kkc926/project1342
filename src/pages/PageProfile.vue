<template>
    <q-page>
        <q-item>
            <q-item-section avatar class="col-4">
                <q-avatar size="70px" class="profile">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                </q-avatar>
                <q-item-label size="14" caption class="name">김민지</q-item-label>
            </q-item-section>

            <q-item-section class="col-4">
                <q-item-label class="number">36</q-item-label>
                <q-item-label caption>
                코디
                </q-item-label>
            </q-item-section>
            <q-item-section class="col-4">
                <q-item-label class="number">20</q-item-label>
                <q-item-label caption>
                친구
                </q-item-label>
            </q-item-section>
        </q-item>
        <photo-tabs class="ms" />
        <!-- <div>
            <clothes-outfit-images></clothes-outfit-images>
        </div> -->
    </q-page>
</template>

<script>
import UserProfile from '../components/UserProfile.vue'
import PhotoTabs from '../components/PhotoTabs.vue'
import ClothesOutfitImages from "src/components/ClothesOutfitImages.vue";

export default {
  name: 'PageProfile',
  components: {
    PhotoTabs,
    ClothesOutfitImages,
    UserProfile
  },
}

</script>
<style scoped>
.profile{
    margin-top: 10px;
    margin-right: 30px;
}
.name{
    margin-left: 5px;
    margin-top: 10px;
    font-size: 16px;
}

.number{
    font-size: 20px;
}
</style>
