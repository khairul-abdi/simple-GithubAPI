import bus from '../bus'
import css from './style.css'

export default {
  name: 'GithubInput',
  data() {
    return { username: '' }
  },
  methods: {
    onSubmit(event) {
      if (this.username && this.username !== '') {
        bus.$emit('new-username', this.username)
      }
    }
  }
}