<template>
    <section>
        <div class="title">
            <h4>{{ detailList.title }}</h4>
        </div>
        <div class="body" v-html="detailList.content"></div>
    </section>
</template>

<script>
    export default {
        data: function () {
            return {
                detailList: {}
            }
        },
        created: function () {
            this.getDetailList();
        },
        methods: {
            getDetailList: function () {
                console.log(this.$route.params);
                var url = 'http://139.199.192.48:8888/api/getnew/' + this.$route.params.id;
                console.log(url);
                this.$http.get(url).then(function (rep) {
                    if(rep.body.status == 0) {
                        console.log(rep.body.message);
                        this.detailList = rep.body.message[0];
                    }
                })
            }
        }
    }
</script>

<style  lang="less">
    .title {
        margin: 0 auto;
        h4 {
            text-align: center;
            margin-bottom: 20px;
        }
    }
    .body {
        p {
            text-indent: 2em;
        }
        img {
            width: 100%;
        }
    }
</style>