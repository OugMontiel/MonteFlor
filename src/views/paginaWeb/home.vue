<script>
import logo from "@/assets/img/MonyMontySinFondo3.png";

import headerHomeView from "@/components/web/header.vue";
import FooterView from "@/components/web/footer.vue";
import iniciarSesionView from "@/components/web/iniciarSesionView.vue";

export default {
  name: "Home-",
  data() {
    return {
      logo,
    };
  },
  components: {
    headerHomeView,
    FooterView,
    iniciarSesionView
  },
  methods: {
    irAInicio() {
      this.$router.push('/');
    },

  }
};
</script>

<template>
  <header class="headerHome">
    <div class="login-logo">
      <img :src="logo" alt="Icono de la aplicación" class="logo" @click="irAInicio" />
    </div>

    <headerHomeView />
    <iniciarSesionView />
  </header>

  <main class="main-container">

    <section id="inicio" class="inicio-hero">

      <div class="inicio-content">
        <h1>MonyMonty</h1>
        <p>Una forma inteligente de manejar tus finanzas</p>
        <blockquote>"La riqueza consiste mucho más en disfrutar que en poseer". - Aristóteles</blockquote>
      </div>

    </section>

    <section id="nosotros" class="nosotros">

      <div class="nosotros-content">

        <div class="nosotros-titulo">
          <h2>¿Por qué es importante la educación financiera?</h2>
        </div>

        <div class="nosotros-texto">
          <p>MonyMonty nació de una necesidad personal: la falta de educación financiera en mi familia. Esta situación
            se repite en muchas otras familias colombianas y latinoamericanas. La carencia de conocimientos financieros
            puede limitar nuestras decisiones, llevarnos al endeudamiento y frenar nuestro desarrollo económico.</p>
        </div>

      </div>

    </section>

    <section id="productos" class="producto">

      <h2>¿Qué es MonyMonty?</h2>
      <p>Una solución integral para tu bienestar financiero basada en tres pilares:</p>

      <div class="producto-grid">

        <div class="producto-card">
          <h3><strong>Educación</strong></h3>
          <p>Mejora tus conocimientos en finanzas personales con técnicas y recursos prácticos.</p>
        </div>

        <div class="producto-card">
          <h3><strong>Control</strong></h3>
          <p>Registra, visualiza y analiza tus finanzas personales con nuestra app intuitiva.</p>
        </div>

        <div class="producto-card">
          <h3><strong>Gestión</strong></h3>
          <p>Recibe asesoría personalizada de expertos que te ayudarán a planificar tu futuro financiero.</p>
        </div>

      </div>

      <p class="mensaje-final">Únete a nuestra comunidad y comienza a construir una vida financiera más saludable.</p>
      
    </section>

    <section id="clientes" class="clientes">
      <h2>Clientes</h2>
      <p>Contenido de la sección Clientes.</p>
    </section>

    <section id="contacto" class="contacto">
      <h2>Contacto</h2>
      <p>Contenido de la sección Contacto.</p>
    </section>

    <FooterView />
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap');

* {
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.headerHome {
  position: fixed;
  top: 0;
  width: 100%;
  height: 6em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 0 1.5em;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.login-logo img.logo {
  height: 50px;
  cursor: pointer;
}

/* ------ inicio ------ */

.main-container {
  width: 100%;
  padding-top: 4em;
  background: #f9f9f9;
}

section {
  max-width: 100%;
  padding: 1em 2em;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.inicio-hero {
  background: linear-gradient(135deg, #54b6ff 0%, #4096ee 100%);
  color: white;
  text-align: center;
  padding: 4em 2em;
  border-radius: 0;
  box-shadow: none;
  padding: 200px;
}

.inicio-hero h1 {
  font-size: 4rem;
  margin-bottom: 0.5em;
  color: #ffae2b;
}

.inicio-hero p {
  font-size: 3rem;
  margin-bottom: 1em;
  color: #444;
}

.inicio-hero blockquote {
  font-style: italic;
  font-size: 1.1rem;
  color: #e0e0e0;
}

/* ------ nosotros ------ */

.nosotros-content {
  display: flex;
  flex-wrap: wrap;
  padding: 200px;
  gap: 1.5em;
  margin: 2em 0;
  justify-content: center;
}

.nosotros-titulo h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  color: #333;
}

.nosotros-texto p {
  font-size: 2em;
  line-height: 1.6;
  color: #444;
}

/* ------ producto ------ */

.producto {
  background: linear-gradient(135deg, #54b6ff 0%, #4096ee 100%);
  padding: 200px;
}

.producto-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5em;
  margin: 2em 0;
  justify-content: center;
}

.producto-card {
  flex: 1 1 300px;
  background: #f4f4f4;
  padding: 50px;
  border-radius: 12px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.producto-card:hover {
  transform: translateY(-5px);
}

.producto-card h3 {
  margin-bottom: 0.8em;
  color: #1e88e5;
}

.mensaje-final {
  text-align: center;
  margin-top: 2em;
  font-weight: bold;
  font-size: 1.2rem;
  color: #2e2e2e;
}

/* Responsive */
@media (max-width: 768px) {
  .producto-grid {
    flex-direction: column;
    gap: 1em;
  }

  .hero h1 {
    font-size: 2.3rem;
  }
}
</style>
