import Vue from 'vue';
import app from './app.vue';
import router from './router';

new Vue({
  router,
  el: '#app',
  components: {
    app
  },
  render: h => h(app)
});