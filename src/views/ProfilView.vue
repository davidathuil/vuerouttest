<template>
  <div class="about">
    <h1>This is an profil page</h1>
    <div>Utilisateur {{ $route.params.id }}</div>
     <router-view/>
  </div>
  
</template>
<script>

import HelloWorld from "../components/HelloWorld.vue";

export default {
  
  components: {
    HelloWorld,
  },

data () {
    return {
      
    }
  },

}

</script>