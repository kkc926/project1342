<template>
    <q-list>
        <q-item>
            <q-item-section avatar>
                <q-avatar size="70px" class="profile">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                </q-avatar>
                <q-item-label size="14" caption class="name">김민지</q-item-label>
            </q-item-section>

            <q-item-section>
                <q-item-label>36</q-item-label>
                <q-item-label caption>
                코디
                </q-item-label>
            </q-item-section>
            <q-item-section>
                <q-item-label>20</q-item-label>
                <q-item-label caption>
                친구
                </q-item-label>
            </q-item-section>
        </q-item>
        <q-item>
            <photo-tabs/>
        </q-item>
    </q-list>
</template>

<script>
import PhotoTabs from '../components/PhotoTabs.vue'

export default {
  name: 'PageProfile',
  components: {
    PhotoTabs
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
</style>