<template>
    <section>
        <v-swipe :list="list"></v-swipe>
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 "><router-link to="news/newsList">
                    <span class="mui-icon mui-icon-extra mui-icon-extra-order"></span>
                    <div class="mui-media-body">新闻列表</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 "><router-link to="photo/photoList">
                    <span class="mui-icon mui-icon-image"></span>
                    <div class="mui-media-body">图片分享</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 "><a href="#">
                    <span class="mui-icon mui-icon-extra mui-icon-extra-like"></span>
                    <div class="mui-media-body">赞一赞</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 "><a href="#">
                    <span class="mui-icon mui-icon-search"></span>
                    <div class="mui-media-body">搜一搜</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 "><a href="#">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">联系我们</div></a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 "><a href="#">
                    <span class="mui-icon mui-icon-info"></span>
                    <div class="mui-media-body">关于</div></a></li>
            </ul>
        </div>
    </section>
</template>

<script>
    import swipe from '../base/swipe.vue';
    export default {
        data: function () {
            return {
                list: []
            }
        },
        created: function () {
            this.getList();
        },
        methods: {
            getList: function () {
                var url = 'http://139.199.192.48:8888/api/getlunbo';
                this.$http.get(url).then(function (rep) {
                    if(rep.body.status == 0) {
                        this.list = rep.body.message;
                    }
                })
            }
        },
        components: {
            'v-swipe': swipe
        }
    }
</script>

<style scoped lang="less">

</style>