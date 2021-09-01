import axios from 'axios'
axios.defaults.baseURL='http://pcapi-xiaotuxian-front-devtest.itheima.net/'//api请求地址
// 新鲜好物APi
export function getNewGoods(){
    return axios.get('/home/new')
}
// 轮播图APi
export function getBanners(){
    return axios.get('/home/banner')
}