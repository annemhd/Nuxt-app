<template>
  <header>
    <h1>Nuxt Application</h1>
  </header>

    <nav>
      <ul>
        <li><NuxtLink to="/">Index</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
      </ul>
    </nav>

  <div>
    <NuxtPage />
  </div>
</template>