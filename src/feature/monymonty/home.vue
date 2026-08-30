<script setup>
import {ref} from "vue";
import imgNosotros1 from "@/assets/img/nosotros-imagen1.svg";
import mascota from "@/assets/img/MonyMontySinFondo.png";
import testimoniosView from "@/components/web/testimonios/testimoniosView.vue";

defineOptions({
  name: "MonyMontyHome",
});

const pilares = [
  {
    icon: "pi pi-graduation-cap",
    titulo: "Educación",
    texto: "Mejora tus conocimientos en finanzas personales con técnicas y recursos prácticos.",
  },
  {
    icon: "pi pi-chart-line",
    titulo: "Control",
    texto: "Registra, visualiza y analiza tus finanzas personales con nuestra app intuitiva.",
  },
  {
    icon: "pi pi-users",
    titulo: "Gestión",
    texto: "Recibe asesoría personalizada de expertos que te ayudarán a planificar tu futuro financiero.",
  },
];

const contactoInfo = [
  {icon: "pi pi-envelope", titulo: "Correo", valor: "hola@monymonty.com"},
  {icon: "pi pi-map-marker", titulo: "Ubicación", valor: "Bucaramanga, Colombia"},
  {icon: "pi pi-phone", titulo: "Teléfono", valor: "+57 300 000 0000"},
];

const formularioContacto = ref({nombre: "", correo: "", mensaje: ""});
const contactoEnviado = ref(false);

function enviarContacto() {
  contactoEnviado.value = true;
  formularioContacto.value = {nombre: "", correo: "", mensaje: ""};
}
</script>

<template>
  <main class="main-container">
    <section id="inicio" class="inicio-hero">
      <div class="inicio-content">
        <h1 v-motion :initial="{opacity: 0, y: 24}" :enter="{opacity: 1, y: 0, transition: {duration: 600}}">MonyMonty</h1>
        <p v-motion :initial="{opacity: 0, y: 24}" :enter="{opacity: 1, y: 0, transition: {duration: 600, delay: 150}}">
          Una forma inteligente de manejar tus finanzas
        </p>
        <blockquote v-motion :initial="{opacity: 0, y: 24}" :enter="{opacity: 1, y: 0, transition: {duration: 600, delay: 300}}">
          "La riqueza consiste mucho más en disfrutar que en poseer". - Aristóteles
        </blockquote>

        <a
          href="#productos"
          class="btn-cta"
          v-motion
          :initial="{opacity: 0, y: 24}"
          :enter="{opacity: 1, y: 0, transition: {duration: 600, delay: 450}}"
        >
          Comenzar ahora
        </a>
      </div>

      <img :src="mascota" alt="Mascota de MonyMonty" class="inicio-mascota flotando" loading="lazy" />

      <a href="#nosotros" class="scroll-indicador rebotando" aria-label="Ir a la siguiente sección">
        <i class="pi pi-chevron-down"></i>
      </a>
    </section>

    <section id="nosotros" class="nosotros">
      <div class="nosotros-content">
        <div
          class="nosotros-titulo"
          v-motion
          :initial="{opacity: 0, x: -40}"
          :visible-once="{opacity: 1, x: 0, transition: {duration: 600}}"
        >
          <h2>¿Por qué es importante la educación financiera?</h2>
          <img :src="imgNosotros1" alt="Icono de la aplicación" class="titulo-image" />
        </div>

        <div
          class="nosotros-texto"
          v-motion
          :initial="{opacity: 0, x: 40}"
          :visible-once="{opacity: 1, x: 0, transition: {duration: 600, delay: 150}}"
        >
          <h2>Estamos convencidos de que todos podemos crecer.</h2>
          <p>
            MonyMonty nació de una necesidad personal: la falta de educación financiera en mi familia. Esta situación se repite en muchas
            otras familias colombianas y latinoamericanas. La carencia de conocimientos financieros puede limitar nuestras decisiones,
            llevarnos al endeudamiento y frenar nuestro desarrollo económico.
          </p>
        </div>
      </div>
    </section>

    <section id="productos" class="producto">
      <h2 v-motion :initial="{opacity: 0, y: 24}" :visible-once="{opacity: 1, y: 0, transition: {duration: 600}}">¿Qué es MonyMonty?</h2>
      <p v-motion :initial="{opacity: 0, y: 24}" :visible-once="{opacity: 1, y: 0, transition: {duration: 600, delay: 100}}">
        Una solución integral para tu bienestar financiero basada en tres pilares:
      </p>

      <div class="producto-grid">
        <div
          v-for="(pilar, index) in pilares"
          :key="pilar.titulo"
          class="producto-card"
          v-motion
          :initial="{opacity: 0, y: 40}"
          :visible-once="{opacity: 1, y: 0, transition: {duration: 500, delay: index * 150}}"
        >
          <div class="producto-icono">
            <i :class="pilar.icon"></i>
          </div>
          <h3><strong>{{ pilar.titulo }}</strong></h3>
          <p>{{ pilar.texto }}</p>
        </div>
      </div>

      <p
        class="mensaje-final"
        v-motion
        :initial="{opacity: 0, y: 24}"
        :visible-once="{opacity: 1, y: 0, transition: {duration: 600}}"
      >
        Únete a nuestra comunidad y comienza a construir una vida financiera más saludable.
      </p>
    </section>

    <section id="clientes" class="clientes">
      <h2 v-motion :initial="{opacity: 0, y: 24}" :visible-once="{opacity: 1, y: 0, transition: {duration: 600}}">Clientes satisfechos</h2>

      <testimoniosView />
    </section>

    <section id="contacto" class="contacto">
      <h2 v-motion :initial="{opacity: 0, y: 24}" :visible-once="{opacity: 1, y: 0, transition: {duration: 600}}">Contacto</h2>

      <div class="contacto-grid">
        <div
          class="contacto-info"
          v-motion
          :initial="{opacity: 0, x: -40}"
          :visible-once="{opacity: 1, x: 0, transition: {duration: 600}}"
        >
          <p class="contacto-intro">
            ¿Tienes preguntas o quieres saber más sobre MonyMonty? Escríbenos, nos encantará ayudarte a comenzar tu camino hacia el
            bienestar financiero.
          </p>

          <ul class="contacto-lista">
            <li v-for="dato in contactoInfo" :key="dato.titulo">
              <i :class="dato.icon"></i>
              <div>
                <h4>{{ dato.titulo }}</h4>
                <p>{{ dato.valor }}</p>
              </div>
            </li>
          </ul>
        </div>

        <form
          class="contacto-formulario"
          v-motion
          :initial="{opacity: 0, x: 40}"
          :visible-once="{opacity: 1, x: 0, transition: {duration: 600, delay: 150}}"
          @submit.prevent="enviarContacto"
        >
          <label>
            Nombre
            <input v-model="formularioContacto.nombre" type="text" placeholder="Tu nombre" required />
          </label>

          <label>
            Correo electrónico
            <input v-model="formularioContacto.correo" type="email" placeholder="tucorreo@ejemplo.com" required />
          </label>

          <label>
            Mensaje
            <textarea v-model="formularioContacto.mensaje" rows="4" placeholder="Cuéntanos en qué podemos ayudarte" required></textarea>
          </label>

          <button type="submit" class="btn-cta btn-cta-formulario">Enviar mensaje</button>

          <p v-if="contactoEnviado" class="contacto-confirmacion">¡Gracias! Te responderemos muy pronto.</p>
        </form>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* ------ inicio ------ */

