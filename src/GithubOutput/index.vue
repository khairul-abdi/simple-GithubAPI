<template>
  <div>
    <p v-if="currentUsername == null">Enter a username above to see their Github data</p>
    <p v-else class="result">
      Below are the results for {{ currentUsername }}
      <github-user-data :data="githubData[currentUsername]"></github-user-data>
    </p>
  </div>
</template>

<script src="./script.js"></script>
<style scoped src="./style.css"></style>
