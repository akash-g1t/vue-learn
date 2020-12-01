<template>
    <div>
        <h1>v-for is used</h1>
        <h3 v-for="hero in heroes" v-bind:key="hero.id">
            {{ hero.id }} {{ hero.name }}
        </h3>
    </div>
</template>

<script>
export default {
    name: "Vfor",
    data() {
        return {
            heroes: [
                {
                    id: 1,
                    name: "Batman"
                },
                {
                    id: 2,
                    name: "Superman"
                },
                {
                    id: 3,
                    name: "Hanuman"
                },
            ]
        }
    }
}
</script>