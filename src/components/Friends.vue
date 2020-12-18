<template>
  <div class="q-pa-md">
    <q-list bordered>
      <q-item-label header>친구 목록</q-item-label>
      <q-item
        v-for="friend in friends.data.friends_list"
        :key="friend.user_id"
        class="q-my-sm"
        clickable
        v-ripple
      >
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            {{ friend.name.slice(0, 1) }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ friend.name }}</q-item-label>
          <q-item-label caption lines="1">{{ friend.email }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="chat_bubble" color="green" />
        </q-item-section>
      </q-item>

      <q-item-label header>Wish</q-item-label>

      <q-item
        v-for="friend in friends.data.friends_list"
        :key="friend.user_id"
        class="q-mb-sm"
        clickable
        v-ripple
      >
        <q-item-section avatar>
          <q-avatar color="amber" text-color="white">
            {{ friend.name.slice(0, 1) }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ friend.name }}</q-item-label>
          <q-item-label caption lines="1">{{ friend.email }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="chat_bubble" color="grey" />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import Axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "Friends",
  data() {
    // const contacts = [
    //   {
    //     id: 1,
    //     name: "Ruddy Jedrzej",
    //     email: "rjedrzej0@discuz.net",
    //     letter: "R",
    //   },
    //   {
    //     id: 2,
    //     name: "Mallorie Alessandrini",
    //     email: "malessandrini1@marketwatch.com",
    //     letter: "M",
    //   },
    //   {
    //     id: 3,
    //     name: "Elisabetta Wicklen",
    //     email: "ewicklen2@microsoft.com",
    //     letter: "E",
    //   },
    //   {
    //     id: 4,
    //     name: "Seka Fawdrey",
    //     email: "sfawdrey3@wired.com",
    //     letter: "김",
    //   },
    // ];

    // const offline = [
    //   {
    //     id: 5,
    //     name: "Brunhilde Panswick",
    //     email: "bpanswick4@csmonitor.com",
    //     avatar: "avatar2.jpg",
    //   },
    //   {
    //     id: 6,
    //     name: "Winfield Stapforth",
    //     email: "wstapforth5@pcworld.com",
    //     avatar: "avatar6.jpg",
    //   },
    // ];
    return {
      friends: null,
    };
  },
  computed: {
    ...mapGetters({
      idToken: "account/idToken",
    }),
  },
  mounted() {
    this.getFriends();
  },
  methods: {
    async getFriends() {
      let reqHeader = {
        headers: {
          "Content-Type": "application/json",
          Authorization: await this.idToken,
        },
      };
      this.friends = await Axios.get(
        "https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/friends",
        reqHeader
      );
      console.log(this.friends.data);
    },
  },
};
</script>
<style scoped>
.q-pa-md {
  padding: 0;
}
</style>