.main-container {
  width: 100%;
  background: var(--color-fondo);
}

section {
  max-width: 100%;
  padding: 4rem 2rem;
  background: var(--color-superficie);
}

.inicio-hero {
  position: relative;
  background-image: linear-gradient(160deg, rgba(20, 12, 8, 0.65) 0%, rgba(242, 92, 47, 0.55) 100%), url("@/assets/img/fondo-inicio.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  color: white;
  text-align: center;
  padding: 8rem 2rem 6rem;
  border-radius: 0;
  box-shadow: none;
  overflow: hidden;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.inicio-content {
  position: relative;
  z-index: 2;
  max-width: 720px;
  margin: 0 auto;
}

.inicio-hero h1 {
  font-size: clamp(2.5rem, 6vw, 4rem);
  margin-bottom: 0.5em;
  color: #ffae2b;
}

.inicio-hero p {
  font-size: clamp(1.25rem, 3vw, 2rem);
  margin-bottom: 1em;
  color: #ffffff;
}

.inicio-hero blockquote {
  font-style: italic;
  font-size: 1.1rem;
  color: #e0e0e0;
}

.btn-cta {
  display: inline-block;
  margin-top: 2rem;
  padding: 0.9rem 2.2rem;
  border-radius: 999px;
  background: var(--gradiente-acento);
  color: #ffffff;
  font-weight: 600;
  box-shadow: var(--sombra-acento);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.btn-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 36px rgba(242, 92, 47, 0.4);
}

.inicio-mascota {
  position: absolute;
  right: 4%;
  bottom: 0;
  width: min(260px, 22vw);
  z-index: 1;
  pointer-events: none;
  filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.35));
  display: none;
}

