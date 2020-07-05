<template>
    <section class="hero is-fullheight video">
        <div class="hero-video">
            <video loop muted autoplay>
                <source src="@/assets/videos/persian.mp4" type="video/mp4">
            </video>
        </div>
        <div class="hero-body">
            <div class="container">
                <div class="columns has-text-centered">
                    <div class="column is-12 is-vcentered">
                        <h1 class="title has-text-white">{{ title }}</h1>
                        <h3 class="subtitle has-text-white">{{ subtitle }}</h3>
                        <b-button v-if="showButton"
                        tag="router-link"
                        to="/quotes"
                        type="is-dark">
                        View Quotes
                        </b-button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        title: String,
        subtitle: String,
        showButton: Boolean,
    }
};
</script>