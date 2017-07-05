<template>
    <section>
        <div class="row" v-for="item in shopDatas">
            <mt-switch class="switch" v-model="item.isSelected"></mt-switch>
            <img class="img" :src="item.thumb_path">
            <div class="inforight">
                <h4>{{ item.title }}</h4>
                <div class="bottom">
                    <ul>
                        <li>￥{{ item.sell_price }}</li>
                        <li>
                            <v-numberBox :initVal="goodsBuytotal[item.id]" @productNum="getProductNum" :initId="item.id"></v-numberBox>
                        </li>
                        <li><a href="javascript:void(0)" @click.prevent="removeGoods(item.id)">删除</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div id="total">
            <div class="desc">
                <ul>
                    <li>总计（不含运费）</li>
                    <li>已勾选商品{{ goodsTotalNum }}件,总价:￥{{ goodsTotalPrice }}元</li>
                </ul>
            </div>
            <div id="button">
                <mt-button  type="danger" size="small">去结算</mt-button>
            </div>
        </div>

    </section>
</template>

<script>
    import {getAllGoods, getGoodsNum, setGoodsData, getAllGoodsNum, delGood} from '../../js/setproductData.js';
    export default {
        data: function () {
            return {
                shopDatas: [],
                goodsBuytotal: getAllGoods(),
            }
        },
        created: function () {
          this.getShopCartData();
        },
        methods: {
            getShopCartData: function () {
                var ids = Object.keys(getAllGoods()).join(','),
                    url = 'http://139.199.192.48:8888/api/goods/getshopcarlist/' + ids;
                this.$http.get(url).then(function (rep) {
                    if(rep.body.status == 0) {
                        rep.body.message.forEach(function (obj) {
                            obj.isSelected = true;
                        });
                        this.shopDatas = rep.body.message;
                    }
                    this.shopDatas.forEach(function (img, index) {
                        index = index % 16;
                        img.thumb_path = '../src/images/' + index + '.jpg';
                    })
                    console.log(rep.body.message);
                });
            },
            getProductNum: function (number, id) {

                this.goodsBuytotal[id] = number;
                setGoodsData(id, number);
                document.querySelector('.mui-badge').innerHTML = getAllGoodsNum();
            },
            removeGoods: function (id) {
                delGood(id);
                console.log(id);
                var self = this;
                this.shopDatas.forEach(function (obj, index) {
                    if(obj.id == id) {
                        console.log(obj.id);
                        self.shopDatas.splice(index, 1);
                    }
                    document.querySelector('.mui-badge').innerHTML = getAllGoodsNum();
                });
            }
        },
        computed: {
            goodsTotalNum: function () {
                var sum = 0;
                var selectedObj = {};
                this.shopDatas.forEach(function (item) {
                        selectedObj[item.id] = item.isSelected;
                });
                for(var key in this.goodsBuytotal) {
                    if(selectedObj[key]) {
                        sum += this.goodsBuytotal[key];
                    }
                }
                return sum;
            },
            goodsTotalPrice: function () {
                var sum = 0,
                    self= this;

                this.shopDatas.forEach(function (item, index) {
                    if(item.isSelected) {
                        sum += item.sell_price * self.goodsBuytotal[item.id];
                    }
                });
                return sum;
            }
        }
    }
</script>

<style scoped>
    .row{
        border-bottom: 1px solid rgba(0,0,0,0.3);
        height: 102px;
        display: flex;
        padding: 5px;
    }

    .switch{
        flex:0 0 52px;
    }

    .img{
        margin-left: 5px;
        height: 75px;
        width: 75px;
        flex: 0 0 85px;
    }

    .inforight{
        margin-left: 5px;
        flex:1;
    }

    .inforight ul{
        padding-left: 0px;
    }

    .inforight li{
        list-style: none;
        display: inline-block;
    }

    .inforight h4{
        color: #0094ff;
        font-size: 14px;
    }

    .bottom li:first-child{
        color:red;
        margin-right: 5px;
    }

    .bottom li:last-child{
        margin-left: 5px;
    }

    #total{
        height: 100px;
        background-color: rgba(0,0,0,0.1);
        display: flex;
        padding: 5px;;
    }

    #total ul {
        padding-left: 0px;
    }

    #total li{
        list-style: none;
        font-size: 14px;
    }

    #button{
        flex:0 0 60px;
        margin: 30px 0 0 0 ;
    }

    .desc{

        flex:1;
    }
</style>