<template>
    <section id="productList">
        <div class="list">
            <ul class="goods-list">
                <li class="mui-col-xs-6" v-for="item in productsList">
                    <router-link :to="'/products/productDetails/' + item.id">
                        <div class="mui-card">
                            <div class="mui-card-header mui-card-media" :style="getStyle(item.img_url)"></div>
                            <div class="mui-card-footer">
                                <p>{{ item.title }}</p>
                            </div>
                            <div class="mui-card-content">
                                <p class="price" style="color: #333;">
                                    <span style="color: red">￥{{ item.sell_price }}</span>
                                    <s>￥{{ item.market_price }}</s>
                                </p>
                                <p class="tip">
                                    <span>热卖中</span>
                                    <span>剩余{{ item.stock_quantity }}件</span>
                                </p>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
            <button @click="getProductsList(pageIndex++)" type="button" class="mui-btn mui-btn-primary mui-btn-block mui-btn-outlined">加载更多</button>
        </div>
    </section>
</template>

<script>
    export default {
        data: function () {
            return {
                productsList: [],
                pageIndex: 1
            }
        },
        created: function () {
            this.getProductsList();
        },
        methods: {
            getProductsList: function () {
                var url = 'http://139.199.192.48:8888/api/getgoods?pageindex=' + this.pageIndex;
                this.$http.get(url).then(function (rep) {
                    if(rep.body.status == 0) {
                        this.productsList.push.apply(this.productsList, rep.body.message);

                    }
                })
            },
            getStyle: function (url) {
                return 'height:180px;background-image:url('+ url+');';
            }
        }
    }
</script>

<style scoped lang="less">
   .goods-list {
       list-style: none;
       margin: 0;
       padding: 0;
       width: 100%;
       li {
           float: left;
           /*height: 334px;*/
           p {
               height: 46px;
               margin-bottom: 0px;
           }
       }
   }
   .mui-btn {
       margin: 0 auto;
       width: 95%;
   }

</style>