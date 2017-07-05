<template>
    <section>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in list">
                <a :href="item.url">
                    <img :src="item.img" alt="">
                </a>
            </mt-swipe-item>
        </mt-swipe>
    </section>
</template>

<script>
    export default {
        props: ['list']
    }
</script>

<style scoped lang="less">
    .mint-swipe {
        height: 230px;
        a {
            display: block;
            img {
                width: 100%;
            }
        }
    }
</style>