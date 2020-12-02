<template>
    <div>
        <h1>New VBind</h1>
        <input type="text" v-model="binded_text">
        <p>{{ binded_text }}</p>
        <br><hr>
        <input type="text" v-model.lazy="binded_text1">
        <p>{{ binded_text1 }}</p>
        <br><hr>
        <input type="text" v-model.trim="binded_text2">
        <p>{{ binded_text2 }}</p>
        <br><hr>
        <input type="text" v-model.number="binded_text3">
        <p>{{ binded_text3 }}</p>
    </div>
</template>

<script>
export default {
    name: "VBind",
    data() {
        return {
            binded_text: '',
            binded_text1: '',
            binded_text2: '',
            binded_text3: '',
        }
    }
}
</script>