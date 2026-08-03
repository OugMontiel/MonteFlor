<script>
import logo from "@/assets/img/MonyMontySinFondo3.png";

export default {
  name: "Header-principal de Monte Flor",
  data() {
    return {
      logo,
    };
  },
  methods: {
    irAMonymonty() {
      this.$router.push('/');
    },

  }

};
</script>

<template>
  <div class="container-button">
      <button class="button-login" @click="irAMonymonty">Iniciar Sesion</button>
      <button class="button-registrar" @click="irAMonymonty">Registrarse</button>
  </div>

</template>

<style>
/* Estilos para tu aplicación */
.container-button {
  display: flex;
  justify-content: center;
}

.button-login {
  background-color: #bcc0c3; /* Azul-gris suave */
  color: #000000;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: var(--texto-tamano-boton);
  
}

.button-login:hover {
  background-color: #a3a6a9;
  transition:
    background-color 0.3s,
    color 0.2s;
}

.button-registrar {
  cursor: pointer;
  color: var(--texto-primario);
  padding: 1em 1em;
  font-size: var(--texto-tamano-boton);
  background: var(--color-fondo-boton-claro);
  border-radius: 5px;
  margin: 0 0.2em;
  transition:
    background-color 0.3s,
    color 0.2s;
}

.button-registrar:hover {
  
  color: var(--texto-claro);
  background: var(--color-acento);

}
</style>
