import Mock from 'mockjs'

import rolemenu from "@/api/mock/rolemenu.json";
//（需要用到json文件数据时，可在api下创建mock文件，文件下创建对应的json文件）

// 角色菜单-用到json文件中的数据
Mock.mock('/api/rolemenu','post', () => {
    return rolemenu
});
// 获取 mock.Random 对象
const Random = Mock.Random

// mock一组数据
const simulateData = function () {
    let data = []
    for (let i = 0; i < 8; i++) {
        let data2 = {
            name: Random.cname(),
            date: Random.date(),
            city: Random.city()
        }
        data.push(data2)
    }
    console.log(data)
    return {
        data: data
    }
}

Mock.mock('/user/login', 'get', simulateData)
Mock.mock('/user/login2', 'get', {
    'array|1-5':[
        {
            'string|1-10':'str',
            province:'@province',//内置方法
            city:'@city',
            'id|+1':1,//随机值自动+1
            date:'@date("yyyy-mm-dd")'
        }
    ]
})