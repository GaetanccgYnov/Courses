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

<script>
import {teams} from "@/assets/js/appTeams.js";

export default {
  name: 'Team',
  data() {
    return {
      team: teams
    }
  }
}
</script>
