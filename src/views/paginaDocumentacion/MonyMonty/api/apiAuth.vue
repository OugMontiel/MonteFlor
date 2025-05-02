<template>
  <div class="api-auth">
    <p>
      Este componente se encarga de la autenticación utilizando Express, express-session y Passport. La ruta principal de autenticación es
      <strong>'/auth'</strong>.
    </p>

    <h2>Rutas de Autenticación</h2>
    <ul>
      <li>
        <strong>/auth/check</strong>: Verifica si el usuario está autenticado. Comprueba si el usuario tiene una sesión activa. Si la tiene,
        responde con <code>true</code>; de lo contrario, responde con un error 401 (no autorizado).

        <h3>Ejemplo de Petición con Fetch</h3>
        <pre>
          <code>
// Ejemplo de validación de sesión con Fetch
fetch('/auth/check', {
  method: 'GET',
  credentials: 'include', // Asegúrate de incluir las cookies de sesión
})
.then(response => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('No autenticado');
})
.then(data => {
  console.log('Estado de autenticación:', data.authenticated);
  if (data.authenticated) {
    console.log('Token de sesión:', data.token);
    // Aquí puedes redirigir al usuario o realizar otras acciones
  }
})
.catch(error => {
  console.error('Error:', error);
});
          </code>
        </pre>

        <h3>Ejemplo de Petición con Axios</h3>
        <pre>
          <code>
// Ejemplo de validación de sesión con Axios
axios.get('/auth/check', { withCredentials: true }) // Asegúrate de incluir las cookies de sesión
  .then(response => {
    console.log('Estado de autenticación:', response.data.authenticated);
    if (response.data.authenticated) {
      console.log('Token de sesión:', response.data.token);
      // Aquí puedes redirigir al usuario o realizar otras acciones
    }
  })
  .catch(error => {
    console.error('Error:', error.response ? error.response.data : error.message);
  });
          </code>
        </pre>
      </li>

      <li>
        <strong>/auth/login</strong>: Realiza el login del usuario. Valida las credenciales (email y password). Si existen, busca el usuario
        en la base de datos y verifica si la contraseña es correcta. Luego, crea el token de sesión y responde con un código 201. Si las
        credenciales son correctas, redirige a la página de inicio; de lo contrario, redirige a la página de login.

        <h3>Ejemplo de Petición con Fetch</h3>
        <pre>
          <code>
// Ejemplo de login
fetch('/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'usuario@example.com',
    password: 'tu_contraseña',
  }),
})
.then(response => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('Error en el login');
})
.then(data => {
  console.log('Login exitoso:', data);
  // Redirigir a la página de inicio
})
.catch(error => {
  console.error('Error:', error);
});
          </code>
        </pre>
      </li>

      <li>
        <strong>/auth/google</strong>: Permite el login con Google a través de Passport. Una vez autenticado, el usuario debe volver a usar
        este método para acceder a la misma cuenta. Si el usuario es autenticado correctamente, redirige a la página de inicio; si no,
        redirige a la página de login.
      </li>

      <li>
        <strong>/auth/github</strong>: Permite el login con GitHub a través de Passport. Al igual que con Google, el usuario debe volver a
        usar este método para acceder a la misma cuenta. Si el usuario es autenticado correctamente, redirige a la página de inicio; si no,
        redirige a la página de login.
      </li>

      <li>
        <strong>/auth/discord</strong>: Permite el login con Discord a través de Passport. El usuario debe volver a usar este método para
        acceder a la misma cuenta. Si el usuario es autenticado correctamente, redirige a la página de inicio; si no, red irige a la página
        de login.
      </li>

      <li>
        <strong>/auth/logout</strong>: Realiza el logout del usuario y redirige a la página principal ('/').

        <h3>Ejemplo con JavaScript usando fetch</h3>
        <pre>
          <code>
fetch('/auth/logout', {
  method: 'GET',
  credentials: 'include' // Para incluir las cookies y cerrar sesión correctamente
})
.then(response => {
  if (response.redirected) {
    // Si el servidor respondió con redirect, redirigimos manualmente al cliente
    window.location.href = response.url;
  } else {
    // En caso de que no haya redirección, puedes manejar cualquier otra lógica aquí
    console.log('Sesión cerrada sin redirección');
  }
})
.catch(error => {
  console.error('Error al cerrar sesión:', error);
});
          </code>
        </pre>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* General container styling */
.api-auth {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f9f9f9;
  padding: 1em 1.5em;
  border-radius: 8px;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.1);
}

/* Paragraph styling */
.api-auth p {
  font-size: 1rem;
}

/* Headings styling */
.api-auth h2 {
  color: #2c3e50;
  font-size: 1.8rem;
  margin-bottom: 1em ;
  border-bottom: 2px solid #3498db;
  font-weight: 700;
}
.api-auth h3 {
  color: #34495e;
  font-size: 1.3rem; 
  font-weight: 600;
}

/* List styling */
.api-auth ul {
  list-style-type: disc;
  margin-left: .8em;
}

.api-auth li {
  margin-bottom: 22px;
  font-size: 1rem;
}

/* Strong emphasis */
.api-auth strong {
  color: #2980b9;
  font-weight: 700;
}

/* Inline code styling */
.api-auth code { 
  padding: 2px 6px;
  font-family: "Courier New", Courier, monospace;
  font-size: 0.95rem;
  border-radius: 4px;
}

/* Preformatted code block styling */
.api-auth pre {
  background-color: #2d2d2d;
  color: #f8f8f2;
  padding: 14px 20px;
  border-radius: 8px;
  overflow-x: auto;
  font-family: "Source Code Pro", monospace, "Courier New", Courier;
  font-size: 0.9rem;
  box-shadow: inset 0 0 5px #000000;
  margin-top: 10px;
  margin-bottom: 15px;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
