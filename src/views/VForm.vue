<template>
    <div>
        <h1>Form</h1>
        <form @submit="formSubmit">
        <!-- OR -->
        <!-- <form @submit.prevent="formSubmit"> -->
        <!-- OR -->
        <!-- <form v-on:submit="formSubmit"> -->
            <input type="text" v-model="title" placeholder="Add Hero...">
            <button type="submit">Submit</button>
        </form>
        
        <form @submit="
            heroes.push(title1);
            title1 = '';
        ">
            <input type="text" v-model="title1" placeholder="Add Hero...">
            <button type="submit">Submit</button>
        </form>

        <table>
            <tr>
                <th>Heroes:</th>
            </tr>
            <tr v-for="hero in heroes" v-bind:key='hero'>
                <td>{{ hero }}</td>
            </tr>
        </table>

    </div>
</template>

<script>
export default {
    name: "VForm",
    data() {
        return {
            title: '',
            title1: '',
            heroes: [
                'Superman',
                'Batman',
                'Spiderman',
                'Hanuman'
            ]
        }
    },
    methods: {
        formSubmit() {
            // this.heroes = [...this.heroes, this.title]
            this.heroes.push(this.title)
            this.title = ''
        }
    }
}
</script>