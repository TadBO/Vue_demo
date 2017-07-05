<template>
    <main>
        <v-header></v-header>
        <router-view></router-view>
        <lg-preview></lg-preview>
        <v-footer></v-footer>
    </main>
</template>

<script>
    export default {
        data: function () {
            return {
                msg: '测试'
            }
        }
    }
</script>

<style  lang="less">

</style>