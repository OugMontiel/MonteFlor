<script>
import Footer from "@/components/web/footer.vue";
import HeaderDoc from "@/components/documentacion/header.vue";
import Header from "@/components/header.vue";

export default {
  name: "layaud de la documentacion monymonty",
  components: {Header, HeaderDoc, Footer},
};
</script>

<template>
  <Header />
  <HeaderDoc />
  <div class="monymonty">
    <h2>Temas</h2>
  </div>
  <Footer />
</template>

<style scoped></style>
