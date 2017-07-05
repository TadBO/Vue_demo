<template>
    <section>
        <v-swipe :list="swipeDatas"></v-swipe>
        <div class="mui-card">
            <div class="mui-card-header">{{ productInfo.title }}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <span>市场价:</span><s>￥{{ productInfo.market_price }}</s> <span>销售价</span> <em style="font-size: 16px;color: red;">￥{{ productInfo.sell_price }}</em>
                    <div class="buyNum">
                        <span>购买数量:</span>
                        <!--<div class="mui-numbox">-->
                            <!--<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>-->
                            <!--<input class="mui-input-numbox" type="number">-->
                            <!--<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>-->
                        <!--</div>-->
                        <v-numberBox :initVal="buyNum" @productNum="getBuyNum"></v-numberBox>
                    </div>
                    <button type="button" class="mui-btn mui-btn-primary">
                        立即购买
                    </button>
                    <button @click="addShopCart(productInfo.id)" type="button" class="mui-btn mui-btn-danger">
                        加入购物车
                    </button>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                   <p class="params">商品货号：{{ productInfo.goods_no }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import swipe from '../base/swipe.vue';
    import {setGoodsData, getGoodsNum, getAllGoods, getAllGoodsNum} from '../../js/setproductData.js';
    export default {
        data: function () {
            return {
                swipeDatas: [],
                productInfo: {},
                buyNum: getGoodsNum(this.$route.params.id) || 0
            }
        },
        created: function () {
            this.getSwipeDatas();
            this.getProductInfo();
            console.log(this.buyNums);
        },
        methods: {
            getSwipeDatas: function () {
                var url = 'http://139.199.192.48:8888/api/getthumimages/'+ this.$route.params.id;
                this.$http.get(url).then(function (rep) {
                    if(rep.body.status == 0) {
                        this.swipeDatas = rep.body.message;
                    }
                    this.swipeDatas.forEach(function (img, index) {
                        index = index % 16;
                        img.img = '../src/images/'+ index + '.jpg';
                    });
                });
            },
            getProductInfo: function () {
                var url = 'http://139.199.192.48:8888/api/goods/getinfo/'+ this.$route.params.id;
                this.$http.get(url).then(function (rep) {
                    if(rep.body.status == 0) {
                        this.productInfo = rep.body.message[0];
                    }
                    console.log(this.productInfo);
                });
            },
            getBuyNum: function (number) {
                this.buyNum = number;
            },
            addShopCart: function (id) {
                setGoodsData(id, this.buyNum);
                document.querySelector('.mui-badge').innerHTML = getAllGoodsNum();
            }
        },
        components: {
            'v-swipe': swipe
        }
    }
</script>

<style scoped lang="less">
    .mui-card-content {
        line-height: 38px;
        .buyNum {
            margin-bottom: 20px;
        }
        .params {
            text-align: center;
        }
    }
</style>