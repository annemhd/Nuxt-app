export default defineNuxtRouteMiddleware((to, from) => {
  const authToken = localStorage.getItem('TOKEN');
    
    if (authToken) {
      return navigateTo('/dashboard')
    }
})