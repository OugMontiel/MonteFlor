<script setup>
import {ref} from "vue";
import imgNosotros1 from "@/assets/img/nosotros-imagen1.svg";
import logoImg from "@/assets/img/MonyMontySinFondo3.png";
import testimoniosView from "@/components/web/testimonios/testimoniosView.vue";

defineOptions({
  name: "HomeMonyMonty",
});

const contactForm = ref({
  name: "",
  email: "",
  interest: "educacion",
  message: "",
});

const formSubmitted = ref(false);

const handleContactSubmit = () => {
  if (contactForm.value.name && contactForm.value.email) {
    formSubmitted.value = true;
    setTimeout(() => {
      contactForm.value = {name: "", email: "", interest: "educacion", message: ""};
      formSubmitted.value = false;
    }, 4000);
  }
};

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({behavior: "smooth", block: "start"});
  }
}

const pilares = [
  {
    icon: "pi pi-book",
    tag: "Aprende",
    title: "Educación",
    description:
      "Mejora tus conocimientos en finanzas personales con técnicas, micro-lecciones y recursos prácticos pensados para la vida cotidiana.",
    details: ["Guías paso a paso", "Hábitos de ahorro", "Conceptos sin tecnicismos"],
  },
  {
    icon: "pi pi-chart-pie",
    tag: "Visualiza",
    title: "Control",
    description:
      "Registra, visualiza y analiza tus finanzas personales con una aplicación intuitiva diseñada para que entiendas a dónde va cada peso.",
    details: ["Categorización inteligente", "Alertas de gastos", "Seguimiento en tiempo real"],
  },
  {
    icon: "pi pi-compass",
    tag: "Planifica",
    title: "Gestión",
    description:
      "Recibe orientación y acompañamiento personalizado para planificar tu futuro, consolidar deudas y alcanzar tus metas familiares.",
    details: ["Metas a corto y largo plazo", "Planes de pago", "Asesoría personalizada"],
  },
];

const metricas = [
  {number: "3+", label: "Pilares Estratégicos"},
  {number: "100%", label: "Enfoque Humano"},
  {number: "+20%", label: "Capacidad de Ahorro Reportada"},
  {number: "24/7", label: "Acceso a tus Métricas"},
];
</script>

