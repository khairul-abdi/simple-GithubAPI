<template>
  <div v-if="data">
    <table class="container">
      <tr>
        <td rowspan="5" class="photo">
          <img :src="image" class="image" />
        </td>
        <td>Name</td>
        <td v-if="data.name">{{ data.name }}</td>
        <td v-else class="no">No Name</td>
      </tr>
      <tr>
        <td>username</td>
        <td>{{ data.login }}</td>
      </tr>
      <tr>
        <td>Date created</td>
        <td>{{ date }}</td>
      </tr>
      <tr>
        <td>Company</td>
        <td v-if="data.company">{{ data.company }}</td>
        <td v-else class="no">No Company</td>
      </tr>
      <tr>
        <td>Repositories</td>
        <td>{{ data.public_repos }}</td>
      </tr>
      <tr>
        <td rowspan="2" class="photo bio">{{ data.bio }}</td>
        <td>Location</td>
        <td v-if="data.location">{{ data.location }}</td>
        <td v-else class="no">No Location</td>
      </tr>
      <tr>
        <td>Website</td>
        <td v-if="data.blog">
          <a :href="data.blog">{{ data.blog }}</a>
        </td>
        <td v-else class="no">No Blog</td>
      </tr>
    </table>
    <a :href="moreAPI" target="_blank">
      <button class="more-api">Visit More Github API from {{ data.login }}</button>
    </a>
  </div>
</template>

<script src="./script.js"></script>
<style scoped src="./style.css"></style>