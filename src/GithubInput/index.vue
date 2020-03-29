<template >
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="username" placeholder="Enter a github username here" />
    <button type="sumbit">SUBMIT</button>
  </form>
</template>

<style scoped src="./style.css"></style>
<script src="./script.js"></script>