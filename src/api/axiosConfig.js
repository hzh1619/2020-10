import Axios from 'axios';
import router from '../router';
import { Loading, Message } from 'element-ui';

//创建axios的一个实例
var instance = Axios.create({
    baseURL: '/',
    timeout: 12000,
    headers: {'Content-Type':'application/json;charset=UTF-8'}
});

//定义loading变量
// let loading;

// function startLoading() {
//     loading = Loading.service({
//         lock: true,
//         text: '努力加载中...',
//         background: 'rgba(0,0,0,0.3)',
//         target: document.querySelector('.loading-area')
//     })
// }
//
// function endLoading() {
//     loading.close()
// }

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // startLoading();
    if (sessionStorage.getItem('token')) {
        config.headers = {
            'Content-Type': 'application/json;charset=UTF-8',
            'token': sessionStorage.getItem('token'),
            'Retry-After': 3600
        };
    }
    return config;
}, function (error) {
    // endLoading();
    return Promise.reject(error)
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // endLoading();
    if (response.data.code == 200) {
        return response;
    } else if(response.data.code==505) {
        Message({
            type:'error',
            title:'提示',
            message:'该账号在异地登录!',
            duration:2000
        });
        setTimeout(()=>{
            router.push("/login")
        },1000)
    }else{
        Message({
            type: 'error',
            title: '提示消息',
            message: response.data.msg,
            duration: 3000
        });
        return response;
    }
}, function (error) {
    // endLoading();
    if (error && error.response) {
        switch (error.response.status) {
        case 400:
            error.message = '请求错误';
            break;
        case 401:
            error.message = '未授权，请登录';
            break;
        case 403:
            error.message = '拒绝访问';
            break;
        case 404:
            error.message = `网络请求不存在: ${error.response.config.url}`;
            break;
        case 408:
            error.message = '请求超时';
            break;
        case 500:
            error.message = '服务器内部错误';
            break;
        case 501:
            error.message = '服务未实现';
            break;
        case 502:
            error.message = '网关错误';
            break;
        case 503:
            error.message = '服务不可用';
            break;
        case 504:
            error.message = '网关超时';
            break;
        case 505:
            error.message = '该账号在异地登录，如不是本人操作，请及时联系管理员。';
            router.push("/login");
            break
        }
    }
    Message(
        {type: 'error',
            title: '提示',
            message: error.message
        });
    return Promise.reject(error)
});

export default instance;




