<template>
  <div class="action">
    <div class="call-button-container">
      <VueSpinner size="50" color="blue" />
    </div>
  </div>
</template>

<script>
import {
  VueSpinner
} from 'vue3-spinners';
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    VueSpinner,
  },
  created() {
    this.$router.push('/about');
  },
}
</script>
