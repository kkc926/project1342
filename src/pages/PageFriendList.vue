<template>
  <q-page>
    <q-item>
      <q-item-section avatar class="col-4">
        <q-avatar size="70px" class="profile">
          <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
        </q-avatar>
        <q-item-label size="14" caption class="name">정유라</q-item-label>
      </q-item-section>

      <q-item-section class="col-4">
        <q-item-label class="number">36</q-item-label>
        <q-item-label caption> 코디 </q-item-label>
      </q-item-section>
      <q-item-section class="col-4">
        <q-item-label class="number">2</q-item-label>
        <q-item-label caption> 친구 </q-item-label>
      </q-item-section>
    </q-item>
    <q-separator class="lineline" />
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
