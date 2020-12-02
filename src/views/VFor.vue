<template>
    <div>
        <h1>v-for is used</h1>
        <h3 v-for="hero in heroes" v-bind:key="hero.id">
            {{ hero.id }} {{ hero.name }}
        </h3>

        <div id="bars">
        <!-- Range in Vue is simply: -->
        <h4 v-for="num in 10" v-bind:key="num">
            {{ num }}
        </h4>
        </div>

        <div id="bars">
        <h5 v-for="index in heroq.length" v-bind:key='index'>
            {{index}} {{ heroq[index-1] }}
        </h5>
        </div>
        
        
        <div id="bars">
        <h5 v-for="(value, key) in dc" v-bind:key='key'>
            {{ key }} {{ value }}
        </h5>
        </div>
        
        <div id="bars">
        <h5 v-for="(value, key) in dc1" v-bind:key='key'>
            {{ key }} {{ value.first }}
        </h5>
        </div>

    </div>
</template>

<script>
export default {
    name: "Vfor",
    data() {
        return {
            heroq: "hello",
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
                }
            ],
            dc : {
                hello_key: 'hello',
                world_key: 'world'
            },
            dc1 : [
                { hello_key: 'hello'},
                { world_key: 'world'}
            ]
        }
    }
}
</script>

<style scoped>
</style>