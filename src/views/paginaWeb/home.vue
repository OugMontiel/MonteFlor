<script>
import logo from "@/assets/img/MonyMontySinFondo3.png";
import imgNosotros1 from "@/assets/img/nosotros-imagen1.svg";

import headerHomeView from "@/components/web/headerWeb.vue";
import FooterView from "@/components/web/footer.vue";
import iniciarSesionView from "@/components/web/iniciarSesionView.vue";
import testimoniosView from "@/components/web/testimonios/testimoniosView.vue";

export default {
  name: "HomeView",
  data() {
    return {
      logo,
      imgNosotros1,
      pilares: [
        {
          titulo: "Educación",
          texto: "Aprende finanzas personales con recursos claros, hábitos prácticos y contenidos pensados para la vida diaria.",
        },
        {
          titulo: "Control",
          texto: "Registra tus ingresos, gastos y metas para entender qué pasa con tu dinero antes de tomar decisiones.",
        },
        {
          titulo: "Gestión",
          texto: "Organiza tu presupuesto, identifica oportunidades de mejora y proyecta una ruta financiera más saludable.",
        },
      ],
    };
  },
  components: {
    headerHomeView,
    FooterView,
    iniciarSesionView,
    testimoniosView,
  },
  methods: {
    irAInicio() {
      this.$router.push("/");
    },
  },
};
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 px-4 py-3 shadow-sm backdrop-blur md:px-8">
    <div class="mx-auto flex max-w-7xl items-center justify-between gap-4">
      <button class="flex items-center" aria-label="Ir al inicio" @click="irAInicio">
        <img :src="logo" alt="MonyMonty" class="h-10 w-auto cursor-pointer object-contain md:h-12" />
      </button>

      <div class="hidden md:block">
        <headerHomeView />
      </div>

      <iniciarSesionView />
    </div>
  </header>

  <main class="bg-[#f7f5f0] text-zinc-900">
    <section id="inicio" class="hero-bg relative min-h-[calc(100vh-73px)] overflow-hidden text-white">
      <div class="absolute inset-0 bg-zinc-950/55"></div>
      <div class="relative mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl items-center px-5 py-20 md:px-8">
        <div class="max-w-3xl">
          <p class="mb-4 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-amber-200 backdrop-blur">
            Finanzas personales simples
          </p>
          <h1 class="text-5xl font-black leading-tight text-amber-300 sm:text-6xl lg:text-7xl">
            MonyMonty
          </h1>
          <p class="mt-6 max-w-2xl text-2xl font-semibold leading-snug text-white sm:text-4xl">
            Una forma inteligente de manejar tus finanzas.
          </p>
          <blockquote class="mt-8 max-w-xl border-l-4 border-amber-300 pl-5 text-base leading-7 text-zinc-100 sm:text-lg">
            "La riqueza consiste mucho más en disfrutar que en poseer". - Aristóteles
          </blockquote>
        </div>
      </div>
    </section>

    <section id="nosotros" class="bg-white px-5 py-20 md:px-8 lg:py-28">
      <div class="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p class="text-sm font-bold uppercase tracking-[0.18em] text-[#f25c2f]">Nuestra razón</p>
          <h2 class="mt-4 text-3xl font-black leading-tight text-zinc-900 sm:text-4xl lg:text-5xl">
            ¿Por qué es importante la educación financiera?
          </h2>
          <img :src="imgNosotros1" alt="Personas aprendiendo finanzas" class="mx-auto mt-10 max-h-80 w-full object-contain" />
        </div>

        <div class="rounded-lg border border-zinc-200 bg-[#faf8f3] p-6 shadow-sm md:p-10">
          <h3 class="text-2xl font-extrabold leading-tight text-zinc-900 sm:text-3xl">
            Estamos convencidos de que todos podemos crecer.
          </h3>
          <p class="mt-6 text-lg leading-8 text-zinc-700">
            MonyMonty surge ante una necesidad clara: la falta de alfabetización financiera en los hogares colombianos y latinoamericanos.
            La ausencia de estos conocimientos condiciona nuestras elecciones, facilita el sobreendeudamiento y frena el desarrollo personal
            y colectivo.
          </p>
          <p class="mt-5 text-lg leading-8 text-zinc-700">
            Nuestra misión es brindar herramientas accesibles para que más personas entiendan, organicen y tomen el control de sus finanzas.
          </p>
        </div>
      </div>
    </section>

    <section id="productos" class="bg-[#2f2f2f] px-5 py-20 text-white md:px-8 lg:py-28">
      <div class="mx-auto max-w-7xl">
        <div class="max-w-3xl">
          <p class="text-sm font-bold uppercase tracking-[0.18em] text-amber-300">Producto</p>
          <h2 class="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            ¿Qué es MonyMonty?
          </h2>
          <p class="mt-5 text-xl leading-8 text-zinc-200">
            Una solución integral para tu bienestar financiero basada en tres pilares.
          </p>
        </div>

        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <article
            v-for="pilar in pilares"
            :key="pilar.titulo"
            class="rounded-lg border border-white/10 bg-white p-7 text-zinc-900 shadow-xl transition duration-200 hover:-translate-y-1 hover:shadow-amber-500/20"
          >
            <div class="mb-6 flex h-12 w-12 items-center justify-center rounded-md bg-amber-300 text-xl font-black text-zinc-950">
              {{ pilar.titulo.charAt(0) }}
            </div>
            <h3 class="text-2xl font-extrabold text-[#f25c2f]">{{ pilar.titulo }}</h3>
            <p class="mt-4 text-base leading-7 text-zinc-700">{{ pilar.texto }}</p>
          </article>
        </div>

        <p class="mt-12 max-w-3xl text-xl font-semibold leading-8 text-amber-100">
          Únete a nuestra comunidad y comienza a construir una vida financiera más saludable.
        </p>
      </div>
    </section>

    <section id="clientes" class="bg-white px-5 py-20 md:px-8 lg:py-28">
      <div class="mx-auto max-w-7xl">
        <div class="mx-auto max-w-2xl text-center">
          <p class="text-sm font-bold uppercase tracking-[0.18em] text-[#f25c2f]">Experiencias</p>
          <h2 class="mt-4 text-3xl font-black text-zinc-900 sm:text-4xl lg:text-5xl">
            Clientes satisfechos
          </h2>
        </div>

        <testimoniosView />
      </div>
    </section>

    <section id="contacto" class="bg-[#faf8f3] px-5 py-20 md:px-8 lg:py-28">
      <div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p class="text-sm font-bold uppercase tracking-[0.18em] text-[#f25c2f]">Contacto</p>
          <h2 class="mt-4 text-3xl font-black leading-tight text-zinc-900 sm:text-4xl lg:text-5xl">
            Da el primer paso hacia una mejor relación con tu dinero.
          </h2>
          <p class="mt-6 text-lg leading-8 text-zinc-700">
            Explora la aplicación, revisa la documentación o escríbenos para conocer cómo MonyMonty puede ayudarte a ordenar tus finanzas.
          </p>
        </div>

        <div class="grid gap-4 sm:grid-cols-2">
          <a href="#productos" class="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-amber-300">
            <span class="text-sm font-bold uppercase tracking-[0.16em] text-zinc-500">Conoce</span>
            <strong class="mt-3 block text-xl text-zinc-900">Nuestros pilares</strong>
          </a>
          <router-link to="/documentacion" class="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-amber-300">
            <span class="text-sm font-bold uppercase tracking-[0.16em] text-zinc-500">Revisa</span>
            <strong class="mt-3 block text-xl text-zinc-900">Documentación</strong>
          </router-link>
        </div>
      </div>
    </section>

    <FooterView />
  </main>
</template>

<style scoped>
.hero-bg {
  background-image: url("@/assets/img/fondo-inicio.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
