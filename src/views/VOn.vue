<template>
    <div>
        <h2>With Two variables i.e. title and msg</h2>
        <input type="text" v-model="title">
        <h3 v-text="msg"></h3>
        <button v-on:click="displayTitle">Click</button>
        <br>
        <hr>
        <h2>With one variable and on id </h2>
        <input type="text" id='title'>
        <h3 v-text="title1"></h3>
        <button v-on:click="displayTitle1">Click</button>
        
        <br>
        <hr>
        <h2>v-on:click="title3 = 'no no no!'"</h2>
        <input type="text" v-model="title3">
        <button v-on:click="title3 = 'no no no!'">Click</button>
    </div>
</template>

<script>
export default {
    name: 'VOn',
    data() {
        return {
            title: '',
            msg: null,
            title1: '',
            title3: ''
        }
    },
    methods: {
        displayTitle() {
            if (this.title != '') {
                this.msg = 'The Entered Title is ' + this.title;
            }
        },

        displayTitle1() {
            const title = document.getElementById('title').value
            if (title != '') {
                this.title1 = 'The Entered Title is ' + title;
            }
        }
    }
}
</script>