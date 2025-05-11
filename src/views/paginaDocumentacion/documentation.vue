<script>
import FooterView from "@/components/web/footer.vue";
import HeaderDocView from "@/components/documentacion/header.vue";
import HeaderView from "@/components/header.vue";

export default {
  name: "vista-para toda la documentacion",
  components: {HeaderView, HeaderDocView, FooterView},
};
</script>

<template>
  <HeaderView />
  <HeaderDocView />
  <main>
    <router-view class="us__content" />
  </main>
  <FooterView />
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
