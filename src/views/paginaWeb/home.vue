<script>
import HeaderPrincipal from "@/components/header.vue";
import FooterView from "@/components/web/footer.vue";

export default {
  name: "HomePrincipal",
  components: {
    HeaderPrincipal,
    FooterView,
  },
};
</script>

<template>
  <HeaderPrincipal />

  <router-view />

  <FooterView />
</template>
