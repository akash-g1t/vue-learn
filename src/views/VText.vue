<template>
    <div>
        <h1>Hello</h1>
        <h2 v-text="count"></h2>

        <div>
            <!-- The span will get replaced -->
            <h2  v-text="count">
                <span>Count is :</span>
            </h2>
        </div>

        <!-- This will stop the re-rendering of the tag, and render only once -->
        <h2  v-once>{{ count }}</h2>
        
        <h1>Here the text is html special character:</h1>
        <h2 v-html="some"></h2>
        <h2 v-text="some"></h2>

    </div>
</template>

<script>

export default {
    name: "VText",
    data() {
        return {
            count: 0,
            some: 'Hello &amp; There!'
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