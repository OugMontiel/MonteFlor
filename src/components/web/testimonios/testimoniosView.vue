<script setup>
import {ref, computed, onMounted, onBeforeUnmount} from "vue";
import testimonios from "@/components/web/testimonios/testimonio.js";

const currentIndex = ref(0);
const cantidadAMostrar = 2;
const enPausa = ref(false);
let intervalId = null;

const totalGrupos = computed(() => Math.ceil(testimonios.length / cantidadAMostrar));
const grupoActual = computed(() => Math.floor(currentIndex.value / cantidadAMostrar));

const grupoTestimonios = computed(() => testimonios.slice(currentIndex.value, currentIndex.value + cantidadAMostrar));

function siguienteGrupo() {
  currentIndex.value += cantidadAMostrar;
  if (currentIndex.value >= testimonios.length) {
    currentIndex.value = 0;
  }
}

function irAGrupo(indice) {
  currentIndex.value = indice * cantidadAMostrar;
}

function startAutoSlide() {
  intervalId = setInterval(() => {
    if (!enPausa.value) siguienteGrupo();
  }, 6000);
}

function getStars(rating) {
  return "★".repeat(rating) + "☆".repeat(5 - rating);
}

onMounted(startAutoSlide);
onBeforeUnmount(() => clearInterval(intervalId));
</script>

<template>
  <div class="testimonial-wrapper" @mouseenter="enPausa = true" @mouseleave="enPausa = false">
    <TransitionGroup name="testimonial-slide" tag="section" class="testimonial-container">
      <div
        class="testimonial-card"
        v-for="t in grupoTestimonios"
        :key="t.name"
        v-motion
        :initial="{opacity: 0, y: 30}"
        :enter="{opacity: 1, y: 0, transition: {duration: 400}}"
      >
        <p class="quote">"</p>
        <p class="text">"{{ t.text }}"</p>
        <p class="name">{{ t.name }}</p>
        <p class="stars">{{ getStars(t.rating) }}</p>
      </div>
    </TransitionGroup>

    <div class="testimonial-dots">
      <button
        v-for="n in totalGrupos"
        :key="n"
        type="button"
        class="dot"
        :class="{'dot-active': n - 1 === grupoActual}"
        :aria-label="`Ver testimonios ${n}`"
        @click="irAGrupo(n - 1)"
      ></button>
    </div>
  </div>
</template>

<style scoped>
.testimonial-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.testimonial-container {
  position: relative;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  padding: 1rem 2rem;
  flex-wrap: wrap;
  width: 100%;
}

.testimonial-card {
  width: 100%;
  max-width: 500px;
  background: var(--color-superficie);
  padding: 2.5rem;
  border-radius: var(--borde-radio-lg);
  box-shadow: var(--sombra-md);
  text-align: center;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.testimonial-card:hover {
  box-shadow: var(--sombra-acento);
  transform: translateY(-6px) scale(1.02);
}

.quote {
  font-size: 4rem;
  line-height: 1;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: var(--color-acento-suave);
  text-align: left;
}

.text {
  font-size: 1.1rem;
  color: var(--texto-secundario);
  margin-bottom: 1.5rem;
  font-style: italic;
}

.name {
  font-weight: bold;
  font-size: 1.3rem;
  color: var(--texto-primario);
  margin-bottom: 0.3rem;
}

.stars {
  font-size: 1.6rem;
  color: var(--color-acento);
}

.testimonial-dots {
  display: flex;
  gap: 0.6rem;
}

.dot {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 999px;
  background: var(--color-neutro);
  cursor: pointer;
  transition:
    background-color 0.25s ease,
    transform 0.25s ease;
}

.dot:hover {
  transform: scale(1.2);
}

.dot-active {
  background: var(--color-acento);
  transform: scale(1.3);
}

.testimonial-slide-enter-active,
.testimonial-slide-leave-active {
  transition:
    opacity 0.35s ease,
    transform 0.35s ease;
}

.testimonial-slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.testimonial-slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.testimonial-slide-leave-active {
  position: absolute;
}
</style>
