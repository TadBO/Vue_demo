<template>
    <section>
        <div class="nav">
            <ul>
                <li><a href="#" @click.prevent="getImgList()">全部</a></li>
                <li v-for="item in imgCategory">
                    <a href="#" @click.prevent="getImgList(item.id)">{{ item.title }}</a>
                </li>
            </ul>
        </div>
        <div class="detail" v-for="item in imgList">
            <a :href="'#/photo/detail/' + item.id">
                <div class="mui-card">
                    <!--<div class="mui-card-header mui-card-media" v-bind="{style:'height:40vw;background-image:url(' + item.img_url + ')'}"></div>-->
                    <div>
                        <img v-lazy="item.img_url">
                    </div>
                    <div class="mui-card-content">
                        <div class="mui-card-content-inner">
                            <p>{{ item.title }}</p>
                            <p style="color: #333;">{{ item.zhaiyao }}</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </section>
</template>

<script>
    export default {
        data: function () {
            return {
                imgCategory: [],
                imgList: []
            }
        },
        created: function () {
            this.getImgCategory();
            this.getImgList();
        },
        methods: {
            getImgCategory: function () {
                var url = 'http://139.199.192.48:8888/api/getImgCategory';
                this.$http.get(url).then(function (rep) {
                    if(rep.body.status == 0) {
                        this.imgCategory = rep.body.message;
                    }
                });
            },
            getImgList: function (id) {
                var id = id || 0,
                    url = 'http://139.199.192.48:8888/api/getimages/' + id;
                this.$http.get(url).then(function (rep) {
                    if(rep.body.status == 0) {
                        this.imgList = rep.body.message;
                    }
                  this.imgList.forEach(function (photo, index) {
                        index = index % 16;
                        photo.img_url = '../src/images/' + index + '.jpg';
                    });
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .nav {
        background-color: #fff;
        margin: 0 10px;
        border-radius: 4px;
        ul {
            list-style: none;
            padding:2px 2px;
            overflow: hidden;
            li {
                float: left;
                margin:2px 4px;
                font-size: 12px;
            }
        }
    }
    .detail {
        .mui-card {
            img {
                width: 100%;
            }
        }
    }
</style>