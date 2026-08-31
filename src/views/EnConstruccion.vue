<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8 text-center">
    <!-- Card principal -->
    <PrimeCard class="w-full max-w-md shadow-lg rounded-2xl">
      <template #title>
        🚧 Página en Construcción 🚧
      </template>

      <template #content>
        <p class="text-gray-600 mb-6">
          Estamos trabajando para traerte esta sección muy pronto.
          Gracias por tu paciencia ✨
        </p>

        <!-- Icono o imagen opcional -->
        <img
          src="https://cdn-icons-png.flaticon.com/512/809/809957.png"
          alt="Construcción"
          class="w-32 h-32 mx-auto mb-6 opacity-80"
        />

        <!-- Botón para volver al inicio -->
        <PrimeButton
          label="Volver al inicio"
          icon="pi pi-home"
          class="p-button-success"
          @click="$router.push('/')"
        />
      </template>
    </PrimeCard>
  </div>
</template>
