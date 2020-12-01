<template>
    <div>

    <h1>isAvailable</h1>
    <h1 v-if="isAvailable">{{ title }}</h1>
    <h2 v-else>No Title Available</h2>

    <br><hr>
    <h1>If Else </h1>
    <h1 v-if="2 * 2 == 5">{{ title }}</h1>
    <h2 v-else>2 * 2 == 5 else</h2>


    <br><hr>
    <h1>IIf else-if else</h1>
    <h1 v-if="2 * 2 == multiplicationVariable">2 * 2 == multiplicationVariable if</h1>
    <h2 v-else-if="2 * 2 == multiplicationVariable + 1">2 * 2 == multiplicationVariable else-if</h2>
    <h2 v-else>2 * 2 == multiplicationVariable else</h2>
    
    <br><hr>
    <h1>if null</h1>
    <h1 v-if="thirdIsAvailable === null">thirdIsAvailable if</h1>
    <h2 v-else-if="thirdIsAvailable">else-if</h2>
    <h2 v-else>else</h2>

    <hr><br>
    <h1 v-if="thirdIsAvailable == null">something</h1>
    <h1 v-if="thirdIsAvailable === null">something1</h1>

    </div>
</template>

<script>
export default {
    name: 'IfElse',
    data() {
        return {
            isAvailable: false,
            title : "This is the title",

            multiplicationVariable: 3,

            thirdIsAvailable: null
        }
    }
}
</script>