.scroll-indicador {
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  color: #ffffff;
  font-size: 1.5rem;
  z-index: 2;
}

/* ------ nosotros ------ */

.nosotros-content {
  display: flex;
  flex-wrap: wrap;
  padding: 3rem 1rem;
  gap: 2rem;
  margin: 1em 0;
  justify-content: center;
  align-items: center;
}

.nosotros-titulo,
.nosotros-texto {
  flex: 1 1 320px;
}

.nosotros-titulo h2 {
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  margin-bottom: 1rem;
  text-align: center;
  color: var(--texto-primario);
}

.titulo-image {
  height: 260px;
}

.nosotros-texto h2 {
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-align: justify;
  margin-bottom: 1.25rem;
  color: var(--texto-primario);
}

.nosotros-texto p {
  font-size: 1.15rem;
  line-height: 1.6;
  text-align: justify;
  color: var(--texto-secundario);
}

/* ------ producto ------ */

.producto {
  background: linear-gradient(135deg, #ffd154 0%, #b7b9b4 100%);
  padding: 5rem 2rem;
}

.producto h2 {
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

.producto > p {
  font-size: 1.35rem;
}

.producto-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5em;
  margin: 2.5em 0;
  justify-content: center;
}

.producto-card {
  flex: 1 1 300px;
  max-width: 340px;
  background: var(--color-superficie);
  padding: 2.5rem 2rem;
  border-radius: var(--borde-radio-lg);
  box-shadow: var(--sombra-md);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.producto-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--sombra-acento);
}

.producto-icono {
  width: 3.25rem;
  height: 3.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: var(--gradiente-acento);
  color: #ffffff;
  font-size: 1.4rem;
  margin-bottom: 1.25rem;
}

.producto-card h3 {
  font-size: 1.5rem;
  margin-bottom: 0.6em;
  color: var(--color-acento-fuerte);
}

.producto-card p {
  font-size: 1.05rem;
  text-align: left;
  color: var(--texto-secundario);
}

.mensaje-final {
  text-align: center;
  margin-top: 2em;
  font-weight: bold;
  font-size: 1.4rem;
  color: var(--texto-primario);
}

/* ------ clientes ------ */

.clientes h2 {
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-align: center;
  margin: 0 0 1.5rem;
  padding: 10px;
  color: var(--texto-primario);
}

/* ------ contacto ------ */

.contacto h2 {
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-align: center;
  margin-bottom: 2.5rem;
  color: var(--texto-primario);
}

.contacto-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  max-width: 1100px;
  margin: 0 auto;
}

.contacto-info,
.contacto-formulario {
  flex: 1 1 380px;
}

.contacto-intro {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--texto-secundario);
  margin-bottom: 2rem;
}

.contacto-lista {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.contacto-lista li {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.contacto-lista i {
  width: 2.75rem;
  height: 2.75rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: var(--color-fondo-hover);
  color: var(--color-acento);
  font-size: 1.15rem;
}

.contacto-lista h4 {
  color: var(--texto-primario);
  margin-bottom: 0.15rem;
}

.contacto-lista p {
  color: var(--texto-secundario);
}

.contacto-formulario {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  background: var(--color-superficie);
  padding: 2rem;
  border-radius: var(--borde-radio-lg);
  box-shadow: var(--sombra-md);
}

.contacto-formulario label {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--texto-primario);
}

.contacto-formulario input,
.contacto-formulario textarea {
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  padding: 0.75rem 1rem;
  border-radius: var(--borde-radio-sm);
  border: 1px solid var(--borde-claro);
  background: var(--color-fondo);
  color: var(--texto-primario);
  resize: vertical;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.contacto-formulario input:focus,
.contacto-formulario textarea:focus {
  outline: none;
  border-color: var(--color-acento);
  box-shadow: 0 0 0 3px rgba(242, 92, 47, 0.15);
}

.btn-cta-formulario {
  border: none;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 0.25rem;
}

.contacto-confirmacion {
  color: var(--color-acento-fuerte);
  font-weight: 600;
  text-align: center;
}

/* Responsive */
@media (min-width: 768px) {
  .inicio-mascota {
    display: block;
  }
}

@media (max-width: 575.98px) {
  section {
    max-width: 100%;
    padding: 2.5rem 1.25rem;
  }

  .inicio-hero {
    padding: 6rem 1.25rem 4rem;
    min-height: 80vh;
  }

  .producto,
  .contacto-grid {
    padding: 2.5rem 1.25rem;
  }

  .contacto-grid {
    padding: 0;
  }
}
</style>
