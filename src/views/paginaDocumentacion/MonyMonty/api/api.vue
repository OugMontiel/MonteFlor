<script>
export default {
  name: "QueEsMonyMonty",
};
</script>

<template>
  <h1>Mony Monty</h1>
  <p>Bienvenido a la sección de Mony Monty.</p>
  <p>Esta es una sección dedicada a la documentación de Mony Monty.</p>

  <div class="mony-monty-description">
    <h3 class="title">¿Qué es MonyMonty?</h3>
    <p class="description">
      Es una plataforma financiera, un gestor de finanzas con todas las herramientas y facilidades para que puedas tener un control total de
      tus finanzas.
    </p>
  </div>

  <div class="folder-structure">
    <h3 class="title">¿Distribución de Carpetas?</h3>
    <p class="intro">La estructura de carpetas del proyecto es la siguiente:</p>
    <pre class="structure">
      ├── DiegoMontiel.json
      ├── index.html
      ├── minExprecion.json
      ├── package.json
      ├── package-lock.json
      ├── public
      │   └── assets
      │       └── icon
      ├── README.md
      ├── server  --- carpeta de backend
      ├── src     --- carpeta de frontend
      └── vite.config.js
    </pre>
  </div>

  <div class="installation-guide">
    <h3 class="title">¿Cómo instalar MonyMonty?</h3>
    <p class="intro">
      En este momento debemos hacerlo clonando el repositorio. Verifica que tengas instalado Node.js y npm en tu máquina con las siguientes
      versiones:
    </p>
    <ul class="requirements">
      <li><strong>Node.js:</strong> v23.8.9</li>
      <li><strong>npm:</strong> 11.2.0</li>
    </ul>
    <p class="steps">Luego, debemos instalar las dependencias con el siguiente comando:</p>
    <pre class="command">npm install</pre>
    <p class="steps">Y por último, debemos correr el proyecto con el siguiente comando:</p>
    <pre class="command">npm run dev</pre>
  </div>
</template>

<style scoped>
.mony-monty-description {
  background-color: #f9f9f9; /* Fondo claro */
  border: 1px solid #e0e0e0; /* Borde sutil */
  border-radius: 8px; /* Bordes redondeados */
  padding: 20px; /* Espaciado interno */
  margin: 20px 0; /* Margen superior e inferior */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Sombra sutil */
}

.title {
  font-size: 1.5em; /* Tamaño de fuente más grande para el título */
  color: #333; /* Color del texto del título */
  margin-bottom: 10px; /* Espacio debajo del título */
}

.description {
  font-size: 1em; /* Tamaño de fuente normal para la descripción */
  color: #555; /* Color del texto de la descripción */
  line-height: 1.6; /* Espaciado entre líneas */
}

.folder-structure {
  background-color: #f9f9f9; /* Fondo claro */
  border: 1px solid #e0e0e0; /* Borde sutil */
  border-radius: 8px; /* Bordes redondeados */
  padding: 20px; /* Espaciado interno */
  margin: 20px 0; /* Margen superior e inferior */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Sombra sutil */
}

.title {
  font-size: 1.5em; /* Tamaño de fuente más grande para el título */
  color: #333; /* Color del texto del título */
  margin-bottom: 10px; /* Espacio debajo del título */
}

.intro {
  font-size: 1em; /* Tamaño de fuente normal para la introducción */
  color: #555; /* Color del texto de la introducción */
  line-height: 1.6; /* Espaciado entre líneas */
  margin-bottom: 10px; /* Espacio debajo de la introducción */
}

.structure {
  background-color: #f1f1f1; /* Fondo claro para la estructura */
  border: 1px solid #ccc; /* Borde sutil */
  border-radius: 4px; /* Bordes redondeados */
  padding: 10px; /* Espaciado interno */
  font-family: monospace; /* Fuente monoespaciada para la estructura */
  overflow-x: auto; /* Permitir desplazamiento horizontal si es necesario */
  white-space: pre; /* Mantener el formato del texto preformateado */
}

.installation-guide {
  background-color: #f9f9f9; /* Fondo claro */
  border: 1px solid #e0e0e0; /* Borde sutil */
  border-radius: 8px; /* Bordes redondeados */
  padding: 20px; /* Espaciado interno */
  margin: 20px 0; /* Margen superior e inferior */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Sombra sutil */
}

.title {
  font-size: 1.5em; /* Tamaño de fuente más grande para el título */
  color: #333; /* Color del texto del título */
  margin-bottom: 10px; /* Espacio debajo del título */
}

.intro {
  font-size: 1em; /* Tamaño de fuente normal para la introducción */
  color: #555; /* Color del texto de la introducción */
  line-height: 1.6; /* Espaciado entre líneas */
  margin-bottom: 10px; /* Espacio debajo de la introducción */
}

.requirements {
  list-style-type: none; /* Sin viñetas */
  padding: 0; /* Sin padding */
  margin: 10px 0; /* Margen superior e inferior */
}

.requirements li {
  background-color: #e0f7fa; /* Fondo claro para los requisitos */
  padding: 10px; /* Espaciado interno */
  border-radius: 4px; /* Bordes redondeados */
  margin-bottom: 5px; /* Espacio entre requisitos */
}

.steps {
  margin: 10px 0; /* Margen superior e inferior */
}

.command {
  background-color: #f1f1f1; /* Fondo claro para el comando */
  border: 1px solid #ccc; /* Borde sutil */
  border-radius: 4px; /* Bordes redondeados */
  padding: 10px; /* Espaciado interno */
  font-family: monospace; /* Fuente monoespaciada para el comando */
  overflow-x: auto; /* Permitir desplazamiento horizontal si es necesario */
}
</style>
