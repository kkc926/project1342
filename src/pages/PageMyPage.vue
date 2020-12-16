<template>
      <q-footer
        class="bg-white small-screen-only"
        bordered>

        <q-tabs
          class="text-grey-10"
          active-color="primary"
          indicator-color="transparent"
        inline-label
        mobile-arrows
        outside-arrows>

          <q-route-tab
          to="/"
          icon="eva-home-outline" />
          <q-route-tab
          to="/mypage"
          label="Jacket" 
          />
          <q-route-tab 
          to="/mypage"
          label="T-shirt" 
          />
          <q-route-tab
          to="/mypage"
          label="Pants" />
          <q-route-tab
          to="/mypage"
          label="Onepiece" />
          <q-route-tab
          to="/mypage"
          icon="eva-person-outline" />
      </q-tabs>
      
      </q-footer>

  
</template>

<script>
export default {
  name: 'MyPage'
}
</script>

