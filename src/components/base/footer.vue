<template>
    <footer>
        <nav class="mui-bar mui-bar-tab">
            <a class="mui-tab-item mui-active" href="#/">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </a>
            <a class="mui-tab-item" href="#/products/productsList">
                <span class="mui-icon mui-icon-extra mui-icon-extra-gift"></span>
                <span class="mui-tab-label">商品购买</span>
            </a>
            <a class="mui-tab-item" href="#/shop/shopCart">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">{{ goodsNum }}</span></span>
                <span class="mui-tab-label">购物车</span>
            </a>
            <a class="mui-tab-item" href="#/">
                <span class="mui-icon mui-icon-gear"></span>
                <span class="mui-tab-label">设置</span>
            </a>
        </nav>
    </footer>
</template>

<script>
    import {getAllGoodsNum} from '../../js/setproductData.js';
    export default {
        data: function () {
            return {
                goodsNum: getAllGoodsNum()
            }
        }
    }
</script>

<style scoped>
    footer {
        height: 50px;
    }
</style>