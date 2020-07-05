<template>
<div class="home page">
    <header class="header">
        <full-screen-video title="You're probably here for kitties" subtitle="Wait no actually you're here for quotes" show-button></full-screen-video>
    </header>
</div>
</template>

<script>
import FullScreenVideo from '@/components/FullScreenVideo.vue';

export default {
	name: 'home',
	components: {
		FullScreenVideo
	}
}
</script>

