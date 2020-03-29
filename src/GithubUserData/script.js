export default {
  name: 'GithubUserData',
  props: ['data'],
  data() {
    return {}
  },
  computed: {
    date: function () {
      const month = this.data.created_at.substring(5, 7)
      const date = this.data.created_at.substring(8, 10)
      const year = this.data.created_at.substring(0, 4)

      let monthWord = ''
      if (month == 1) monthWord = 'January'
      else if (month == 2) monthWord = 'February'
      else if (month == 3) monthWord = 'march'
      else if (month == 4) monthWord = 'April'
      else if (month == 5) monthWord = 'May'
      else if (month == 6) monthWord = 'June'
      else if (month == 7) monthWord = 'July'
      else if (month == 8) monthWord = 'August'
      else if (month == 9) monthWord = 'September'
      else if (month == 10) monthWord = 'October'
      else if (month == 11) monthWord = 'November'
      else monthWord = 'December'

      return `${date} ${monthWord} ${year}`
    },
    image: function () {
      return this.data.avatar_url
    },
    moreAPI: function () {
      return `https://api.github.com/users/${this.data.login}`
    }
  }
}