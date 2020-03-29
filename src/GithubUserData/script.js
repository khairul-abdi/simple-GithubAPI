export default {
  name: 'GithubUserData',
  props: ['data'],
  data() {
    return {}
  },
  computed: {
    result: function () {
      return `${this.data.avatar_url.substring(0, this.data.avatar_url.length - 3)}s=200`
    },
  }
}