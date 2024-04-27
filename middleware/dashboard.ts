export default defineNuxtRouteMiddleware((to, from) => {
  const authToken = localStorage.getItem('jwt_token');
    
    if (authToken) {
      return navigateTo('/dashboard')
    }
})