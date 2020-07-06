<template>
    <section class="hero is-info is-fullheight">
      <div class="hero-body has-text-centered">
        <div class="container">
          <div class="columns">
            <div class="column is-12">
              <p class="title is-size-1">{{ quote.en }}</p>
              <p class="subtitle is-size-3">- {{ quote.author }}</p>
            </div>
          </div>

          <div class="star-block">
            <p class="is-size-4">Rate this quote</p>
            <star-rating class="is-flex-centered" v-model="rating" @rating-selected="setRating"></star-rating>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: "quotes",
  props: {
  },
  data: function() {
    return {
      baseUrl: 'https://programming-quotes-api.herokuapp.com/quotes',
      quote: Object,
      similarQuote: Object,
      usedQuotes: [],
      allAuthorsQuotes: [],
      rating: 0,
    }
  },
  methods: {
    setRating: function (rating) {
      // Set the rating
      this.rating = rating;

      // Post the vote
      this.$http.post(`${this.baseUrl}/vote`, {quoteId: this.quote.id, newVote: rating});

      // Get all the author's quotes
      this.$http.get(this.baseUrl).then(res => {
        this.allAuthorsQuotes = res.body.filter(quote => quote.author === this.quote.author);
        console.log('starting all quotes: ', this.allAuthorsQuotes);
      });

      // If rated 4 or higher AND the author has multiple quotes
      if (rating >= 4 && this.allAuthorsQuotes.length > 0) {
        // TODO: Filter allAuthorsQuotes down into a single UNUSED quote and assign it to this.quotes
        // Probably do that by removing any quote from allAuthorsQuotes that is also in usedQuotes
        // this.allAuthorsQuotes = this.allAuthorsQuotes.filter(el => !this.usedQuotes.includes(el));
        // console.log('ALL QUOTES: ', this.allAuthorsQuotes);
        // console.log('REMAINING QUOTES: ', remainingQuotes);

      } else {
        this.$http.get('https://programming-quotes-api.herokuapp.com/quotes/random').then(res => {
          this.quote = res.body;
          this.usedQuotes.push(this.quote);
        });
      }
    },
  },
  created() {
    console.log('Get a random quote');
    this.$http.get('https://programming-quotes-api.herokuapp.com/quotes/random').then(res => {
      this.quote = res.body;
      console.log('FIRST QUOTE: ', this.quote);
      this.usedQuotes.push(this.quote);
    });
  },
};
</script>

<style scoped lang="scss">
.is-flex-centered {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}
</style>
