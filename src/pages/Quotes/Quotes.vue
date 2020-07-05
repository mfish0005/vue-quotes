<template>
  <div class="quotes page">
    <section class="hero is-info is-fullheight">
      <div class="hero-body has-text-centered">
        <div class="container">
          <p class="title is-size-1">{{ quote }}</p>
          <div class="star-block">
            <p class="subtitle is-size-4">Rate this quote</p>
            <star-rating class="is-flex-centered" v-model="rating" @rating-selected="setRating"></star-rating>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "quotes",
  props: {
  },
  data: function() {
    return {
      quote: String,
      rating: 0,
    }
  },
  created() {
    console.log('Get a random quote');
    this.quote = 'This is a random quote';
  },
  methods: {
    setRating: function (rating) {
      this.rating = rating;
      if (rating >= 4) {
        console.log('get a similar quote');
        this.quote = 'similar quote';
      } else {
        console.log('get another random quote');
        this.quote = 'another random quote';
      }
      console.log('user rated the quote a ', this.rating);
    }
  }
};
</script>

<style scoped lang="scss">
.is-flex-centered {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}
</style>