<template>
  <main class="w-full overflow-hidden">
    <!-- ==================== HERO SECTION ==================== -->
    <section id="inicio" class="relative pt-12 pb-24 sm:pt-20 sm:pb-32 lg:pt-24 lg:pb-36">
      <!-- Glow orgánico de fondo -->
      <div
        class="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-primary-400/15 via-primary-300/10 to-transparent blur-3xl dark:from-primary-600/15 dark:via-primary-500/5"
      />

      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <!-- Badge Superior -->
        <div class="flex justify-center">
          <div
            class="inline-flex items-center gap-2 rounded-full border border-primary-200/80 bg-primary-50/80 px-4 py-1.5 text-xs font-semibold text-primary-900 shadow-sm backdrop-blur-sm dark:border-primary-800/80 dark:bg-primary-950/70 dark:text-primary-300"
          >
            <span class="flex h-2 w-2 rounded-full bg-primary-500 animate-pulse" />
            <span>MonteFlor presenta MonyMonty</span>
            <span class="text-primary-300 dark:text-primary-700">•</span>
            <span class="font-normal">Inteligencia Financiera Personal</span>
          </div>
        </div>

        <!-- Título y Subtítulo -->
        <div class="mt-8 text-center max-w-3xl mx-auto">
          <h1 class="text-4xl font-light tracking-tight text-surface-900 sm:text-6xl lg:text-7xl dark:text-surface-0">
            Una forma <span class="font-semibold text-primary-600 dark:text-primary-400">inteligente</span> de manejar tus finanzas
          </h1>
          <p class="mt-6 text-lg sm:text-xl font-normal leading-relaxed text-surface-600 dark:text-surface-300 max-w-2xl mx-auto">
            Aprende, organiza y toma el control de tu economía familiar con una experiencia diseñada bajo el equilibrio del minimalismo
            orgánico y la tecnología limpia.
          </p>

          <!-- Cita Inspiradora Minimalista -->
          <div
            class="mt-8 inline-flex items-center gap-3 rounded-2xl border border-surface-200/60 bg-surface-0/60 px-5 py-2.5 text-sm text-surface-600 shadow-sm backdrop-blur-sm dark:border-surface-800/60 dark:bg-surface-900/60 dark:text-surface-300"
          >
            <i class="pi pi-bookmark text-primary-500 text-xs" />
            <blockquote class="italic">
              "La riqueza consiste mucho más en disfrutar que en poseer."
              <span class="not-italic font-medium text-surface-800 dark:text-surface-200">— Aristóteles</span>
            </blockquote>
          </div>

          <!-- Botones de Llamada a la Acción (CTA) -->
          <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <PrimeButton
              label="Comenzar con MonyMonty"
              icon="pi pi-arrow-right"
              iconPos="right"
              severity="primary"
              size="large"
              class="w-full sm:w-auto !rounded-full !px-8 !py-3.5 !text-base !font-medium shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5"
              @click="scrollTo('productos')"
            />
            <PrimeButton
              label="Conoce Nuestro Propósito"
              icon="pi pi-info-circle"
              severity="secondary"
              outlined
              size="large"
              class="w-full sm:w-auto !rounded-full !px-7 !py-3.5 !text-base !font-medium !border-surface-300 dark:!border-surface-700 hover:!bg-surface-100 dark:hover:!bg-surface-800"
              @click="scrollTo('nosotros')"
            />
          </div>
        </div>

        <!-- Visual Hero / Preview del Producto -->
        <div class="mt-16 sm:mt-20">
          <div
            class="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-surface-200/80 bg-surface-0/80 p-6 sm:p-10 shadow-xl backdrop-blur-md dark:border-surface-800 dark:bg-surface-900/80"
          >
            <!-- Barra superior estilo mockup moderno -->
            <div class="flex items-center justify-between border-b border-surface-100 pb-5 dark:border-surface-800/80">
              <div class="flex items-center gap-2">
                <span class="h-3 w-3 rounded-full bg-red-400/80" />
                <span class="h-3 w-3 rounded-full bg-amber-400/80" />
                <span class="h-3 w-3 rounded-full bg-emerald-400/80" />
                <span class="ml-2 text-xs font-medium text-surface-400">monymonty.monteflor.app</span>
              </div>
              <div class="flex items-center gap-2">
                <span
                  class="inline-flex items-center gap-1 rounded-full bg-primary-100/70 px-2.5 py-0.5 text-[11px] font-semibold text-primary-800 dark:bg-primary-950 dark:text-primary-300"
                >
                  <i class="pi pi-shield text-[10px]" /> Seguro & Privado
                </span>
              </div>
            </div>

            <!-- Dashboard Preview Cards -->
            <div class="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <!-- Tarjeta 1: Resumen -->
              <div class="rounded-2xl border border-surface-100 bg-surface-50/70 p-5 dark:border-surface-800 dark:bg-surface-800/40">
                <span class="text-xs font-medium uppercase tracking-wider text-surface-400">Ahorro Mensual</span>
                <p class="mt-2 text-2xl font-bold text-surface-900 dark:text-surface-0">+24.5%</p>
                <div class="mt-2 flex items-center text-xs text-primary-600 dark:text-primary-400 font-medium">
                  <i class="pi pi-arrow-up mr-1 text-[10px]" /> $ 450.000 COP este mes
                </div>
              </div>

              <!-- Tarjeta 2: Hábitos -->
              <div class="rounded-2xl border border-surface-100 bg-surface-50/70 p-5 dark:border-surface-800 dark:bg-surface-800/40">
                <span class="text-xs font-medium uppercase tracking-wider text-surface-400">Salud Financiera</span>
                <p class="mt-2 text-2xl font-bold text-primary-600 dark:text-primary-400">92 / 100</p>
                <div class="mt-2 flex items-center text-xs text-surface-500 font-medium">
                  <i class="pi pi-check-circle mr-1 text-[10px] text-primary-500" /> Presupuesto bajo control
                </div>
              </div>

              <!-- Tarjeta 3: Metas -->
              <div class="rounded-2xl border border-surface-100 bg-surface-50/70 p-5 dark:border-surface-800 dark:bg-surface-800/40">
                <span class="text-xs font-medium uppercase tracking-wider text-surface-400">Meta: Fondo de Paz</span>
                <p class="mt-2 text-2xl font-bold text-surface-900 dark:text-surface-0">78%</p>
                <div class="mt-3 h-2 w-full overflow-hidden rounded-full bg-surface-200 dark:bg-surface-700">
                  <div class="h-full rounded-full bg-primary-500" style="width: 78%" />
                </div>
              </div>
            </div>

            <!-- Ilustración / Identidad central -->
            <div
              class="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl bg-gradient-to-r from-primary-500/10 via-primary-400/5 to-transparent p-6 dark:from-primary-950/40"
            >
              <div class="flex items-center gap-4">
                <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-surface-0 shadow-sm dark:bg-surface-800">
                  <img :src="logoImg" alt="MonyMonty Icon" class="h-10 w-10 object-contain" />
                </div>
                <div>
                  <h4 class="text-base font-semibold text-surface-900 dark:text-surface-0">MonyMonty • Asistente Diario</h4>
                  <p class="text-xs sm:text-sm text-surface-500 dark:text-surface-400">
                    Toma mejores decisiones sin complicaciones y con claridad total.
                  </p>
                </div>
              </div>
              <PrimeButton
                label="Ver Demostración"
                severity="primary"
                text
                icon="pi pi-play"
                class="!text-sm !font-semibold shrink-0"
                @click="scrollTo('nosotros')"
              />
            </div>
          </div>
        </div>

        <!-- Tira de métricas -->
        <div class="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4 border-y border-surface-200/60 py-8 dark:border-surface-800/60">
          <div v-for="m in metricas" :key="m.label" class="text-center">
            <span class="text-2xl sm:text-3xl font-bold tracking-tight text-primary-600 dark:text-primary-400">{{ m.number }}</span>
            <p class="mt-1 text-xs sm:text-sm text-surface-500 dark:text-surface-400 font-medium">{{ m.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== NOSOTROS SECTION ==================== -->
    <section id="nosotros" class="relative py-24 sm:py-32 bg-surface-0/50 dark:bg-surface-900/30 transition-colors">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <!-- Columna Izquierda: Imagen / Ilustración -->
          <div class="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div class="relative w-full max-w-md">
              <div
                class="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary-200/40 to-primary-100/10 blur-xl dark:from-primary-900/30"
              />
              <div
                class="relative overflow-hidden rounded-3xl border border-surface-200/80 bg-surface-0 p-8 shadow-sm transition-all hover:shadow-md dark:border-surface-800 dark:bg-surface-900"
              >
                <img
                  :src="imgNosotros1"
                  alt="Educación financiera familiar MonyMonty"
                  class="w-full h-auto max-h-[360px] object-contain transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div class="mt-6 rounded-2xl bg-surface-50 p-4 dark:bg-surface-800/60">
                  <p class="text-xs font-semibold text-primary-700 dark:text-primary-300">Transformación con sentido humano</p>
                  <p class="mt-1 text-xs text-surface-500 dark:text-surface-400 leading-relaxed">
                    Acompañamos a las familias a transformar el estrés económico en tranquilidad y libertad para proyectar su futuro.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Columna Derecha: Contenido y Misión -->
          <div class="lg:col-span-7 order-1 lg:order-2">
            <span
              class="inline-flex items-center gap-1.5 rounded-full bg-primary-100/70 px-3 py-1 text-xs font-semibold text-primary-800 dark:bg-primary-950 dark:text-primary-300"
            >
              <i class="pi pi-heart text-xs" /> Origen & Compromiso
            </span>

            <h2 class="mt-4 text-3xl font-bold tracking-tight text-surface-900 sm:text-4xl dark:text-surface-0">
              ¿Por qué es vital la educación financiera?
            </h2>

            <h3 class="mt-4 text-xl sm:text-2xl font-light text-primary-700 dark:text-primary-300">
              Estamos convencidos de que todos podemos crecer.
            </h3>

            <div class="mt-6 space-y-4 text-base leading-relaxed text-surface-600 dark:text-surface-300">
              <p>
                <strong class="font-semibold text-surface-900 dark:text-surface-100">MonyMonty</strong> nació de una profunda experiencia
                personal: la evidente falta de herramientas accesibles de educación financiera en nuestros propios hogares. Esta realidad no
                es aislada; se replica día a día en miles de familias colombianas y latinoamericanas.
              </p>
              <p>
                La carencia de conocimientos prácticos limita la toma de decisiones, predispone al sobreendeudamiento y frustra las
                aspiraciones familiares. Por eso, en MonteFlor creamos un espacio accesible, donde la tecnología sirve como puente para
                democratizar la salud financiera de forma cercana, transparente y sin tecnicismos que abrumen.
              </p>
            </div>

            <!-- Puntos Clave -->
            <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                class="flex items-start gap-3 rounded-2xl border border-surface-200/60 bg-surface-0 p-4 dark:border-surface-800 dark:bg-surface-900"
              >
                <i class="pi pi-shield text-primary-600 dark:text-primary-400 text-lg mt-0.5" />
                <div>
                  <h4 class="text-sm font-semibold text-surface-900 dark:text-surface-100">Prevención Activa</h4>
                  <p class="mt-1 text-xs text-surface-500 dark:text-surface-400">
                    Reduce el riesgo de deudas con criterios de compra claros y alertas tempranas.
                  </p>
                </div>
              </div>

              <div
                class="flex items-start gap-3 rounded-2xl border border-surface-200/60 bg-surface-0 p-4 dark:border-surface-800 dark:bg-surface-900"
              >
                <i class="pi pi-sun text-primary-600 dark:text-primary-400 text-lg mt-0.5" />
                <div>
                  <h4 class="text-sm font-semibold text-surface-900 dark:text-surface-100">Tranquilidad Mental</h4>
                  <p class="mt-1 text-xs text-surface-500 dark:text-surface-400">
                    Planifica con serenidad las metas que verdaderamente enriquecen tu vida.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== PRODUCTOS / PILARES SECTION ==================== -->
    <section id="productos" class="relative py-24 sm:py-32">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <!-- Encabezado de Sección -->
        <div class="text-center max-w-2xl mx-auto">
          <span
            class="inline-flex items-center gap-1.5 rounded-full bg-primary-100/70 px-3 py-1 text-xs font-semibold text-primary-800 dark:bg-primary-950 dark:text-primary-300"
          >
            <i class="pi pi-sparkles text-xs" /> Ecosistema Integral
          </span>
          <h2 class="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-surface-900 dark:text-surface-0">¿Qué es MonyMonty?</h2>
          <p class="mt-3 text-base sm:text-lg text-surface-600 dark:text-surface-300">
            Una solución completa para tu bienestar económico basada en tres pilares sinérgicos:
          </p>
        </div>

        <!-- Grid de Tarjetas (PrimeCard) -->
        <div class="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <PrimeCard
            v-for="(pilar, idx) in pilares"
            :key="pilar.title"
            class="group !rounded-3xl !border !border-surface-200/80 !bg-surface-0 !shadow-sm transition-all duration-300 hover:!border-primary-400 hover:!shadow-lg hover:-translate-y-1.5 dark:!border-surface-800 dark:!bg-surface-900 dark:hover:!border-primary-600"
          >
            <template #header>
              <div class="p-6 pb-0 flex items-center justify-between">
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white dark:bg-primary-950 dark:text-primary-300"
                >
                  <i :class="pilar.icon" class="text-xl" />
                </div>
                <span class="text-xs font-semibold uppercase tracking-wider text-surface-400"> Pilar 0{{ idx + 1 }} </span>
              </div>
            </template>

            <template #title>
              <div class="px-6 pt-4">
                <h3 class="text-2xl font-bold text-surface-900 dark:text-surface-0">
                  {{ pilar.title }}
                </h3>
              </div>
            </template>

            <template #content>
              <div class="px-6 pb-6">
                <p class="text-sm leading-relaxed text-surface-600 dark:text-surface-300">
                  {{ pilar.description }}
                </p>

                <div class="mt-6 border-t border-surface-100 pt-4 dark:border-surface-800">
                  <ul class="space-y-2">
                    <li
                      v-for="item in pilar.details"
                      :key="item"
                      class="flex items-center gap-2 text-xs text-surface-500 dark:text-surface-400"
                    >
                      <i class="pi pi-check text-[10px] text-primary-500" />
                      <span>{{ item }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </template>
          </PrimeCard>
        </div>

        <!-- Banner de Cierre de Pilares -->
        <div
          class="mt-16 rounded-3xl border border-surface-200/70 bg-gradient-to-r from-surface-0 via-primary-50/40 to-surface-0 p-8 text-center shadow-sm sm:p-10 dark:border-surface-800 dark:from-surface-900 dark:via-primary-950/20 dark:to-surface-900"
        >
          <h4 class="text-xl sm:text-2xl font-semibold text-surface-900 dark:text-surface-0">
            Únete a nuestra comunidad y comienza a construir una vida financiera más saludable.
          </h4>
          <p class="mt-2 text-sm text-surface-600 dark:text-surface-300">
            El primer paso es el más importante. Empieza hoy con herramientas sencillas y prácticas.
          </p>
          <div class="mt-6 flex justify-center">
            <PrimeButton
              label="Quiero ser parte"
              icon="pi pi-check-circle"
              severity="primary"
              class="!rounded-full !px-8 !py-3 !text-sm !font-medium"
              @click="scrollTo('contacto')"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== CLIENTES / TESTIMONIOS SECTION ==================== -->
    <section id="clientes" class="relative py-24 sm:py-32 bg-surface-0/60 dark:bg-surface-900/30 transition-colors">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span
            class="inline-flex items-center gap-1.5 rounded-full bg-primary-100/70 px-3 py-1 text-xs font-semibold text-primary-800 dark:bg-primary-950 dark:text-primary-300"
          >
            <i class="pi pi-users text-xs" /> Comunidad Satisfecha
          </span>
          <h2 class="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-surface-900 dark:text-surface-0">
            Historias de personas como tú
          </h2>
          <p class="mt-3 text-base text-surface-600 dark:text-surface-300">
            Descubre cómo MonyMonty ha permitido a familias e independientes ordenar su dinero con calma y seguridad.
          </p>
        </div>

        <testimoniosView />
      </div>
    </section>

    <!-- ==================== CONTACTO SECTION ==================== -->
    <section id="contacto" class="relative py-24 sm:py-32">
      <div class="mx-auto max-w-6xl px-4 sm:px-6">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <!-- Columna Información -->
          <div class="lg:col-span-5">
            <span
              class="inline-flex items-center gap-1.5 rounded-full bg-primary-100/70 px-3 py-1 text-xs font-semibold text-primary-800 dark:bg-primary-950 dark:text-primary-300"
            >
              <i class="pi pi-envelope text-xs" /> Enlaces & Diagnóstico
            </span>
            <h2 class="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-surface-900 dark:text-surface-0">
              Hablemos de tus metas financieras
            </h2>
            <p class="mt-4 text-base text-surface-600 dark:text-surface-300 leading-relaxed">
              ¿Quieres implementar MonyMonty en tu hogar o solicitar una asesoría personalizada? Déjanos un mensaje y te responderemos en
              menos de 24 horas.
            </p>

            <div class="mt-8 space-y-4">
              <div
                class="flex items-center gap-4 rounded-2xl border border-surface-200/60 bg-surface-0 p-4 dark:border-surface-800 dark:bg-surface-900"
              >
                <div
                  class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-950 dark:text-primary-400"
                >
                  <i class="pi pi-envelope text-base" />
                </div>
                <div>
                  <span class="text-xs text-surface-400 uppercase font-medium">Correo Electrónico</span>
                  <p class="text-sm font-semibold text-surface-800 dark:text-surface-100">contacto@monteflor.com</p>
                </div>
              </div>

              <div
                class="flex items-center gap-4 rounded-2xl border border-surface-200/60 bg-surface-0 p-4 dark:border-surface-800 dark:bg-surface-900"
              >
                <div
                  class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-950 dark:text-primary-400"
                >
                  <i class="pi pi-map-marker text-base" />
                </div>
                <div>
                  <span class="text-xs text-surface-400 uppercase font-medium">Ubicación</span>
                  <p class="text-sm font-semibold text-surface-800 dark:text-surface-100">Bucaramanga, Colombia • Cobertura Latam</p>
                </div>
              </div>

              <div
                class="flex items-center gap-4 rounded-2xl border border-surface-200/60 bg-surface-0 p-4 dark:border-surface-800 dark:bg-surface-900"
              >
                <div
                  class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-950 dark:text-primary-400"
                >
                  <i class="pi pi-clock text-base" />
                </div>
                <div>
                  <span class="text-xs text-surface-400 uppercase font-medium">Atención</span>
                  <p class="text-sm font-semibold text-surface-800 dark:text-surface-100">Lunes a Viernes: 8:00 AM – 6:00 PM (COT)</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Columna Formulario -->
          <div class="lg:col-span-7">
            <div
              class="rounded-3xl border border-surface-200/80 bg-surface-0 p-8 shadow-sm sm:p-10 dark:border-surface-800 dark:bg-surface-900"
            >
              <h3 class="text-xl font-bold text-surface-900 dark:text-surface-0">Envíanos un mensaje</h3>
              <p class="mt-1 text-sm text-surface-500 dark:text-surface-400">
                Completa tus datos y seleccionaremos el plan o información más adecuada para ti.
              </p>

              <form @submit.prevent="handleContactSubmit" class="mt-6 space-y-4">
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label class="block text-xs font-semibold uppercase tracking-wider text-surface-600 dark:text-surface-300 mb-1.5">
                      Nombre Completo *
                    </label>
                    <input
                      v-model="contactForm.name"
                      type="text"
                      required
                      placeholder="Ej. Roberto Vargas"
                      class="w-full rounded-xl border border-surface-300 bg-surface-0 px-4 py-2.5 text-sm text-surface-800 placeholder-surface-400 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-surface-700 dark:bg-surface-800 dark:text-surface-100"
                    />
                  </div>

                  <div>
                    <label class="block text-xs font-semibold uppercase tracking-wider text-surface-600 dark:text-surface-300 mb-1.5">
                      Correo Electrónico *
                    </label>
                    <input
                      v-model="contactForm.email"
                      type="email"
                      required
                      placeholder="roberto@ejemplo.com"
                      class="w-full rounded-xl border border-surface-300 bg-surface-0 px-4 py-2.5 text-sm text-surface-800 placeholder-surface-400 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-surface-700 dark:bg-surface-800 dark:text-surface-100"
                    />
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-semibold uppercase tracking-wider text-surface-600 dark:text-surface-300 mb-1.5">
                    ¿En qué área te gustaría enfocarte?
                  </label>
                  <select
                    v-model="contactForm.interest"
                    class="w-full rounded-xl border border-surface-300 bg-surface-0 px-4 py-2.5 text-sm text-surface-800 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-surface-700 dark:bg-surface-800 dark:text-surface-100"
                  >
                    <option value="educacion">Educación Financiera y Hábitos</option>
                    <option value="control">Uso de la Aplicación MonyMonty (Control)</option>
                    <option value="gestion">Asesoría Personalizada y Consolidación de Metas</option>
                    <option value="comunidad">Alianzas o Integración Comunitaria</option>
                  </select>
                </div>

                <div>
                  <label class="block text-xs font-semibold uppercase tracking-wider text-surface-600 dark:text-surface-300 mb-1.5">
                    Mensaje o Consulta
                  </label>
                  <textarea
                    v-model="contactForm.message"
                    rows="4"
                    placeholder="Cuéntanos brevemente sobre tus metas o inquietudes..."
                    class="w-full rounded-xl border border-surface-300 bg-surface-0 px-4 py-2.5 text-sm text-surface-800 placeholder-surface-400 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 dark:border-surface-700 dark:bg-surface-800 dark:text-surface-100 resize-none"
                  />
                </div>

                <div class="pt-2">
                  <PrimeButton
                    type="submit"
                    :label="formSubmitted ? '¡Mensaje Enviado con Éxito!' : 'Enviar Mensaje'"
                    :icon="formSubmitted ? 'pi pi-check' : 'pi pi-send'"
                    iconPos="right"
                    severity="primary"
                    class="w-full !rounded-xl !py-3 !text-sm !font-semibold shadow-sm"
                  />
                </div>

                <p v-if="formSubmitted" class="text-center text-xs font-medium text-primary-600 dark:text-primary-400">
                  ¡Gracias por escribirnos! Un asesor de MonteFlor te contactará en breve.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
