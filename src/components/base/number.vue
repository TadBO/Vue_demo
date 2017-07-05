<template>
    <div class="mui-numbox">
        <button class="mui-btn mui-btn-numbox-minus" type="button" @click="subtrac()">-</button>
        <input class="mui-input-numbox" type="number" v-model="numbers">
        <button class="mui-btn mui-btn-numbox-plus" type="button" @click="add()">+</button>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                numbers: 0,
                id: null
            }
        },
        created: function () {
            this.numbers = this.initVal;
            this.id = this.initId;
        },
        props: ['initVal', 'initId'],
        methods: {
            subtrac: function () {
                if(this.numbers > 0) {
                    this.numbers--;
                }
            },
            add: function () {
                this.numbers++;
            }
        },
        updated: function () {
            this.$emit('productNum', parseInt(this.numbers), this.id);
        }
    }
</script>

<style>

</style>