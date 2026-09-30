<script>
import testimonios from "@/components/web/testimonios/testimonio.js";

export default {
  name: "TestimoniosView",
  data() {
    return {
      testimonios,
      currentIndex: 0,
      intervalId: null,
      itemsPerPage: 2,
    };
  },
  computed: {
    totalSlides() {
      return Math.ceil(this.testimonios.length / this.itemsPerPage);
    },
    currentSlide() {
      return Math.floor(this.currentIndex / this.itemsPerPage);
    },
    grupoTestimonios() {
      return this.testimonios.slice(this.currentIndex, this.currentIndex + this.itemsPerPage);
    },
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeUnmount() {
    this.stopAutoSlide();
  },
  methods: {
    startAutoSlide() {
      this.intervalId = setInterval(() => {
        this.nextSlide();
      }, 7000);
    },
    stopAutoSlide() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    },
    nextSlide() {
      if (this.currentIndex + this.itemsPerPage >= this.testimonios.length) {
        this.currentIndex = 0;
      } else {
        this.currentIndex += this.itemsPerPage;
      }
    },
    prevSlide() {
      if (this.currentIndex - this.itemsPerPage < 0) {
        this.currentIndex = Math.max(0, (this.totalSlides - 1) * this.itemsPerPage);
      } else {
        this.currentIndex -= this.itemsPerPage;
      }
    },
    goToSlide(index) {
      this.currentIndex = index * this.itemsPerPage;
    },
    getInitials(name) {
      return name
        .split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();
    },
  },
};
</script>

<template>
  <div class="relative w-full" @mouseenter="stopAutoSlide" @mouseleave="startAutoSlide">
    <!-- Grid de Testimonios -->
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
      <PrimeCard
        v-for="(t, index) in grupoTestimonios"
        :key="index"
        class="!rounded-3xl !border !border-surface-200/70 !bg-surface-0 !shadow-sm transition-all duration-300 hover:!border-primary-300 hover:!shadow-md dark:!border-surface-800/80 dark:!bg-surface-900 dark:hover:!border-primary-700"
      >
        <template #content>
          <div class="flex flex-col justify-between h-full p-2">
            <!-- Calificación y Comillas -->
            <div class="flex items-center justify-between mb-4">
              <div class="flex gap-1">
                <i
                  v-for="star in 5"
                  :key="star"
                  class="pi"
                  :class="star <= t.rating ? 'pi-star-fill text-amber-400' : 'pi-star text-surface-300 dark:text-surface-700'"
                  style="font-size: 0.95rem"
                />
              </div>
              <i class="pi pi-comment text-primary-400/60 dark:text-primary-500/40 text-xl" />
            </div>

            <!-- Contenido del testimonio -->
            <p class="text-sm sm:text-base leading-relaxed text-surface-600 dark:text-surface-300 italic mb-6">"{{ t.text }}"</p>

            <!-- Autor -->
            <div class="flex items-center gap-3 pt-4 border-t border-surface-100 dark:border-surface-800/60">
              <div
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-xs font-semibold text-primary-800 dark:bg-primary-950 dark:text-primary-300"
              >
                {{ getInitials(t.name) }}
              </div>
              <div class="flex flex-col">
                <span class="text-sm font-semibold text-surface-900 dark:text-surface-100">
                  {{ t.name }}
                </span>
                <span class="text-xs text-surface-400 dark:text-surface-500"> Usuario Verificado </span>
              </div>
            </div>
          </div>
        </template>
      </PrimeCard>
    </div>

    <!-- Controles de Navegación -->
    <div class="mt-8 flex items-center justify-center gap-4">
      <PrimeButton
        icon="pi pi-chevron-left"
        severity="secondary"
        text
        rounded
        size="small"
        class="!h-9 !w-9"
        @click="prevSlide"
        title="Testimonios anteriores"
      />

      <div class="flex items-center gap-2">
        <button
          v-for="slide in totalSlides"
          :key="slide"
          @click="goToSlide(slide - 1)"
          class="h-2 rounded-full transition-all duration-300"
          :class="
            currentSlide === slide - 1
              ? 'w-6 bg-primary-600 dark:bg-primary-400'
              : 'w-2 bg-surface-300 dark:bg-surface-700 hover:bg-surface-400'
          "
          :title="`Ir a página ${slide}`"
        />
      </div>

      <PrimeButton
        icon="pi pi-chevron-right"
        severity="secondary"
        text
        rounded
        size="small"
        class="!h-9 !w-9"
        @click="nextSlide"
        title="Siguientes testimonios"
      />
    </div>
  </div>
</template>
