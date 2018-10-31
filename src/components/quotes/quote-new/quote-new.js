export default {
  name: 'quote-new',
  components: {},
  props: [],
  data () {
    return {
        noError: null,
        required: null,
        textarea: null,
        hasMessages: false
    }
  },
  computed: {
      messageClass () {
          return {
              'md-invalid': this.hasMessages
          }
      }
  },
  mounted () {

  },
  methods: {

  }
}
