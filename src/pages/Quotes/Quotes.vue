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
  props: {
  },
  data: function() {
    return {
      baseUrl: 'https://programming-quotes-api.herokuapp.com/quotes',
      quote: Object,
      similarQuote: Object,
      usedQuotes: [],
      previousAuthor: String,
      allAuthorsQuotes: [],
      rating: 0,
    }
  },
  methods: {
    setRating: function (rating) {
      // Track previous quotes
      this.usedQuotes.push(this.quote);
      this.previousAuthor = this.quote.author;

      // Set the rating
      this.rating = rating;

      console.log('author: ', this.quote.author);
      console.log('previous author: ', this.previousAuthor);

      // Same author?
      if (this.quote.author === this.previousAuthor) {
      // Get all their quotes
        this.$http.get(this.baseUrl).then(res => {
          this.allAuthorsQuotes = res.body.filter(quote => quote.author === this.quote.author);
          console.log('all quotes from this author: ', this.allAuthorsQuotes);
        });
      }

      // Post the vote
      this.$http.post(`${this.baseUrl}/vote`, {quoteId: this.quote.id, newVote: rating});

      // If rated 4 or higher AND the author has multiple quotes
      if (rating >= 4 && this.allAuthorsQuotes.length > 1) {
        console.log('get a similar quote');
      } else if (rating < 4 || rating >= 4 && this.allAuthorsQuotes.length < 1) {
        this.$http.get('https://programming-quotes-api.herokuapp.com/quotes/random').then(res => {
          this.quote = res.body;
        });
      }
    },
  },
  created() {
    console.log('Get a random quote');
    this.$http.get('https://programming-quotes-api.herokuapp.com/quotes/random').then(res => {
      this.quote = res.body;
    });
  },
};
</script>
