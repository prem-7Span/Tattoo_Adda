<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>

<script>
import Header from "../components/global/header.vue";
import Footer from "../components/global/footer.vue";

export default {
  name: "default",
  components: {
    Header,
    Footer,
  },
};
</script>
