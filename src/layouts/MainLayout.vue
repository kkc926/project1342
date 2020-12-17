<template>
  <q-layout view="lHh Lpr lFf">
    <q-header 
    class="bg-white text-grey-10"
    bordered
    >
      <q-toolbar class="constrain">
        <q-btn
          flat
          rount
          dense
          size="18px"
          icon="eva-home-outline" 
          to="/"
          />
          <q-separator vertical
          spaced
          />
          
        <q-toolbar-title
        class="text-grand-hotel text-bold">
        </q-toolbar-title>
        <q-btn label="로그인" v-on:click="gLogin" />
        <q-btn label="정보" v-on:click="checkUser" />
        <q-btn label="유저" v-on:click="getUserName" />
      </q-toolbar>

    </q-header>

      <q-footer
        class="bg-white small-screen-only"
        bordered>

        <q-tabs
          class="text-grey-10"
          active-color="primary"
          indicator-color="transparent">

        <q-route-tab
          to="/"
          icon="eva-home-outline" />
        <q-route-tab
          to="/camera"
          icon="eva-camera-outline" />
      </q-tabs>
      </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
// import { onAuthUIStateChange, AuthState } from '@aws-amplify/ui-components'
import { Auth } from 'aws-amplify'
import Axios from 'axios'
import { mapGetters } from 'vuex';

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
  
  data(){
    return{
      isLogin:false,
      userInfo:false,
      cat:false
    }
  },

  mounted(){
    this.checkLogin()
  },

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
        },

    async checkLogin(){
      this.LoggedUser = await Auth.currentAuthenticatedUser() 
      this.$store.dispatch('account/finishUserSignIn', this.LoggedUser)
      this.getUserName()
      console.log(this.getUserName)
    },

    // 헤더 포함한 겟 요청
    getUserName(){
      let reqHeader = { headers:{
        'Content-Type':'application/json',
        'Authorization': this.idToken
        }
      }
      Axios.get("https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/user", reqHeader).then(res=>
      this.userInfo = res)
      console.log("success")
      console.log(this.userInfo)
    },

    //헤더 없는 겟 요청
    testAxios() {     
      Axios.get('https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/categories')
        .then( res =>{
          console.log(res)
          this.cat = res
        })
      console.log('finished')
    }
  },

  computed:{
    accessToken : function(){
      if(this.LoggedUser !== null)
        return this.LoggedUser.signInUserSession.accessToken.jwtToken
      
      return null
    },
    idToken: function(){
      if(this.LoggedUser !== null)
        return this.LoggedUser.signInUserSession.idToken.jwtToken
      
      return null
    }
  },

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
