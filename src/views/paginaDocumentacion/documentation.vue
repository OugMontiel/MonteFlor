<script>
import Footer from "@/components/web/footer.vue";
import HeaderDoc from "@/components/documentacion/header.vue";
import Header from "@/components/header.vue";

export default {
  name: "vista-para toda la documentacion",
  components: {Header, HeaderDoc, Footer},
};
</script>

<template>
  <Header />
  <HeaderDoc />
  <main>
    <router-view class="us__content" />
  </main>
  <Footer />
</template>

<style scoped>
.documentation-view {
  display: flex;
}

.sidebar {
  width: 30%;
  padding: 20px;
  background-color: #f4f4f4;
}

.content {
  width: 70%;
  padding: 20px;
}
</style>
