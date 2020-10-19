import instance from './axiosConfig';
export default {
    get: function (url, data) {
        return instance({
            url: url, // 假地址 自行替换
            method: 'get',
            params: data
        });
    },
    post: function (url, data) {
        return instance({
            url: url, // 假地址 自行替换
            method: 'post',
            data: data,
            headers: {
                'Content-Type':'application/json'
            }
        });
    },
    postsign: function (url, data) {
        return instance({
            url: url, // 假地址 自行替换
            method: 'post',
            data: data,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        });
    },
    put: function (url, data) {
        return instance({
            url: url, // 假地址 自行替换
            method: 'put',
            data: data
        });
    },
    delete: function (url, data) {
        return instance({
            url: url, // 假地址 自行替换
            method: 'delete',
            params: data
        });
    },
}