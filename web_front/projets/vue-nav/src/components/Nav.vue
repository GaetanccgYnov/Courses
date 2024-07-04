<template>
  <nav>
    <ul class='mymenu'>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/testimonials">Témoignages</router-link></li>
      <li><router-link to="/rates">Rates</router-link></li>
      <li><router-link to="/team">Teams</router-link></li>
    </ul>
  </nav>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps()
</script>
