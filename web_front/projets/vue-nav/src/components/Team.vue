<template>
  <main>
    <div class="wrapper">
      <h1>Our Team</h1>
      <div class="team">
        <div class="team_member" v-for="member in team" :key="member.firstName">
          <div class="team_img">
            <img :src="member.profilePic" :alt="member.firstName + '_image'" />
          </div>
          <h3>{{ member.firstName }}</h3>
          <p class="role">{{ member.jobTitle }}</p>
          <p>{{ member.verbatim }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const team = ref([
  {
    firstName: 'John',
    jobTitle: 'CEO',
    profilePic: '/profil01.jpg',
    verbatim: 'John is the CEO of our company. He is a great leader and has a vision for the future.'
  },
  {
    firstName: 'Jane',
    jobTitle: 'CTO',
    profilePic: '/profil02.jpg',
    verbatim: 'Jane is the CTO of our company. She is a great leader and has a vision for the future.'
  },
  {
    firstName: 'Doe',
    jobTitle: 'CFO',
    profilePic: '/profil03.jpg',
    verbatim: 'Doe is the CFO of our company. He is a great leader and has a vision for the future.'
  }
])
</script>
