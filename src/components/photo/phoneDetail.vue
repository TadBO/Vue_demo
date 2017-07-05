<template>
    <section>
        <mt-cell :title="imgageInfo.title" :label="getLabel()"></mt-cell>
        <ul class="mui-table-view mui-grid-view">
            <li class="mui-table-view-cell mui-media mui-col-xs-4" v-for="item in thumimages">
                <img class="mui-media-object" v-preview="item.src" :src="item.src">
            </li>
        </ul>
        <div class="content" v-html="imgageInfo.content"></div>
    </section>
</template>

<script>
    import moment from 'moment';
    export default {
        data: function () {
            return {
                thumimages: [],
                imgageInfo: {}
            }
        },
        created: function () {
            this.getThumImages();
            this.getImageInfo();
        },
        methods: {
            getThumImages: function () {
                var url = 'http://139.199.192.48:8888/api/getthumimages/' + this.$route.params.id;
                this.$http.get(url).then(function (rep) {
                    if(rep.body.status == 0) {
                        this.thumimages = rep.body.message;
                    }
                    this.thumimages.forEach(function (img, index) {
                        index = index % 16;
                        img.src = '../src/images/' + index + '.jpg';
                    });
                });
            },
            getImageInfo: function () {
                var url = 'http://139.199.192.48:8888/api/getimageInfo/' + this.$route.params.id;
                this.$http.get(url).then(function (rep) {
                    if(rep.body.status == 0) {
                        this.imgageInfo = rep.body.message[0];
                    }
                })
            },
            getLabel: function () {
                return moment(this.imgageInfo.add_time).format('YYYY-MM-DD hh:mm:ss') + '  浏览' + this.imgageInfo.click + '次';
            }
        }
    }
</script>

<style  lang="less">
    /*.mint-cell-text {*/
        /*display: block;*/
        /*text-align: center;*/
    /*}*/
    /*.mint-cell-label {*/
        /*float: right;*/
    /*}*/
    .content {
        margin-top: 10px;
        text-indent: 2em;
        font-size: 14px;
    }
    .mui-table-view {
        margin: 20px 0;
    }
    .lg-preview-wrapper {
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
    .test {
        width: 100%;
        height: 110px;
    }
</style>