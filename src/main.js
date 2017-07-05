/**
 * Created by Tuber on 2017/7/2.
 */
//导入Vue相关的包
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

//导入mint-ui
import MintUi from 'mint-ui';

//导入样式
import 'mint-ui/lib/style.css';

//手动use
Vue.use(MintUi);

//导入mui
import  '../lib/mui/dist/css/mui.css';
import '../lib/mui/dist/css/icons-extra.css';

//导入moment时间格式化包
import moment from 'moment';

//导入图片预览包
import vuePicturePreview from 'vue-picture-preview';
Vue.use(vuePicturePreview);

//导入公共组件
import comHaeder from './components/base/header.vue';
import comFooter from './components/base/footer.vue';
import homePage from './components/home/home.vue';
import numberBox from './components/base/number.vue';

//导入新闻详细组件
import newsList from './components/news/newsList.vue';
import detailList from './components/news/detailList.vue';

//导入图片分享相关组件
import photoList from './components/photo/photoList.vue';
import photoDetail from './components/photo/phoneDetail.vue';

//导入产品列表相关的组件
import productsList from './components/products/productList.vue';
import productDetails from './components/products/productDetails.vue';

//导入购物车相关的组件
import shopCart from './components/shop/shopCart.vue';

//创建全局组件
Vue.component('v-header', comHaeder);
Vue.component('v-footer', comFooter);
Vue.component('v-numberBox', numberBox);

//导入根文件替换视图
import App from './App.vue';


//手动use下vue-router和vue-resource
Vue.use(VueResource);
Vue.use(VueRouter);



//写主要代码
var vm = new Vue({
    el: '#app',
    data: {},
    render: function (c) {
        return c(App);
    },
    router: new VueRouter({
        routes: [
            {path: '/', component: homePage},
            {path: '/news/newsList', component: newsList},
            {path: '/news/detailList/:id', component: detailList},
            {path: '/photo/photoList', component: photoList},
            {path: '/photo/detail/:id', component: photoDetail},
            {path: '/products/productsList', component: productsList},
            {path: '/products/productDetails/:id', component: productDetails},
            {path: '/shop/shopCart', component: shopCart}
        ]
    })
});
