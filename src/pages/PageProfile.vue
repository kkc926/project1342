<template>
    <q-page>
        <q-list>
            <user-profile />
            <q-item>
                <photo-tabs class="ms" />
            </q-item>
    `   </q-list>
    </q-page>
</template>

<script>
import UserProfile from '../components/UserProfile.vue'
import PhotoTabs from '../components/PhotoTabs.vue'

export default {
  name: 'PageProfile',
  components: {
    PhotoTabs,
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
</style>