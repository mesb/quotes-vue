import QuoteComponent from '../quote/index'
import axios from 'axios';

export default {

  name: 'quote-list',
  components: { QuoteComponent },
  props: [],
  data () {
    return {
        quotes: []
    }
  },
  computed: {

  },
  mounted () {
      this.fetchQuotes();
  },
  methods: {
      fetchQuotes: function () {
          const vm = this;
          var url = 'http://quotos-1322.appspot.com/list';
          axios.get(url)
              .then(function (res) {
                  vm.quotes = res.data;
                  // console.log('result is: ', vm.quotes);
              });
      }
  }
}
