<script>
import facebook from "@/assets/img/icon-facebook.svg";
import git from "@/assets/img/icon-git.svg";
import instagram from "@/assets/img/icon-instagram.svg";

export default {
  name: "Pie de página -- Web",
  data() {
    return {
      facebook,
      git,
      instagram,
    };
  },
  methods: {
    subscribe() {
      // Lógica para manejar la suscripción
      alert("Gracias por suscribirte!");
    },
  },
};
</script>

<template>
  <!-- pie de página -->
  <footer>
    <h3
      v-motion
      :initial="{opacity: 0, y: 20}"
      :visible-once="{opacity: 1, y: 0, transition: {duration: 500}}"
    >
      ¡Sé parte de esta transformación!
    </h3>
    <div class="pie">
      <div
        class="network"
        v-motion
        :initial="{opacity: 0, y: 20}"
        :visible-once="{opacity: 1, y: 0, transition: {duration: 500, delay: 100}}"
      >
        <h4 class="network-h4">Contactanos</h4>
        <p class="network-p">Síguenos en redes sociales</p>
        <div class="network-card">
          <div class="icon-network">
            <a href="https://facebook.com" aria-label="Facebook">
              <img :src="facebook" alt="Icono de la aplicación" class="network-icon" />
            </a>
          </div>
          <div class="icon-network">
            <a href="https://twitter.com" aria-label="Twitter">
              <img :src="git" alt="Icono de la aplicación" class="network-icon" />
            </a>
          </div>
          <div class="icon-network">
            <a href="https://instagram.com" aria-label="Instagram">
              <img :src="instagram" alt="Icono de la aplicación" class="network-icon" />
            </a>
          </div>
        </div>
      </div>

      <div
        class="paginas"
        v-motion
        :initial="{opacity: 0, y: 20}"
        :visible-once="{opacity: 1, y: 0, transition: {duration: 500, delay: 200}}"
      >
        <h4 class="paginas-h4">Páginas</h4>
        <p class="paginas-p">Puedes encontrar más de nosotros en:</p>

        <ul>
          <li>
            <router-link to="/dashboard">Dashboard</router-link>
          </li>
          <li>
            <router-link to="/NewMov">New Mov</router-link>
          </li>
        </ul>
      </div>

      <div
        class="agenda"
        v-motion
        :initial="{opacity: 0, y: 20}"
        :visible-once="{opacity: 1, y: 0, transition: {duration: 500, delay: 300}}"
      >
        <h4 class="agenda-h4">Agenda tu cita</h4>
        <p class="agenda-p">Si quieres ser parte de nuestra comunidad, agenda tu cita y comienza a transformar tu vida financiera.</p>

        <form class="agenda-formulario" @submit.prevent="subscribe">
          <input class="agenda-input" placeholder="Tu correo electrónico" type="email" required />
          <button class="btn-suscribirse" type="submit">Suscribirse</button>
        </form>
      </div>
    </div>

    <p class="footer-copy">&copy; 2026 MonyMonty</p>
  </footer>
</template>

<style>
footer {
  padding: 3em 1.5em 2em;
  background: var(--color-fondo-nav);
  text-align: center;
}

footer h3 {
  font-size: clamp(1.5rem, 3vw, 2rem);
  margin-bottom: 1rem;
  color: var(--texto-primario);
}

.pie {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  margin: 2.5em 0;
  text-align: left;
}

.pie > div {
  flex: 1 1 260px;
  max-width: 320px;
}

.pie h4 {
  margin-bottom: 0.5em;
  color: var(--texto-primario);
}

.pie p {
  margin: 0.5em 0;
  color: var(--texto-secundario);
}

footer ul {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

footer a {
  color: var(--texto-secundario);
  transition: color 0.2s ease;
}

footer a:hover {
  color: var(--color-acento);
}

footer form {
  display: flex;
  justify-content: flex-start;
  margin-top: 0.75rem;
}

.agenda-input {
  flex: 1;
  padding: 0.65rem 1rem;
  border-radius: 999px 0 0 999px;
  border: 1px solid var(--borde-claro);
  background: var(--color-superficie);
  color: var(--texto-primario);
}

.agenda-input:focus {
  outline: none;
  border-color: var(--color-acento);
}

.network-card {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.icon-network {
  width: 32px;
  transition: transform 0.25s ease;
}

.icon-network:hover {
  transform: translateY(-4px) scale(1.1);
}

.btn-suscribirse {
  background: var(--gradiente-acento);
  color: white;
  padding: 0.65rem 1.4rem;
  border-radius: 0 999px 999px 0;
  font-weight: bold;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.btn-suscribirse:hover {
  transform: translateY(-2px);
  box-shadow: var(--sombra-acento);
}

.footer-copy {
  color: var(--texto-secundario);
  font-size: 0.9rem;
}

/* Extra pequeño: móviles pequeños (xs) */
@media (max-width: 575.98px) {
  .pie {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2rem;
  }

  .network-card {
    justify-content: center;
  }

  footer form {
    justify-content: center;
  }

  .network-p,
  .paginas-p,
  .agenda-p {
    font-size: 13px;
  }

  .icon-network {
    width: 24px;
  }
}
</style>
