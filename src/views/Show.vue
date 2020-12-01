<template>
    <div>
        <h1 v-show="isAvailable">Show with display: block</h1>
        <h2 v-if="!isAvailable">Do not show with display: none</h2>

        <h3 v-html="title"></h3>

        <h3 v-show="!isAvailable" v-html="count"></h3>
        <h3 v-show="toShow">Showing at 10 via v-show</h3>
        <h3 v-if="toShow">Showing at 10 via v-if</h3>
    </div>
</template>

<script>
export default {
    name: "Show",

    data() {
        return {
            isAvailable: false,
            title: "Almighty Push!",

            count: 0,
            toShow: false
        }
    },

    mounted() {
        setInterval(() => {
            this.count++;
            if (this.count == 10) {
                this.toShow = true
            }
        }, 1000);
    }
}
</script>