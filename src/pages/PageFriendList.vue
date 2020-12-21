<template>
  <q-page>
    <user-profile />
    <friends class="ms" />
  </q-page>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";
import Friends from "../components/Friends.vue";

export default {
  name: "PageFriendList",
  components: {
    UserProfile,
    Friends,
  },
};
</script>
<style scoped>
.lineline {
  margin-top: 36px;
}
.profile {
  margin-top: 10px;
  margin-right: 30px;
}
.name {
  margin-left: 5px;
  margin-top: 10px;
  font-size: 16px;
}

.number {
  font-size: 20px;
}
.q-list--bordered {
  border: 0px solid rgba(0, 0, 0, 0.12);
}
</style>
