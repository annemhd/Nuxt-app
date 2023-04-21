<template>
  <div>

  </div>
</template>
<script setup>
import axios from 'axios'

async function getUser() {
  try {
    const response = await axios.get('http://localhost:8080/API/user');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

</script>