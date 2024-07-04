<template>
    <main>
      <div class="testimonials">
        <div v-for="testimonial in testimonials" :key="testimonial.name" class="card" :class="{'card--bg-purple': testimonial.name === 'Daniel Clifford', 'card--bg-gray-blue': testimonial.name === 'Jonathan Walters'}">
          <header class="card__header">
            <img :src="testimonial.img" class="card__img" :alt="testimonial.name" />
            <div>
              <h3>{{ testimonial.name }}</h3>
              <p>{{ testimonial.title }}</p>
            </div>
          </header>
          <p class="card__lead">
            {{ testimonial.lead }}
          </p>
          <p class="card__quote">
            {{ testimonial.quote }}
          </p>
        </div>
      </div>
    </main>
</template>

<script setup>
import { ref } from 'vue'

const testimonials = ref([
  {
    name: 'Daniel Clifford',
    title: 'Verified Graduate',
    img: '/image-daniel.jpg',
    lead:
      "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny's worth.",
    quote:
      "I was an EMT for many years before I joined the bootcamp. I've been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I've successfully switched careers, working as a Software Engineer at a VR startup."
  },
  {
    name: 'Jonathan Walters',
    title: 'Verified Graduate',
    img: '/image-jonathan.jpg',
    lead: 'The team was very supportive and kept me motivated',
    quote:
      "I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I've made in myself."
  }
])
</script>
