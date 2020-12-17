<template>
  <q-layout view="lHh Lpr lFf">
    <q-header 
    class="bg-white text-grey-10"
    bordered
    >
      <q-toolbar class="constrain">

          
        <q-toolbar-title
        class="text-grand-hotel text-bold">
          BetweenCloset
        </q-toolbar-title>
        <q-btn label="로그인" v-on:click="gLogin" 
        flat/>
        <q-btn label="정보" v-on:click="checkUser" 
        flat/>
        <q-btn label="로그아웃" v-on:click="signOut" 
        flat/>
      </q-toolbar>

    </q-header>

      <q-footer
        class="bg-white"
        bordered>

        <q-tabs
          class="text-grey-10"
          active-color="primary"
          indicator-color="transparent">

        <q-route-tab
          to="/"
          icon="eva-home-outline" />
        <q-route-tab
          to="/friendsearch"
          icon="eva-person-add-outline" />
          <q-route-tab
          to="/friendlist"
          icon="eva-people-outline" />
          <q-route-tab
          to="/mypage"
          icon="eva-person-outline" />
      </q-tabs>
      </q-footer>

    <q-page-container class="bg-grey-1">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
// import { onAuthUIStateChange, AuthState } from '@aws-amplify/ui-components'
import { Auth } from 'aws-amplify'

export default {
  name: 'MainLayout',
  // created() {
  //   onAuthUIStateChange((authState, authData) => {
  //     this.authState = authState;
  //     this.user = authData;
  //     if(authState === AuthState.VerifyContact){
  //       console.log('verifying!')
  //     }
  //   })
  // },

  methods: {
    async gLogin(){
      await Auth.federatedSignIn({ provider: 'Google' })
      .then(res => {
        console.log(res);
        this.$emit("login",Auth.currentAuthenticatedUser());
        // this.$store.commit('Account/userSignInDone',Auth.currentAuthenticatedUser())
      })
    },
    async checkUser(){
      const user = await Auth.currentAuthenticatedUser()
      console.log('user: ', user)
    },
    async signOut(){
            await Auth.signOut()
        }
  },

  data() {
    return {

    }
  }
}
</script>

<style lang="sass">
  .q-toolbar
    @media (min-width: $breakpoint-sm-min)
      height: 77px
  .q-toolbar__title
    font-size: 30px
    @media (max-width: $breakpoint-xs-max)
      text-align: center
    

  .q-footer
    .q-tab__icon
      font-size: 30px


</style>
