<script setup>
import GithubIcon from "./icons/Github.vue"
const githubProfile = 'https://github.com/sdiricco/'
</script>

<template>
  <div class="footer">
    <p class="border">Simone Di Ricco | 2022</p>
    <a class="social-link" href="githubProfile"><GithubIcon class="social-icon" color="var(--c-text)" /></a>
  </div>
</template>

<style scoped>
.footer {
  max-width: var(--content-width);
  margin: 0 auto;
  text-align: center;
}
.border{
  padding-top: 2rem;
}
.social-link{
  cursor: pointer;
}
.social-icon{
  height: 1.8rem;
}
</style>
