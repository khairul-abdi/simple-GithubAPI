<template>
  <div v-if="data">
    <h4>{{ data.name }}</h4>
    <p>{{ data.company }}</p>
    <p>Number of repos: {{ data.public_repos }}</p>
    <img :src="result" alt />
    <!-- <img :src="picture" /> -->
  </div>
</template>

<script src="./script.js"></script>
<style scoped src="./style.css"></style>
