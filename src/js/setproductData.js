/**
 * Created by Tuber on 2017/7/5.
 */
const GOODS_BUY = 'goodsBuy';

//定义一个从本地存储中获取缓存值的方法
function getStorage() {
    var objStr = localStorage.getItem(GOODS_BUY);
    if(objStr) {
        return JSON.parse(objStr);
    }else {
        return {}
    }
}


//定义一个向本地存储数据的方法
function setStorage(obj) {
    var objStr = JSON.stringify(obj);
    localStorage.setItem(GOODS_BUY, objStr);
}

//定义一个数据对象从本地存储获取数据
var data = getStorage();

//定义一个向本地存储商品id和数量的方法
export function setGoodsData(id, number) {
    data[id] = number;
    setStorage(data);
}

//定义一个获取指定id的商品数量
export function getGoodsNum(id) {
    return data[id];
}

//定义一个获取全部商品数量的方法
export function getAllGoods() {
    return data;
}

//定义获取商品总和的方法
export function getAllGoodsNum() {
    var sum = 0;
    Object.values(data).forEach(function (item) {
        sum += item;
    });
    console.log(sum);
    return sum;
}

//定义一个删除指定id的商品
export function delGood(id) {
    delete data[id];
    setStorage(data);
}